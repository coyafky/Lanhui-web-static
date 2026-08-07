# 🚀 Lanhui 官网上线冲刺 — TodoList (2026-08-08)

> 备案已过 ✅ · 4 天后上线 → 2 天内完成排查与优化

---

## 任务 1 ✅ 项目背景 + Alma 记忆
- [x] 摸清项目结构（Next.js 16.2.1 静态导出、src/app 路由、src/lib 数据层）
- [x] 写入 ~/.config/alma/memory/2026-08-08.md + 更新 MEMORY.md

## 任务 2 ✅ 远程服务器连接（lanhuiweb）
- [x] 确认正式生产服务器：**43.140.225.115**（lanhui-web，宝塔面板，OpenCloudOS）
  - SSH 别名 `lanhuiweb` 已配置（~/.ssh/config，密钥 ~/Downloads/lanhuiweb.pem）
  - ⚠️ 之前误连的 hermes (81.71.132.184) 是飞书机器人服务器，非官网部署点
- [x] 服务器现状探测：
  - nginx 已装，站点 `lanhuiqinggai.com.conf` 已建 → root /www/wwwroot/lanhuiqinggai.com
  - ⚠️ **nginx 监听 3001 端口，80 端口未绑定域名**（访问域名会失败！）
  - ⚠️ **无 SSL 证书**（/www/server/panel/vhost/cert/ 为空）
  - ⚠️ **DNS 未解析**：lanhuiqinggai.com NXDOMAIN，未指向 43.140.225.115
  - 站点目录已有 7-22 旧版构建产物（index.html + _next/ + images/）
  - 宝塔面板 8888 端口在跑（BT-Panel）
- [x] DNS 检查：www.lanhuiqinggai.com → NXDOMAIN（**需用户去域名服务商配置 A 记录**）
- [x] ✅ 部署链路确认（用户确认）：**Gitee 工作流** — 本地 build+push → Gitee(源码) → 服务器 /root/lanhui-web pull+build → 拷贝 out/ → /www/wwwroot/lanhuiqinggai.com
  - 本地 main @ 4397194 领先 gitee/master 1 commit（未推送）
  - 服务器 /root/lanhui-web @ 83283da，node_modules 就绪(820M)
  - out/ 被 gitignore → Gitee 只存源码，服务器自行构建
  - ⚠️ 服务器无自动部署任务（只有 ACME 证书续期 cron）

## 任务 3 ⏳ 上线前审查（agent 进行中）
- [ ] lint 2 errors 修复（ProductGalleryCarousel.tsx:26 / ui/carousel.tsx:98 的 setState-in-effect）
- [ ] typecheck 已通过 ✅
- [ ] 各页面 title/meta description 完整性
- [ ] JSON-LD / sitemap（LAST_MOD 过期）/ robots.txt / canonical / OG 标签
- [x] 页脚 ICP 备案号展示（粤ICP备2026102356号-2 + 工信部链接已挂）
- [ ] 公安备案号（用户暂未提供，Footer 已预留位置）
- [ ] 联系方式 / 门店数据完整性
- [ ] 隐私政策 / 用户协议页面

## 任务 4 ⏳ 模拟上线后问题 + 解决方案
- [ ] DNS 解析配置指引（用户操作 A 记录 → 43.140.225.115）
- [ ] nginx 改 80 端口绑定 + 443 HTTPS
- [ ] SSL 证书签发（宝塔 Let's Encrypt 或申请）
- [ ] HTTP → HTTPS 301 跳转
- [ ] 部署脚本适配宝塔路径（ops/deploy 目前写 /var/www/lanhui，实际是 /www/wwwroot/lanhuiqinggai.com）
- [ ] 静态资源缓存 / gzip / brotli 验证
- [ ] 404 页 / 错误页验证
- [ ] 应急预案（回滚脚本适配宝塔）

## 任务 4.5 ⏳ COS 资源包应用（100GB 标准存储，昨日抵扣 0%）
- [ ] 评估 COS 托管静态资源（图片/CDN）
- [ ] 部署备份入 COS（每次发布留档 out/）

## 任务 5 ⏳ 核心图片处理
- [ ] public/images 744 文件 87MB 体积审计
- [ ] 大图压缩（stores/image.png 2.2MB 最突出，stores/image.webp 重复）
- [ ] next/image unoptimized 静态导出模式可用性确认
- [ ] 图片体积总预算控制 / 懒加载策略配合

## 任务 6 ⏳ 懒加载优化 + 博客展示页
- [ ] 审查现有 priority/lazy 使用（首页 hero priority=true 已配置）
- [ ] 首页/产品页图片懒加载优化
- [ ] 新建 /blog 路由（Markdown 驱动，docs 已规划 frontmatter 规范）
- [ ] 博客列表页 + 文章详情页 + sitemap 集成

---

## 🔴 上线前必须解决的关键问题（TOP 发现）
1. **DNS 未解析** — 域名还不通，需用户到域名服务商加 A 记录
2. **nginx 监听 3001 非 80** — 域名绑不上 80 端口
3. **无 SSL** — HTTPS 未配置，备案验收需要
4. **部署脚本路径不适配宝塔** — /var/www/lanhui vs /www/wwwroot/lanhuiqinggai.com
5. **lint 2 errors** — 上线前必须清零
6. **页脚缺 ICP 备案号** — 中国法规硬性要求
7. **sitemap LAST_MOD 过期**（2026-06-01）
8. **站点目录是 7-22 旧版** — 需重新部署最新代码

## 🔑 待用户操作
- [ ] 域名服务商：添加 A 记录 `lanhuiqinggai.com` 和 `www.lanhuiqinggai.com` → 43.140.225.115
- [x] ICP 备案号已确认并挂载：粤ICP备2026102356号-2
- [ ] 公安备案号待提供（若有）
