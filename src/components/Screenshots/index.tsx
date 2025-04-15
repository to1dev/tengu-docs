import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.css";

type ScreenshotItem = {
    title: string;
    image?: string;
    description: ReactNode;
    cropX?: number;
    cropY?: number;
};

const ScreenshotList: ScreenshotItem[] = [
    {
        title: "多链资产一站管理",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                支持比特币、以太坊、Solana、Sui等主流公链，统一创建与导入钱包，轻松查看余额与交易，全面掌控多链资产。
            </>
        ),
    },
    {
        title: "安全与隐私保护",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                私钥本地保存，助记词遵循 BIP32 / BIP39 标准，敏感数据通过 AES
                加密处理，确保资产不上传、不泄露、不中断。
            </>
        ),
    },
    {
        title: "实时链上监控系统",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                基于本地的 gRPC 和 WebSocket
                高速监听，实时追踪地址变动、交易记录与合约交互，快速获取链上动态提醒。
            </>
        ),
    },
    {
        title: "高性能跨平台体验",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                采用 C++20 与 Qt 框架打造，界面流畅、响应迅速，适配 Windows 与
                Linux，专为重度用户设计的桌面体验。
            </>
        ),
    },
    {
        title: "自定义脚本与插件支持",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                内置 JavaScript 与 Lua
                引擎，支持用户自定义功能与自动化脚本，兼容插件生态，轻松扩展未来功能。
            </>
        ),
    },
    {
        title: "开源透明、社区共建",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                所有代码遵循 AGPLv3
                协议，源代码公开透明，支持社区协作开发，致力打造真正由用户驱动的开源项目。
            </>
        ),
    },
    {
        title: "持续更新与智能未来",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                集成 AI 智能交易分析、跨链桥接与 DeFi
                聚合交易，持续迭代升级，迈向下一代本地化加密资产平台。
            </>
        ),
    },
];

function Screenshot({
    title,
    image,
    description,
    cropX = 0,
    cropY = 0,
}: ScreenshotItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                {image && (
                    <div
                        className={styles.featureImgContainer}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundPosition: `-${cropX}px -${cropY}px`,
                        }}
                    />
                )}
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Screenshots(): ReactNode {
    return (
        <section className={clsx("hero", styles.screenshots)}>
            <div className="container">
                <div className="row">
                    {ScreenshotList.map((props, idx) => (
                        <Screenshot key={idx} {...props} />
                    ))}
                </div>
            </div>
            <svg
                className={styles.wave}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#303846"
                    d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,218.7C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}
