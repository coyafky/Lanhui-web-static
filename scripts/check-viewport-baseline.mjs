#!/usr/bin/env node
/**
 * 视口基线漂移门禁
 *
 * 用法：
 *   node scripts/check-viewport-baseline.mjs --base http://localhost:3100
 *     --golden scripts/baseline/out/baseline.json
 *
 * 行为：
 *   - 无 golden → 采集后写 golden，退出 0（首次建基线）
 *   - 有 golden → 比对，漂移则退出 1
 *
 * 只比对「不因内容微调而抖动」的结构指标：
 *   overflow / h1Count / brokenImgs / grids 列数 / tables 数
 * 不比对：
 *   页高、首屏字符数（内容增删会变，属于正常演进）
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const get = (f, d) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : d; };

const BASE = get('--base', null);
const GOLDEN = get('--golden', path.join(here, 'baseline/out/baseline.json'));
const TMPOUT = get('--tmpout', path.join(here, 'baseline/out/.drift-check'));

if (!BASE) {
  console.error('❌ 需要 --base <URL>。静态产物：先起服务再跑，例如');
  console.error('   cd out && python3 -m http.server 3100 &');
  console.error('   node scripts/check-viewport-baseline.mjs --base http://localhost:3100');
  process.exit(2);
}

// 0) 先探活 —— 连不上必须明确报「连不上」，不能伪装成「153 处漂移」
try {
  const r = await fetch(BASE + '/', { signal: AbortSignal.timeout(5000) });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
} catch (e) {
  console.error(`❌ 连不上 ${BASE} —— ${e.message}`);
  console.error('   静态产物自检需先起服务，例如：');
  console.error('   cd out && python3 -m http.server 3100 &');
  console.error('   或：npm run build && npm run start');
  process.exit(2);
}

// 1) 采集到临时目录
execFileSync('node', [
  path.join(here, 'baseline/collect.mjs'),
  '--base', BASE,
  '--out', TMPOUT,
], { stdio: 'inherit' });

const fresh = JSON.parse(fs.readFileSync(path.join(TMPOUT, 'baseline.json'), 'utf8'));
const okCount = fresh.records.filter(r => r.ok).length;
if (okCount === 0) {
  console.error(`❌ ${fresh.records.length} 条全部采集失败 —— 是环境问题，不是基线漂移`);
  console.error('   检查服务是否真的伺服了这些路由（静态导出是 目录/index.html 形式）');
  process.exit(2);
}
if (okCount < fresh.records.length) {
  console.warn(`⚠️ ${fresh.records.length - okCount}/${fresh.records.length} 条采集失败，比对结果不可信`);
}

// 2) 无 golden → 建基线
if (!fs.existsSync(GOLDEN)) {
  fs.mkdirSync(path.dirname(GOLDEN), { recursive: true });
  fs.copyFileSync(path.join(TMPOUT, 'baseline.json'), GOLDEN);
  fs.copyFileSync(path.join(TMPOUT, 'baseline.md'), GOLDEN.replace('.json', '.md'));
  console.log(`\n✅ 已建立基线：${GOLDEN}`);
  console.log('   之后每次改动都会与之比对。若要接受新现状，删掉该文件重跑。');
  process.exit(0);
}

// 3) 比对
const old = JSON.parse(fs.readFileSync(GOLDEN, 'utf8'));
const key = r => `${r.route}|${r.viewportId}`;
const oldMap = new Map(old.records.map(r => [key(r), r]));

const FIELDS = ['overflow', 'h1Count', 'brokenImgs'];
let drift = 0;
const lines = [];

for (const r of fresh.records) {
  const o = oldMap.get(key(r));
  if (!o) { lines.push(`  ➕ 新增：${key(r)}`); continue; }

  for (const f of FIELDS) {
    if (o[f] !== r[f]) {
      lines.push(`  🔴 ${key(r)} · ${f}: ${o[f]} → ${r[f]}`);
      drift++;
    }
  }
  // 网格列数（取最大网格的列数）
  const gc = g => (g && g.length ? g[0].cols : 0);
  if (gc(o.grids) !== gc(r.grids)) {
    lines.push(`  🔴 ${key(r)} · 主网格列数: ${gc(o.grids)} → ${gc(r.grids)}`);
    drift++;
  }
  // 表格数
  const tc = t => (t ? t.length : 0);
  if (tc(o.tables) !== tc(r.tables)) {
    lines.push(`  🔴 ${key(r)} · 表格数: ${tc(o.tables)} → ${tc(r.tables)}`);
    drift++;
  }
}

console.log('\n=== 视口基线漂移检查 ===');
if (lines.length) console.log(lines.join('\n'));

if (drift === 0) {
  console.log(`\n✅ 零漂移（${fresh.records.length} 条记录 × ${FIELDS.length + 2} 项指标）`);
  process.exit(0);
} else {
  console.log(`\n❌ ${drift} 处漂移。`);
  console.log('   若这些变化是有意的，删除 golden 重跑以接受新基线：');
  console.log(`   rm ${GOLDEN}`);
  process.exit(1);
}
