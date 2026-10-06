# 完整文楷屏幕阅读版

来源：[LXGW WenKai Screen v1.522](https://github.com/lxgw/LxgwWenKai-Screen/releases/tag/v1.522)。与相邻 `zhipan` 项目使用的完整 WOFF 对应同一版本，采用 SIL OFL 1.1；完整许可证见 [OFL.txt](./OFL.txt)。

仅进行完整字体格式转换，未裁剪字符。文件：`LXGWWenKaiScreen-912f4d63710c.woff2`，10,109,296 字节，47,871 个字形、47,449 个字符映射。

文件名中的内容哈希前缀为 `912f4d63710c`，完整校验值和上游 TTF 校验值见 `src/fonts.json`。

运行 `bun run fonts:prepare` 可重新转换并逐一验证字符映射、字形轮廓、字宽和度量。字体更新后必须同步提交字体和 manifest；旧文件需在 CDN 缓存或旧 HTML 不再引用后再清理。
