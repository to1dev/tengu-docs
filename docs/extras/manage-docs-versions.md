---
sidebar_position: 1
title: 源码构建与版本
description: 区分桌面程序和文档站的构建环境，记录可复现的源码版本。
---

# 源码构建与版本

Tengu 桌面程序与本站是两个项目。桌面程序使用 C++ / Qt；文档站使用 Docusaurus / React。运行文档站不会编译桌面程序。

## 桌面程序

从[项目仓库](https://github.com/to1dev/tengu)获取源码，先阅读目标提交中的 `README`、`CMakeLists.txt` 和依赖配置。编译器、Qt 版本、子模块及构建选项以该提交为准。

开发分支可能领先于已发布的二进制文件。构建成功不表示所有模块都已完成或可用于生产。

反馈编译问题时记录 Git 提交、分支、子模块状态、系统、架构、编译器、Qt 版本、CMake 参数和首个错误信息，并说明是否在干净构建目录中复现。

## 文档站

使用 Node.js 22 及以上（推荐 24 LTS）和 Bun 1.4.2：

```sh
bun install --frozen-lockfile
bun run start
bun run check
```

`check` 执行类型检查和全部 locale 的生产构建。`build/` 是生成目录，不应直接修改或提交；页面在 `docs/`、`blog/` 和 `src/pages/` 中维护。

完整文楷屏幕阅读版已随文档仓库提供，正常构建不需要字体 CDN。字体转换与缓存配置见项目 `README`。

## 保持版本可追溯

更新下载页时，一并核对版本号、发布时间、平台、文件名和校验附件。新功能说明应指出适用版本；计划中的能力放入[白皮书](/whitepaper)，不与发行功能混写。
