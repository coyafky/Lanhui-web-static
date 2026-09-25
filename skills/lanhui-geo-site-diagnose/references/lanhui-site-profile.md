# 蓝辉轻改官网 GEO 画像

> 基线快照时间：2026-08-31。每次诊断后应更新「本次得分」列，与基线对比。

## 站点身份
| 项 | 值 |
| --- | --- |
| Canonical host | `https://lanhuiqinggai.com/`（无 www；www 301 到无 www） |
| 行业 | 汽车改色膜 / 隐形车衣(PPF) / 汽车窗膜 / 轮毂升级 / 电动踏板 |
| 品牌实体 | 蓝辉轻改 LANHUI、运营品牌「蓝小辉阿波」 |
| 建站技术 | Next.js 静态导出 + nginx（`x-frame-options`/`nosniff`/`referrer-policy` 安全头齐全） |
| robots | 已放行 `GPTBot / ClaudeBot / PerplexityBot / Google-Extended / Bytespider/ * `，`Disallow: /api/ /admin/ /preview/` |
| sitemap | 存在且达 61 URL 量级；个别 lastmod 解释性弱 |

## 基线得分（overall 85，confidence 84，protocol 1.0.0）
首页 8 维度：
| 维度 | 得分 | 解读 |
| --- | ---: | --- |
| AI 可访问与可发现性 access_discovery | 100 | robots+sitemap 均可访问 |
| 内容架构与覆盖 architecture_coverage | 100 | 导航/结构清晰 |
| 实体清晰度 entity_clarity | 100 | 品牌+产品实体明确 |
| 可回答性 answerability | 100 | 常见问题可被直接回答 |
| 证据与引用就绪 evidence_citation | 83 | 部分页缺数据来源注解 |
| 权威与信任 authority_trust | **50** | 缺可追责作者/机构署名 |
| 结构与可提取性 structured_extractability | 100 | 结构化数据友好 |
| 新鲜度 freshness | 100 | 首页 lastmod 可解释 |

代表页（首页外的 listing 页）架构略低（品牌页 85、产品页 92、代理页 68、联系页 78），权威与证据在多数页 50 上下。

## 已知 GAP（源自 2026-08-31 运行 remediation-backlog）
1. **P60 / high / evidence_citation**：关键主张附近缺数据、来源、方法或参考依据 → 影响 AI 引用采信。
2. **P45 / medium / authority_trust**：缺可追责的作者、审核者或机构主体 → 权威分 50。
3. **P30 / low / architecture_coverage**：部分页 URL、标题、H1 与页面主任务不一致。
4. **P30 / low / freshness**：sitemap lastmod 需真实、可解释。

## 抓取注意
- `/blog` 在 2026-08-31 抓取超时记 `render_gap`——内容未被分析，勿臆测；后续诊断若持续超时需单独复审或换 `--render browser`。
- 每次运行建议用 HTTP 模式（`--render http`），默认最多 10 页，代表页 10 类中各取一页。

## 复跑命令
```bash
cd /Users/fkycoya/Documents/Code/Lanhui-web-static
./geo-seo-hub/.venv/bin/geo-seo-hub site-diagnose \
  --url https://lanhuiqinggai.com \
  --output runs \
  --locale zh-CN \
  --max-pages 10 \
  --render http
```
