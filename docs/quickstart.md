---
sidebar_position: 1
title: 下载与安装
description: 查看 Tengu Alpha 发布记录、Windows 安装步骤与文件校验方法。
---

# 下载与安装

## Alpha 版本

| 项目 | 发布记录 |
| --- | --- |
| 版本 | `0.0.1-alpha (Reforge)` |
| 发布日期 | 2025-04-30 |
| 二进制平台 | Windows 10 / 11，x64 |
| 开发技术 | C++20 / Qt |
| 完整性验证 | SHA-256 校验清单与 GPG 签名 |

本站仍以这个 Alpha 版本为准。下载前请核对[项目发布页](https://github.com/to1dev/tengu/releases)的访问状态和发布说明；如果项目页或附件无法访问，请通过文末联系方式确认。

## 下载文件

| 文件 | 用途 | 链接 |
| --- | --- | --- |
| `Tengu-0.0.1-alpha.reforge-windows-x64.zip` | Windows x64 程序压缩包 | [下载程序](https://github.com/to1dev/tengu/releases/download/v0.0.1-alpha.reforge/Tengu-0.0.1-alpha.reforge-windows-x64.zip) |
| `Tengu-0.0.1-alpha.reforge-shasums.txt` | SHA-256 校验清单 | [下载清单](https://github.com/to1dev/tengu/releases/download/v0.0.1-alpha.reforge/Tengu-0.0.1-alpha.reforge-shasums.txt) |
| `Tengu-0.0.1-alpha.reforge-shasums.txt.asc` | 校验清单的 GPG 签名 | [下载签名](https://github.com/to1dev/tengu/releases/download/v0.0.1-alpha.reforge/Tengu-0.0.1-alpha.reforge-shasums.txt.asc) |

## 校验与启动

1. 把程序、校验清单和签名下载到同一目录。
2. 在 PowerShell 中计算程序包的 SHA-256，并与清单中的对应项比较：

```powershell
Get-FileHash .\Tengu-0.0.1-alpha.reforge-windows-x64.zip -Algorithm SHA256
```

3. 如果已安装 GPG，导入并核对发布者公钥，然后验证清单签名：

```powershell
gpg --verify .\Tengu-0.0.1-alpha.reforge-shasums.txt.asc .\Tengu-0.0.1-alpha.reforge-shasums.txt
```

公钥指纹：`E6D5 3772 FC0A 4D8C E022 65E6 8D3A 5249 59F3 994D`。[获取发布公钥](https://keys.openpgp.org/vks/v1/by-fingerprint/E6D53772FC0A4D8CE02265E68D3A524959F3994D)。签名有效之外，还应通过可信渠道核对指纹。

4. 校验通过后，把压缩包完整解压到可写目录，再运行 `Tengu.exe`。不要直接在压缩包内启动。
5. 首次使用先查看当前版本提供的模块，再按照[账户与钱包](./basics/create-a-page.md)准备测试账户。

## 其他平台与升级

本站尚未记录 Linux 或 macOS 的可验证二进制发行包。开发者可参考[源码构建与版本](./extras/manage-docs-versions.md)，并以对应提交的构建说明为准。

升级前退出程序，备份钱包资料和本地配置。存储格式、恢复方式与兼容范围应以发布说明为准，不要假设跨版本直接覆盖一定可用。

## 授权与支持

开源版本适用 [AGPLv3](/license/agplv3)。额外的商业许可仅覆盖协议约定的 Tengu 代码，第三方依赖仍遵循原许可。详见[授权说明](/license/dual_license)。

Alpha 版本适合评估和反馈；重要账户的迁移与真实交易应在验证备份、恢复和目标版本行为后进行。

- 邮箱：[tengu@to1.dev](mailto:tengu@to1.dev)
- Telegram：[TenguAI](https://t.me/TenguAI)
- Discord：[Tengu 社区](https://discord.gg/vFYFjdtFbn)
- 问题反馈：[项目 Issue](https://github.com/to1dev/tengu/issues)

反馈时附上版本、系统、复现步骤和脱敏日志，详见[故障排查](./basics/congratulations.md)。
