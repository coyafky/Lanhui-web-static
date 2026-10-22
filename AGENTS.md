# AGENTS.md — 蓝辉轻改 LANHUI 官网

> **本文件是三个 Agent（Alma · Claude · opencode）的唯一宪法正本。**
> `CLAUDE.md` 与 `.opencode/agents/` 均为指向本文件的指针。
>
> ⚠️ **Next.js 16 有 breaking changes** —— API、约定、文件结构可能与你的训练数据不同。
> 写码前读 `node_modules/next/dist/docs/` 中的相关指南，注意 deprecation 通知。

---

## 1. 项目身份（一句话）

蓝辉轻改（顺德大良店）品牌官网 —— 汽车轻改装 + 车身膜服务。
**纯静态**站点，Next.js `output: "export"` → `out/` → Nginx。
无数据库、无 API 路由、无运行时 Node 服务。

---

## 2. 红线（不可协商）

1. **不改生成物**：`src/lib/wheels.data.ts`（`npm run wheels:data` 产出，约 425KB）**禁止手改**
2. **不动构建产物**：`out/`、`.next/`
3. **不 `git push`**、**不部署**（人类专属动作）
4. **不碰 `.env*`**
5. **文档不进 git**：`specs/` `adr/` `rules/` `work/` 均被 `.gitignore` 忽略，`git add` 无效（依据 `adr/0006`）
6. **产品展示页不标价格**（依据 `adr/0004`）
7. **文案禁用极限词**（依据 `adr/0005`，清单见 `rules/content-copy.md`）
8. **别把别的项目混进来**：`/gallery`、`/course-list`、`/tools/*`、`119.91.205.130` 属于 PersonalWebsite 项目，本项目没有这些路由
9. **门禁要带退出码**：`npm run build > /tmp/b.log 2>&1; echo EXIT=$?` —— **别用管道**，`| tail` 会把退出码换成 tail 的
10. **提交前先看 `git status --porcelain`**（本仓库长期有大量未跟踪文件）

---

## 3. 常用命令

| Command | What |
|---------|------|
| `npm run dev` | dev server → :3000 |
| `npm run build` | static export → `out/` |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | vitest (happy-dom) |
| `npm run check` | lint → typecheck → test → verify:zeekr-images → wheels:verify → build |
| `npm run check:static` | **发布前跑这个**：上面再加 `verify:static-images` + `check:static-boundary` + `check:static-output` |

> ⚠️ `check` ≠ `check:static`。
> ✅ **2026-10-22 更新**：`check:static` 的裸域校验已修复，本地完整门禁已通过。发布前仍须重新运行并记录退出码。

---

## 4. 去哪找什么（索引）

- [`DOCUMENTATION.md`](DOCUMENTATION.md) —— 当前目录地图、文档分类、截图/图片边界与按任务裁剪的开发流程
- [`specs/active/agent-workflow-playbook.md`](specs/active/agent-workflow-playbook.md) —— 如何向 Codex / Claude / 其他 Agent 下任务并要求实现、审查和验收
- [`specs/active/commercial-website-readiness-roadmap.md`](specs/active/commercial-website-readiness-roadmap.md) —— 当前商业化基线、业务缺口、技术演进触发条件与分阶段路线图
- [`CLAUDE.md`](CLAUDE.md) —— Claude 入口和当前项目文件夹速览

### 规则层 `rules/` —— 怎么做

| 文件 | 何时读 |
|---|---|
| [`rules/frontend.md`](rules/frontend.md) | 写前端代码、加车型页、动数据层 |
| [`rules/ui.md`](rules/ui.md) | 写 UI、动样式、吸顶元素 |
| [`rules/content-copy.md`](rules/content-copy.md) | **改任何面向客户的文案** |
| [`rules/seo.md`](rules/seo.md) | 动 canonical / sitemap / schema / 路由 |
| [`rules/deploy.md`](rules/deploy.md) | 部署、跑构建门禁 |

### 决策层 `adr/` —— 为什么

| 文件 | 决策 |
|---|---|
| [`adr/0001`](adr/0001-static-only-architecture.md) | 为什么纯静态 |
| [`adr/0002`](adr/0002-single-build-on-2c2g.md) | 为什么构建必须串行限内存 |
| [`adr/0003`](adr/0003-bare-domain-canonical.md) | 为什么 canonical 用裸域 |
| [`adr/0004`](adr/0004-no-price-online.md) | 为什么不标价格 |
| [`adr/0005`](adr/0005-copy-legal-constraints.md) | 为什么禁极限词 |
| [`adr/0006`](adr/0006-docs-not-in-git.md) | 为什么文档不进 git |

