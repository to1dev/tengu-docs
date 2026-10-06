# Tengu 文档站

Tengu 的产品介绍、使用指南、设计白皮书与授权文档。基于 Docusaurus 3.10.2、React 19 和 TypeScript，默认语言为简体中文。

## 开发

需要 Node.js 22 及以上（推荐 Node.js 24 LTS）和 Bun 1.4.2。

```sh
bun install --frozen-lockfile
bun run start
```

提交前运行 `bun run check`，执行 TypeScript 检查及中文、英文两个 locale 的生产构建。单独检查可用 `bun run typecheck`、`bun run build`。用 `bun run serve` 检查构建结果。

目前 `/en/` 使用内容回退，并非完整英文译站；已有双语法律页保留中英文内容。不要把 locale 构建成功视为翻译已完成。

## 内容维护

- `docs/`：入门、下载安装、使用与安全、开发与贡献。
- `src/pages/`：白皮书、授权与法律页面、项目联系页。
- `src/components/`：首页产品介绍、截图和常见问题。
- `blog/`：作者文章。保留原始日期和叙述视角。

本次内容以 0.0.1-alpha 为准。区分已发布版本、源码中的开发状态和设计规划。确认新发布后再更新版本、日期、校验文件和链接。商业协议的价格、发行数量、授权范围和服务承诺需与实际协议同步。

旧 GitHub 发布入口目前无法从公开访问核验附件，下载页保留原始文件链接并提供联系方式。上线前应确认仓库公开状态和附件权限，或补充实际可用的官方下载地址。

原模板文档已改为 Tengu 指南，保留既有文档路径。中文商业协议现使用 `/license/commercial-zh`；旧 `/license/commercial.zh` 路径保留跳转，避免带点目录被静态服务器误判。

## 完整本地字体

全站使用 **LXGW WenKai Screen v1.522（霞鹜文楷屏幕阅读版）完整 WOFF2**，与 `zhipan` 的完整 WOFF 对应同一上游版本。未做字符子集化，保留全部字形；字体许可见 `static/fonts/OFL.txt`。

- 字体文件随项目保存，常规安装、开发和构建无需下载字体。
- `src/fonts.json` 记录来源、SHA-256、字形数和体积。
- HTML 中的字体声明与 preload 指向同一哈希文件，避免重复下载。
- 使用 `font-display: swap`，首次下载时先显示备用字体。
- 代码优先使用系统等宽字体，中文回退到同一个文楷文件。
- 移除了 Google Fonts、Adobe Fonts 及其他远程字体依赖。

需要重新转换或核验时运行 `bun run fonts:prepare`。脚本首次下载固定版本 TTF 并校验 SHA-256，之后使用 `.cache/fonts/`；转换后逐一验证完整字符映射、47,871 个字形轮廓、字宽和字体度量。生成文件需一起提交。

## 部署与缓存

将 `build/` 部署到静态托管服务。`static/_headers` 会复制到输出目录，为支持该格式的平台配置 `/fonts/*` 和 `/assets/*` 的一年 immutable 缓存。Nginx、CDN 等其他平台应配置等效响应头；Docusaurus 本地预览服务器不读取此文件。

完整字体约 10.1 MB，首次访问仍有传输成本。验证线上刷新性能时，应确认字体响应带有 `Cache-Control: public, max-age=31536000, immutable`，且浏览器正常刷新使用内存或磁盘缓存。HTML 使用短缓存，不要对 HTML 设置一年 immutable。

## 依赖维护

`package.json` 的 `overrides` 固定了构建链中四个已修复安全问题的间接依赖：`tinypool`、`serialize-javascript`、`postcss-selector-parser` 和 `uuid`。这些版本已通过干净的双 locale 构建与开发服务检查；更新 Docusaurus 时应重新检查上游版本要求，能由上游正常解析后再移除覆盖。

2026-10-06 的 `bun audit` 仍报告一项上游尚无修复版本的问题：[`braces@3.0.3` 的深层嵌套模式可耗尽调用栈](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)。它属于构建和文件监听工具链，不在静态网站的浏览器运行代码中。当前未强制替换其解析实现；构建配置应只使用受信任的 glob 模式，待上游发布修复后更新并重跑检查。
