<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 蓝辉轻改 LANHUI — Static Website

Pure static brand site. Next.js 16 (App Router) · React 19 · TS strict · Tailwind v4 · `output: "export"` · No database · No API routes. Node **24** (`.nvmrc`).

## Commands

| Command | What |
|---------|------|
| `npm run dev` | dev server → :3000 |
| `npm run build` | static export → `out/` |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | vitest (happy-dom) |
| `npm run check` | lint → typecheck → test → verify → build |

## Architecture

- **Static-only**: All pages prerendered at build time (SSG). No runtime server, no API routes, no database.
- **Data**: Static data in `src/lib/*.ts`, inlined at build time.
- **Error handling**: `console.error` only (no Sentry, no pino).
- **Deploy**: `npm run build` → `bash ops/deploy/deploy.sh out/`

## Topic-page pattern

Each product topic shares this structure:
1. `src/lib/<topic>-products.ts` — static data + literal types for image specs
2. `src/components/<topic>/` — components (AnchorNav, ProductCard, ProductGrid, ProductTable, TopicBanner)
3. `src/app/product/<topic>/page.tsx` — RSC with Hero + anchor nav + model sections + service flow + CTA + JSON-LD
4. Entry in `src/app/product/page.tsx`
5. CI verify script chained into `npm run check`

Theme colors: xiaomi=orange, wenjie=cyan, zeekr=orange, flooring=amber.
Image containers: `aspect-[4/3] + object-contain + Next/Image sizes`.

## Code style

TS strict, `any` forbidden · named exports · PascalCase components · camelCase utils · Tailwind utilities only · 2-space · mobile-first
