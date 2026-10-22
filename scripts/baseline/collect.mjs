#!/usr/bin/env node
/**
 * As-Is 视口基线采集器
 *
 * 采集每个抽样页面在 390/768/1440 三视口下的机器可测事实，
 * 产出 baseline.json（可复算）+ baseline.md（人读）。
 *
 * 用法：
 *   node scripts/baseline/collect.mjs --base http://localhost:3100
 *   node scripts/baseline/collect.mjs --base http://localhost:3100 --out <dir>
 *   node scripts/baseline/collect.mjs --compare <旧baseline.json>   # 漂移比对
 */
import { createRequire } from 'node:module';
import os from 'node:os';

// 项目内 playwright 1.61.1 要 chromium_headless_shell-1228，本机只有 1243。
// 回落到 ~/.config/alma/tools/pw-shot 的 playwright 1.63.0（已验证匹配本机浏览器）。
let chromium;
try {
  ({ chromium } = await import('playwright'));
  await chromium.launch({ headless: true }).then(b => b.close());
} catch {
  const req = createRequire(path.join(os.homedir(), '.config/alma/tools/pw-shot/package.json'));
  ({ chromium } = req('playwright'));
}
import fs from 'node:fs';
import path from 'node:path';

const here = path.dirname(new URL(import.meta.url).pathname);
const cfg = JSON.parse(fs.readFileSync(path.join(here, 'sample-routes.json'), 'utf8'));

const args = process.argv.slice(2);
const get = (f, d) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : d; };
const BASE = get('--base', 'http://localhost:3100');
const OUT = get('--out', path.join(here, 'out'));
const COMPARE = get('--compare', null);

fs.mkdirSync(OUT, { recursive: true });

