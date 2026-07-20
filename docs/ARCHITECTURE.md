# LANHUI Static Website — Architecture

Pure static brand site. Next.js `output: "export"` + Nginx hosting. No database, no API routes, no runtime server.

Last updated: 2026-07-19 · Next.js 16 · React 19 · Node 24

## 1. Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Next.js 16 (App Router) | `output: "export"` |
| UI | React 19 + TypeScript strict | |
| Styling | Tailwind CSS v4 | oklch tokens |
| Components | shadcn/ui (Base UI primitives) | |
| Testing | vitest + Playwright | happy-dom |
| Deploy | Nginx static hosting | `ops/nginx/lanhui.conf` |

## 2. Route Map

All pages are prerendered at build time (SSG). Dynamic routes use `generateStaticParams` to enumerate all paths.

```
src/app/
├── layout.tsx          # Root layout (AnalyticsProvider + WeChatModal)
├── page.tsx            # Homepage
├── robots.ts           # robots.txt
├── brand/              # Brand story, certifications, history
├── product/            # Product center + topic pages
│   ├── page.tsx        # Product index (topic banners)
│   └── [topic]/        # Per-topic pages (wenjie, xiaomi, zeekr, flooring, etc.)
├── news/               # News listing + detail
├── agent/              # Store directory
│   └── [slug]/         # Store detail pages
├── contact/            # Contact page
└── not-found.tsx       # Custom 404
```

## 3. Data Layer

All data is static, defined in `src/lib/*.ts` files and inlined at build time:

| File | Content |
|------|---------|
| `brand.ts` | Brand info (name, slogan, contact) |
| `products.ts` | Product categories and details |
| `store.ts` | Store data (locations, levels) |
| `news.ts` | News articles |
| `china-regions.ts` | Province/city data |
| `<topic>-products.ts` | Per-topic product specs with literal types |

## 4. Topic-Page Pattern

Each product topic follows the same structure:

```
src/lib/<topic>-products.ts    # Static data + literal types for image specs
src/components/<topic>/         # AnchorNav, ProductCard, ProductGrid, ProductTable, TopicBanner
src/app/product/<topic>/page.tsx # RSC page
```

Theme colors: xiaomi=orange, wenjie=cyan, zeekr=orange, flooring=amber.
Image containers: `aspect-[4/3] + object-contain + Next/Image sizes`.

## 5. Component Architecture

```
src/components/
├── Header.tsx           # Sticky header with navigation
├── Footer.tsx           # Site footer
├── Hero.tsx             # Homepage hero
├── AnalyticsProvider.tsx # Client-side pageview tracking
├── shared/              # Shared UI components (WeChatModal, etc.)
├── agent/               # Store directory components
├── brand/               # Brand page components
├── product/             # Product page components
└── <topic>/             # Topic-specific components
```

## 6. Error Handling

- `console.error` via `captureClientException` in `src/lib/observability.client.ts`
- Custom error boundary: `global-error.tsx` → `ErrorFallback.tsx`
- No Sentry, no pino, no external observability services

## 7. Build & Deploy

```
npm run build   →  out/ (static files)
                 →  bash ops/deploy/deploy.sh out/
```

### Nginx key points (see `ops/nginx/lanhui.conf`):
- HTTP → HTTPS redirect
- `try_files $uri $uri/ $uri/index.html =404` for trailingSlash compatibility
- Static assets cached 1y (`/_next/static/`), images 30d, HTML no-cache
- Security headers: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`

### Deploy flow:
1. Build artifact → `/var/www/lanhui/releases/<timestamp>/`
2. Verify key files (index.html, 404.html, robots.txt)
3. Atomic symlink switch: `current → releases/<timestamp>`
4. `nginx -t && nginx -s reload`
5. Smoke test (curl homepage, product page, 404)

### Rollback:
- `ops/deploy/rollback.sh` — lists releases, switches symlink to previous, reloads nginx

## 8. Quality Gates

| Command | What |
|---------|------|
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | vitest (happy-dom) |
| `npm run build` | Static export → `out/` |
| `npm run check` | lint → typecheck → test → verify → build |

## 9. CI/CD

GitHub Actions (`.github/workflows/ci.yml`):
- `npm ci && npm run check` on push/PR to `main`
- Upload `out/` as artifact for deployment
