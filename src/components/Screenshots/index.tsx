import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.css";

type ScreenshotItem = {
    title: string;
    image?: string;
    width?: number;
    height?: number;
    description?: ReactNode;
    cropX?: number;
    cropY?: number;
    scale?: number;
};

const ScreenshotList: ScreenshotItem[] = [
    {
        title: "主界面",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                支持比特币、以太坊、Solana、Sui等主流公链，统一创建与导入钱包，轻松查看余额与交易，全面掌控多链资产。
            </>
        ),
        width: 3440,
        height: 1440,
        cropX: 150,
        cropY: 150,
    },
    {
        title: "隐私保护",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                私钥本地保存，助记词遵循 BIP32 / BIP39 标准，敏感数据通过 AES
                加密处理，确保资产不上传、不泄露、不中断。
            </>
        ),
        width: 3440,
        height: 1440,
        cropX: 150,
        cropY: 150,
    },
    {
        title: "多链钱包",
        image: require("@site/static/img/screenshots/s3.png").default,
        description: (
            <>
                基于本地的 gRPC 和 WebSocket
                高速监听，实时追踪地址变动、交易记录与合约交互，快速获取链上动态提醒。
            </>
        ),
        width: 1770,
        height: 1094,
        cropX: 150,
        cropY: 150,
    },
    {
        title: "原生性能",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                采用 C++20 与 Qt 框架打造，界面流畅、响应迅速，适配 Windows 与
                Linux，专为重度用户设计的桌面体验。
            </>
        ),
        cropX: 150,
        cropY: 150,
    },
    {
        title: "脚本支持",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                内置 JavaScript 与 Lua 引擎，支持用户自定义功能与自动化脚本，兼容插件生态，灵活扩展未来更多强大功能与可能。
            </>
        ),
        cropX: 150,
        cropY: 150,
    },
    {
        title: "免费开源",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                所有代码遵循 AGPLv3
                协议，源代码公开透明，支持社区协作开发，致力打造真正由用户驱动的开源项目。
            </>
        ),
        cropX: 150,
        cropY: 150,
    },
    {
        title: "智能整合",
        image: require("@site/static/img/screenshots/s1.png").default,
        description: (
            <>
                购买 NFT 即可获得商业授权与功能优先访问资格，持有者还可获得
                TENGU 代币奖励与生态治理参与机会。
            </>
        ),
        cropX: 150,
        cropY: 150,
    },
];

function Screenshot({
    title,
    image,
    description,
    width,
    height,
    cropX = 0,
    cropY = 0,
    scale = 2.3,
}: ScreenshotItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                {image && (
                    <svg
                        width="300"
                        height="300"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <mask id="myMask">
                                <path
                                    fill="white"
                                    d="M60.3,-18.9C65.8,-2.6,49.5,21.6,27.9,36.9C6.3,52.3,-20.6,58.9,-37,47.7C-53.4,36.6,-59.1,7.8,-51.2,-11.9C-43.3,-31.5,-21.6,-41.9,2.9,-42.8C27.4,-43.7,54.8,-35.2,60.3,-18.9Z"
                                    transform={`translate(${cropX} ${cropY}) scale(${scale})`}
                                />
                            </mask>
                        </defs>

                        <image
                            href={image}
                            width={width}
                            height={height}
                            mask="url(#myMask)"
                        />

                        <path
                            fill="none"
                            d="M60.3,-18.9C65.8,-2.6,49.5,21.6,27.9,36.9C6.3,52.3,-20.6,58.9,-37,47.7C-53.4,36.6,-59.1,7.8,-51.2,-11.9C-43.3,-31.5,-21.6,-41.9,2.9,-42.8C27.4,-43.7,54.8,-35.2,60.3,-18.9Z"
                            transform={`translate(${cropX} ${cropY}) scale(${scale})`}
                            stroke="white"
                            strokeWidth="5"
                        />
                    </svg>
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
                    fill="#F8F8F2"
                    d="M0,256L60,240C120,224,240,192,360,165.3C480,139,600,117,720,122.7C840,128,960,160,1080,160C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}