/** 在页面里执行的探针 —— 全部是机器可测的几何/结构事实 */
const PROBE = () => {
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;

  // ---- 横向溢出 ----
  const overflow = document.documentElement.scrollWidth - vw;

  // ---- 找出真正溢出的元素（只报前 5 个，避免刷屏）----
  const offenders = [];
  if (overflow > 0) {
    for (const el of document.querySelectorAll('*')) {
      const r = el.getBoundingClientRect();
      if (r.width === 0) continue;
      if (r.right > vw + 1 || r.left < -1) {
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || '').toString().slice(0, 60),
          left: Math.round(r.left), right: Math.round(r.right),
        });
        if (offenders.length >= 5) break;
      }
    }
  }

  // ---- 标题层级 ----
  const h1s = [...document.querySelectorAll('h1')].map(e => e.textContent.trim().slice(0, 80));
  const h2s = [...document.querySelectorAll('h2')].map(e => e.textContent.trim().slice(0, 60));

  // ---- 折叠上方（首屏）----
  const aboveFold = [];
  for (const el of document.querySelectorAll('h1,h2,section,article')) {
    const r = el.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0 && r.height > 0) {
      aboveFold.push({
        tag: el.tagName.toLowerCase(),
        text: el.textContent.trim().slice(0, 50),
        top: Math.round(r.top),
      });
    }
  }

  // ---- CTA 位置 ----
  const ctas = [];
  for (const a of document.querySelectorAll('a,button')) {
    const t = (a.textContent || '').trim();
    if (!t || t.length > 24) continue;
    if (!/(咨询|询盘|联系|预约|查看|了解|立即|获取| inquire|quote|contact|view|learn|book|get )/i.test(t)) continue;
    const r = a.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    ctas.push({ text: t.slice(0, 24), top: Math.round(r.top + window.scrollY), inFold: r.top < vh });
  }

  // ---- 图片 ----
  const imgs = [...document.querySelectorAll('img')];
  // 断图 = 已开始加载（complete）且拿到 0 宽 → 真失败。
  // 排除 loading="lazy" 且尚未进入过视口的（那时 complete 也是 true 但 naturalWidth 0 ≠ 失败）
  const broken = imgs.filter(i => {
    if (!i.complete || i.naturalWidth !== 0) return false;
    if (i.loading === 'lazy' && !i.hasAttribute('data-lazy-visited')) return false;
    return true;
  }).length;

  // ---- 表格（多端降级策略的关键）----
  const tables = [...document.querySelectorAll('table')].map(t => {
    const r = t.getBoundingClientRect();
    return { w: Math.round(r.width), h: Math.round(r.height), rows: t.querySelectorAll('tr').length };
  });

  // ---- 结构统计 ----
  const stats = {
    sections: document.querySelectorAll('section').length,
    articles: document.querySelectorAll('article').length,
    links: document.querySelectorAll('a').length,
    buttons: document.querySelectorAll('button').length,
    imgCount: imgs.length,
    pageHeight: Math.round(document.documentElement.scrollHeight),
  };

  // ---- SEO / AI 可抽取信号 ----
  const canonical = document.querySelector('link[rel=canonical]')?.href || null;
  const robots = document.querySelector('meta[name=robots]')?.content || null;
  const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')]
    .map(s => { try { const j = JSON.parse(s.textContent); return j['@type'] || (Array.isArray(j) ? j.map(x => x['@type']) : null); } catch { return null; } })
    .filter(Boolean);

  // ---- 首屏信息密度：折叠上方有多少"可独立理解的内容块" ----
  // 口径：h1/h2 标题 + 段落 + 卡片容器，取折叠上方且高度 > 0 的
  const blocksAbove = [];
  for (const el of document.querySelectorAll('h1,h2,p,article,li')) {
    const r = el.getBoundingClientRect();
    if (r.height === 0 || r.width === 0) continue;
    if (r.top >= vh || r.bottom <= 0) continue;
    blocksAbove.push({ tag: el.tagName.toLowerCase(), area: Math.round(r.width * r.height) });
  }
  // 首屏文字量（粗略：折叠上方可见文本字符数）
  let foldText = 0;
  for (const el of document.querySelectorAll('h1,h2,h3,p,li,span,a')) {
    const r = el.getBoundingClientRect();
    if (r.height === 0 || r.top >= vh || r.bottom <= 0) continue;
    foldText += (el.textContent || '').trim().length;
  }

  // ---- 网格布局：卡片容器的列数（响应式模式的核心依据）----
  const grids = [];
  for (const el of document.querySelectorAll('div,ul,ol,section')) {
    const cs = getComputedStyle(el);
    if (!cs.display.includes('grid')) continue;
    const cols = cs.gridTemplateColumns.split(' ').filter(Boolean).length;
    if (cols < 1) continue;
    const kids = [...el.children].filter(c => c.getBoundingClientRect().height > 0).length;
    if (kids < 2) continue;
    const r = el.getBoundingClientRect();
    if (r.height < 40) continue;
    grids.push({
      cols,
      kids,
      w: Math.round(r.width),
      cls: (el.className || '').toString().slice(0, 40),
    });
  }
  // 只保留最外层（避免嵌套网格刷屏）：按宽度降序取前 3
  grids.sort((a, b) => b.w - a.w);
  const topGrids = grids.slice(0, 3);

  return {
    viewport: { w: vw, h: vh },
    foldBlocks: blocksAbove.length,
    foldTextChars: foldText,
    grids: topGrids,
    overflow, offenders,
    h1Count: h1s.length, h1: h1s[0] || null,
    h2Count: h2s.length, h2s: h2s.slice(0, 12),
    aboveFoldCount: aboveFold.length, aboveFold: aboveFold.slice(0, 8),
    ctaCount: ctas.length, ctasInFold: ctas.filter(c => c.inFold).length,
    ctaFirstTop: ctas.length ? Math.min(...ctas.map(c => c.top)) : null,
    ctaSample: ctas.slice(0, 5),
    imgCount: imgs.length, brokenImgs: broken,
    tables,
    stats, canonical, robots, schemas,
  };
};

const results = [];
const browser = await chromium.launch({ headless: true });