### 规格层 `specs/` —— 做什么

```
specs/
├── active/          当前有效的规格、计划、审计和验收报告
├── archive/         已完成/过期材料及历史报告、图片证据
├── _templates/      新规格与验收报告模板
├── components/      共享组件参考
└── INDEX.md         当前规格导航（不再维护易过期的整站状态矩阵）
```

**PRD 层已取消**（2026-10-06）。新任务在 `specs/active/` 写一份精简规格，包含背景、目标、非目标、关键约束和验收标准；只有会改变实现或验收的细节才需要展开。
已完成报告归入 `specs/archive/test-reports/`，不要把历史测试结论当作当前验证。

### 任务层 `work/`

- [`work/COLLAB.md`](work/COLLAB.md) —— **多 Agent 单写者锁**，开工前必读
- `work/` —— 当前协作锁、任务交接和必要的完成记录；不要假设存在固定的 `completed/` 子目录

### Skill `skills/`

| Skill | 用途 |
|---|---|
| `content-copy-audit` | 文案极限词与免责声明检查（改文案时用） |
| `lanhui-geo-site-diagnose` | GEO 站点诊断（引擎在仓库外 `~/Documents/Code/_vendored/geo-seo-hub/`） |
| `lanhui-qa`（`.agents/skills/lanhui-qa/`） | **浏览器 QA 项目档案**（project profile）：本项目端口/红线/条款/已知阻塞。方法层在通用技能 `webapp-qa` |

### QA 与验收：三个角色的分工

| 角色 | 回答的问题 | 位置 |
|---|---|---|
| `lanhui-verify` agent | 构建产物里**对不对**（门禁、数据一致性、渲染产物核对） | `.opencode/agents/lanhui-verify.md` |
| `lanhui-qa` agent + skill | 用起来**对不对**（真浏览器行为、响应式、运行时错误） | `.opencode/agents/lanhui-qa.md` ｜ `.agents/skills/lanhui-qa/` |
| `ui-review`（评审记录） | 看起来**对不对**（静态长图视觉评审，ChatGPT 网页版） | `docs/agent/ui-review/` |

- QA 报告落点：`specs/active/test-reports/<YYYY-MM-DD>-<主题>.md`（状态四态：`PASS`/`FAIL`/`BLOCKED`/`NOT_RUN`）
- QA 截图/trace 落点：`docs/agent/qa/`（不进 git）
- **本地默认端口 3100**（3000 被 PersonalWebsite 占）
- 开工前先读 `.agents/skills/lanhui-qa/references/PITFALLS.md`（已踩过的 6 类误报坑）

**接线（2026-10-10 打通）**：`ai-dev-workflow`（全局开发流程技能）的 **2.6 端到端测试 · 浏览器层** 指向
**`webapp-qa`（通用 QA 方法）+ 本仓库的 `lanhui-qa`（项目 profile）** ——
动过 UI/样式/路由/表单/图片时，走完开发流程会在端到端环节自动调用。

**两层分工（重要）**：
- **方法层** `~/.config/alma/skills/webapp-qa/` —— 6 Phase 工作流、铁律、截图纪律、通用验收基线、通用坑。**任何 Web 项目可用**。
- **项目层** 本仓库 `.agents/skills/lanhui-qa/` —— 只装项目专属事实（端口 3100、不标价、车型页 Tab 条款）。**换项目只需新写 profile，不用重写方法。**

`lanhui-qa` 通过软链 `~/.agents/skills/lanhui-qa` → 本仓库 `.agents/skills/lanhui-qa/` 注册到全局技能枢纽。

---

## 5. 多 Agent 协作

三个 Agent **共享同一份工作副本，没有 worktree 隔离**。

- **开工前必读** [`work/COLLAB.md`](work/COLLAB.md)：分工判据、单写者锁、交接包格式
- **单写者锁**：同一时刻只允许一个 Agent 写。写前登记，收工释放
- opencode 配置：`opencode.json` + `.opencode/agents/`（本仓库专用，不进 git）

---

## 6. Session 收尾

完成有意义的工作后：

1. `TODO.md` —— 当前重点是否还符合实际？
2. `adr/` —— 是否做了将来会被问「为什么」的决策？→ 新增 ADR
3. `specs/active/` —— 新增的规格放对位置了吗？
4. `work/` —— 任务真的完成了吗？移到 `completed/`
