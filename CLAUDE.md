# CLAUDE.md — 蓝辉轻改 LANHUI Static Website

纯静态品牌官网，Next.js `output: "export"` + Nginx 托管，无数据库运行时依赖。

- 业务：汽车轻改装 + 车身膜服务（顺德大良店）
- 仓库：https://github.com/coyafky/Lanhui-web-static
- Next.js 16 + React 19 + TypeScript strict + Tailwind CSS v4

## Commands

| Command | 用途 |
|---------|------|
| `npm run dev` | 开发服务器 → :3000 |
| `npm run build` | 静态导出 → `out/` |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | vitest |
| `npm run check` | lint → typecheck → test → verify → build |

## 架构

- **纯静态**：所有页面构建时预渲染，无 API 路由、无数据库
- **数据层**：静态数据在 `src/lib/*.ts`，构建时内联
- **错误处理**：`console.error`（无 Sentry/pino）
- **部署**：`bash ops/deploy/deploy.sh out/`

## 主题页模式

每个产品专题共用结构：
1. `src/lib/<topic>-products.ts` 静态数据
2. `src/components/<topic>/` 组件
3. `src/app/product/<topic>/page.tsx` RSC
4. CI verify 脚本（如 `scripts/verify-zeekr-images.mjs`）

主题配色：xiaomi=orange, wenjie=cyan, zeekr=orange, flooring=amber

## 代码风格

TypeScript strict · PascalCase 组件 · camelCase 工具 · Tailwind utility only · 2-space
