# 蓝辉轻改 LANHUI — Static Website

汽车轻改装 + 车身膜服务品牌官网 · 广州/佛山 · 顺德大良店

纯静态站点，Next.js 构建时导出（`output: "export"`），Nginx 直接托管，无数据库运行时依赖。

---

## 技术栈

| 层 | 技术 |
|---|---|
| 框架 | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 + shadcn/ui |
| 语言 | TypeScript (strict) |
| 构建 | `next build` → `out/` (静态导出) |
| 托管 | Nginx (任何 Linux 主机) |
| CI/CD | GitHub Actions → artifact → 手动/自动部署 |
| 测试 | Vitest + Playwright |

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器 (→ http://localhost:3000)
npm run dev

# 代码检查
npm run lint
npm run typecheck
npm test
```

## 构建

```bash
# 生产构建 (→ out/)
npm run build

# 本地预览构建产物
npx serve out
```

## 质量门禁

```bash
# 完整 CI 流程
npm run lint && npm run typecheck && npm test && \
  npm run verify:static-images && npm run check:static-boundary && \
  npm run build && npm run check:static-output
```

## 项目结构

```
├── src/
│   ├── app/            # 页面路由 (App Router)
│   │   ├── product/    # 产品专题页 (~30 个车型)
│   │   ├── agent/      # 门店查询
│   │   ├── brand/      # 品牌页
│   │   └── contact/    # 联系页
│   ├── components/     # React 组件
│   └── lib/            # 静态数据、工具函数
├── public/images/      # 产品图、门店图 (~83MB)
├── scripts/            # 构建验证、图片检查脚本
├── ops/
│   ├── nginx/          # Nginx 配置
│   └── deploy/         # 部署 / 回滚脚本
├── docs/               # PRD、SPEC、测试报告
└── .github/workflows/  # CI
```

## 部署

```bash
# 构建
npm run build

# 部署到服务器
bash ops/deploy/deploy.sh out/

# 回滚
bash ops/deploy/rollback.sh
```

服务器详细配置见 [`ops/nginx/lanhui.conf`](ops/nginx/lanhui.conf) 和 [`docs/deployment/`](docs/deployment/)。

## 许可证

MIT