for (const vp of cfg.viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  for (const s of cfg.samples) {
    const page = await ctx.newPage();
    let rec;
    try {
      const resp = await page.goto(BASE + s.route, { waitUntil: 'networkidle', timeout: 30000 });
      // 滚到底再回顶：触发全部懒加载，避免时序抖动造成断图误报
      await page.evaluate(async () => {
        const step = window.innerHeight;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          document.querySelectorAll('img[loading=lazy]').forEach(i => i.setAttribute('data-lazy-visited', '1'));
          await new Promise(r => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForLoadState('networkidle').catch(() => {});
      await page.waitForTimeout(600); // 等 reveal 动画与迟挂载
      rec = await page.evaluate(PROBE);
      rec.status = resp?.status() ?? null;
      rec.ok = true;
    } catch (e) {
      rec = { ok: false, error: String(e).slice(0, 200) };
    }
    results.push({ route: s.route, type: s.type, why: s.why, viewportId: vp.id, viewport: vp.label, ...rec });
    console.log(`  ${vp.id.padEnd(8)} ${s.route.padEnd(42)} ${rec.ok ? '✅' : '❌ ' + rec.error}`);
    await page.close();
  }
  await ctx.close();
}
await browser.close();

const payload = {
  generatedAt: new Date().toISOString(),
  base: BASE,
  viewports: cfg.viewports,
  samples: cfg.samples,
  records: results,
};
const jsonPath = path.join(OUT, 'baseline.json');
fs.writeFileSync(jsonPath, JSON.stringify(payload, null, 2));

// ---- 人读 md ----
const md = [];
md.push('# As-Is 视口基线');
md.push('');
md.push(`> 生成：${payload.generatedAt} ｜ 源：\`${BASE}\` ｜ 抽样 ${cfg.samples.length} 页 × ${cfg.viewports.length} 视口`);
md.push('> 本文件由 `scripts/baseline/collect.mjs` 生成，**不要手改**。');
md.push('');
md.push('## 总览');
md.push('');
md.push('| 页面 | 类型 | 390 溢出 | 768 溢出 | 1440 溢出 | 断图 | H1 | 首屏 CTA |');
md.push('|---|---|---|---|---|---|---|---|');
for (const s of cfg.samples) {
  const r = id => results.find(x => x.route === s.route && x.viewportId === id);
  const m = r('mobile'), t = r('tablet'), d = r('desktop');
  const f = (x, k) => x?.ok ? x[k] : '—';
  md.push(`| \`${s.route}\` | ${s.type} | ${f(m,'overflow')} | ${f(t,'overflow')} | ${f(d,'overflow')} | ${f(d,'brokenImgs')} | ${f(d,'h1Count')} | ${f(d,'ctasInFold')} |`);
}
md.push('');
for (const s of cfg.samples) {
  md.push(`## \`${s.route}\` — ${s.type}`);
  md.push('');
  md.push(`> ${s.why}`);
  md.push('');
  for (const vp of cfg.viewports) {
    const x = results.find(r => r.route === s.route && r.viewportId === vp.id);
    if (!x?.ok) { md.push(`### ${vp.label} — ❌ ${x?.error}`); continue; }
    md.push(`### ${vp.label}`);
    md.push('');
    md.push(`- 横向溢出：**${x.overflow}px** ${x.overflow > 0 ? '🔴' : '✅'}`);
    if (x.offenders?.length) {
      md.push(`  - 溢出元素：${x.offenders.map(o => `<${o.tag}> ${o.left}→${o.right}`).join(' ｜ ')}`);
    }
    md.push(`- H1：**${x.h1Count}** 个 ${x.h1 ? `（"${x.h1}"）` : ''} ｜ H2：${x.h2Count} 个`);
    md.push(`- 首屏区块：**${x.aboveFoldCount}** ｜ 首屏内 CTA：**${x.ctasInFold}** / 共 ${x.ctaCount}`);
    if (x.ctaFirstTop != null) md.push(`- 首个 CTA 位置：${x.ctaFirstTop}px`);
    md.push(`- 图片 ${x.imgCount}（断图 **${x.brokenImgs}**）｜ 页高 ${x.stats?.pageHeight}px`);
    md.push(`- 首屏信息密度：**${x.foldBlocks}** 块 / 约 **${x.foldTextChars}** 字符`);
    if (x.grids?.length) {
      md.push(`- 网格布局：${x.grids.map(g => `${g.cols}列×${g.kids}项(${g.w}px)`).join(' ｜ ')}`);
    }
    if (x.tables?.length) md.push(`- 表格 ${x.tables.length} 个：${x.tables.map(t => `${t.rows}行/${t.w}px`).join(' ｜ ')}`);
    md.push(`- canonical：${x.canonical ? '✅' : '—'} ｜ robots：${x.robots || '（默认）'} ｜ schema：${x.schemas?.length ? x.schemas.join(',') : '—'}`);
    md.push('');
  }
}
const mdPath = path.join(OUT, 'baseline.md');
fs.writeFileSync(mdPath, md.join('\n'));

console.log(`\n✅ 写入 ${jsonPath}`);
console.log(`✅ 写入 ${mdPath}`);

// ---- 漂移比对 ----
if (COMPARE) {
  const old = JSON.parse(fs.readFileSync(COMPARE, 'utf8'));
  const key = r => `${r.route}|${r.viewportId}`;
  const oldMap = new Map(old.records.map(r => [key(r), r]));
  let drift = 0;
  console.log('\n=== 漂移比对 ===');
  for (const r of results) {
    const o = oldMap.get(key(r));
    if (!o) { console.log(`  ➕ 新增 ${key(r)}`); continue; }
    for (const f of ['overflow', 'h1Count', 'h2Count', 'ctaCount', 'ctasInFold', 'brokenImgs', 'imgCount']) {
      if (o[f] !== r[f]) { console.log(`  🔴 ${key(r)} · ${f}: ${o[f]} → ${r[f]}`); drift++; }
    }
  }
  console.log(drift === 0 ? '\n✅ 零漂移' : `\n⚠️ ${drift} 处漂移`);
  if (drift > 0) process.exitCode = 1;
}
