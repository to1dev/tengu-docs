import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg?: React.ComponentType<React.ComponentProps<"svg">>;
    image?: string;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: "多链资产一站管理",
        image: require("@site/static/img/cryptocurrency.png").default,
        description: (
            <>
                支持比特币、以太坊、Solana、Sui等主流公链，统一创建与导入钱包，轻松查看余额与交易，全面掌控多链资产。
            </>
        ),
    },
    {
        title: "安全与隐私保护",
        image: require("@site/static/img/hacker.png").default,
        description: (
            <>
                私钥本地保存，助记词遵循 BIP32 / BIP39 标准，敏感数据通过 AES
                加密处理，确保资产不上传、不泄露、不中断。
            </>
        ),
    },
    {
        title: "实时链上监控系统",
        image: require("@site/static/img/asset.png").default,
        description: (
            <>
                基于 gRPC 和 WebSocket
                实现高速监听，实时追踪地址变动、交易记录与合约交互，快速获取链上动态提醒。
            </>
        ),
    },
    {
        title: "高性能跨平台体验",
        image: require("@site/static/img/streamer.png").default,
        description: (
            <>
                采用 C++20 与 Qt 框架打造，界面流畅、响应迅速，适配 Windows 与
                Linux，专为重度用户设计的桌面体验。
            </>
        ),
    },
    {
        title: "自定义脚本与插件支持",
        image: require("@site/static/img/one-of-a-kind.png").default,
        description: (
            <>
                内置 JavaScript 与 Lua
                引擎，支持用户自定义功能与自动化脚本，兼容插件生态，轻松扩展未来功能。
            </>
        ),
    },
    {
        title: "开源透明、社区共建",
        image: require("@site/static/img/virtual-event.png").default,
        description: (
            <>
                所有代码遵循 AGPLv3
                协议，源代码公开透明，支持社区协作开发，致力打造真正由用户驱动的开源项目。
            </>
        ),
    },
    {
        title: "NFT 授权与激励体系",
        Svg: require("@site/static/img/tokens.svg").default,
        description: (
            <>
                购买 NFT 即可获得商业授权与功能优先访问资格，持有者还可获得
                TENGU 代币奖励与生态治理参与机会。
            </>
        ),
    },
    {
        title: "持续更新与智能未来",
        image: require("@site/static/img/industrial.png").default,
        description: (
            <>
                规划集成 AI 智能交易分析、跨链桥接与 DeFi
                聚合交易，持续迭代升级，迈向下一代本地化加密资产平台。
            </>
        ),
    },
];

function Feature({ title, Svg, image, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                {Svg ? (
                    <Svg className={styles.featureSvg} role="img" />
                ) : image ? (
                    <img
                        src={image}
                        className={styles.featureImg}
                        alt={title}
                        width={200}
                        height={200}
                    />
                ) : null}
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
