/**
 * image-size.mjs — 只读图片「头部」取尺寸（无副作用，无第三方依赖）
 *
 * 为什么需要它：图片管线改用 `cwebp` 命令行编码后，就不再能用 `sharp` 读元数据。
 * 而管线需要知道
 *   1. 源图真实尺寸（判断是否被放大 / 是否非正方形）；
 *   2. 产出 WebP 的真实尺寸（增量判断「已产出的是否就是目标画布」）。
 * 两者都只需读文件头几十字节，**不做完整解码** —— 与契约 §9.3 对校验脚本
 * 「不解码图片，避免给 `npm run check` 增加秒级开销」的要求一致。
 *
 * 依赖的既有事实：源图扩展名不可信（实测 513 个 `.png` 里 173 个其实是 JPEG 内容），
 * 因此这里一律**按内容识别**（magic bytes），不看扩展名。
 *
 * 支持：PNG / JPEG（SOF0-15）/ WebP（VP8 / VP8L / VP8X）。识别不出返回 `null`。
 */

import { closeSync, openSync, readSync } from "node:fs";

/** 读头部字节数（最大 JPEG 段长度 64KB，留足余量覆盖 APPn/EXIF）。 */
const HEAD_BYTES = 256 * 1024;

/**
 * @typedef {{ width: number; height: number; format: string }} ImageSize
 */

/** 读取文件头部若干字节；文件短于请求长度时返回实际读到的部分。 */
function readHead(path) {
  const fd = openSync(path, "r");
  try {
    const buffer = Buffer.alloc(HEAD_BYTES);
    const read = readSync(fd, buffer, 0, HEAD_BYTES, 0);
    return buffer.subarray(0, read);
  } finally {
    closeSync(fd);
  }
}

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

/** PNG：签名后紧跟 IHDR，宽高为 IHDR 起始的 8/12 字节（大端 32 位）。 */
function parsePng(buffer) {
  if (buffer.length < 24) return null;
  if (!buffer.subarray(0, 8).equals(PNG_SIGNATURE)) return null;
  if (buffer.toString("latin1", 12, 16) !== "IHDR") return null;
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
    format: "png",
  };
}

/** JPEG：扫描段头，取 SOFn（0xC0–0xCF，排除 DHT/JPG/DAC）里的高宽。 */
function parseJpeg(buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 9 <= buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buffer[offset + 1];
    // 填充字节 / 起始码 / 无载荷标记（RSTn / SOI / EOI / TEM）
    if (marker === 0xff || marker === 0x00) {
      offset += 1;
      continue;
    }
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      offset += 2;
      continue;
    }
    if (marker === 0xd9 || marker === 0xda) return null; // EOI / 进入压缩数据，无 SOF
    const segmentLength = buffer.readUInt16BE(offset + 2);
    const isStartOfFrame =
      marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isStartOfFrame) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
        format: "jpeg",
      };
    }
    offset += 2 + segmentLength;
  }
  return null;
}

/** WebP：RIFF 容器，按第一种 chunk 的 fourcc 分支解析。 */
function parseWebp(buffer) {
  if (buffer.length < 30) return null;
  if (buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WEBP") {
    return null;
  }
  const fourCc = buffer.toString("ascii", 12, 16);
  if (fourCc === "VP8 ") {
    // 20: 帧标签(3) + 起始码(3, 恒为 9d 01 2a) + 宽(14 位) + 高(14 位)
    if (buffer.toString("latin1", 23, 26) !== "\x9d\x01\x2a") return null;
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
      format: "webp",
    };
  }
  if (fourCc === "VP8L") {
    if (buffer[20] !== 0x2f) return null;
    const bits = buffer.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
      format: "webp",
    };
  }
  if (fourCc === "VP8X") {
    // 20: 标志(1) + 保留(3) + 画布宽-1(24 位小端) + 画布高-1(24 位小端)
    const width = buffer[24] | (buffer[25] << 8) | (buffer[26] << 16);
    const height = buffer[27] | (buffer[28] << 8) | (buffer[29] << 16);
    return { width: width + 1, height: height + 1, format: "webp" };
  }
  return null;
}

/**
 * 按内容识别图片并返回尺寸。
 *
 * @param {string} path
 * @returns {ImageSize | null} 无法识别时返回 `null`（调用方不得当作 0 处理）
 */
export function readImageSize(path) {
  let buffer;
  try {
    buffer = readHead(path);
  } catch {
    return null;
  }
  return parsePng(buffer) ?? parseJpeg(buffer) ?? parseWebp(buffer);
}

/**
 * 只读 WebP 尺寸 —— 判断「已产出的文件是否就是目标画布」。
 *
 * @param {string} path
 * @returns {ImageSize | null}
 */
export function readWebpSize(path) {
  let buffer;
  try {
    buffer = readHead(path);
  } catch {
    return null;
  }
  return parseWebp(buffer);
}
