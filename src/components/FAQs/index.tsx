import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FAQItem = {
    Svg?: React.ComponentType<React.ComponentProps<"svg">>;
    question: string;
    answer: string;
};

const FAQList: FAQItem[] = [
    {
        Svg: require("@site/static/img/faqs/f1.svg").default,
        question: "Tengu 到底是什么？",
        answer: "Tengu 是一款 本地运行、C++/Qt 打造的多链加密资产桌面客户端。它把「钱包 + 交易终端 + 区块链监控 + AI 助手」结合在一起。",
    },
    {
        Svg: require("@site/static/img/faqs/f2.svg").default,
        question: "Tengu 支持哪些操作系统？",
        answer: "当前版本支持 Windows 10/11 系统，Linux 用户可自行从源码编译安装使用；macOS 版本已在规划中，将于后续版本中适配发布。",
    },
    {
        Svg: require("@site/static/img/faqs/f3.svg").default,
        question: "免费版与商业版有什么区别？",
        answer: "免费版遵循 AGPLv3 协议，源代码完全开放；商业版可闭源使用，需持有授权 NFT 或付费激活，享受更多功能与专属支持服务。",
    },
    {
        Svg: require("@site/static/img/faqs/f4.svg").default,
        question: "如何获得商业授权？",
        answer: "用户可在 Solana 链上持有 Tengu 授权 NFT（Tier1–4），无需解锁对应权限，无需激活码注册，即刻启用商业功能。",
    },
    {
        Svg: require("@site/static/img/faqs/f5.svg").default,
        question: "Tengu 会收集用户数据吗？",
        answer: "绝不会。Tengu 完全本地运行，不采集、不上传任何用户数据或使用行为，所有数据都存储在用户电脑内，最大限度保护隐私安全。",
    },
    {
        Svg: require("@site/static/img/faqs/f6.svg").default,
        question: "我的私钥会上传到云端吗？",
        answer: "不会。Tengu 所有私钥均本地保存，并使用 AES 加密技术存储在本机数据库中，完全不会联网或上传云端，保障用户数据私密性。",
    },
    {
        Svg: require("@site/static/img/faqs/f7.svg").default,
        question: "默认支持哪些区块链？",
        answer: "默认内置 BTC、ETH、SOL 三条主流公链钱包功能；借助插件机制可拓展支持更多链种，满足未来资产跨链统一管理需求。",
    },
    {
        Svg: require("@site/static/img/faqs/f8.svg").default,
        question: "支持哪些类型的钱包导入？",
        answer: "支持标准 BIP39 助记词、私钥、WIF 等格式导入；还可按链种分开管理账户，便于多链资产同步监控、统一查看与操作。",
    },
    {
        Svg: require("@site/static/img/faqs/f9.svg").default,
        question: "Tengu 使用了哪些底层网络技术？",
        answer: "Tengu 架构中将会融合 BitTorrent 与 WebRTC，可实现点对点数据分发与信令通讯，未来将逐步摆脱中心服务器依赖，实现真正的本地 + 去中心化架构。",
    },
    {
        Svg: require("@site/static/img/faqs/f10.svg").default,
        question: "Tengu 能运行 AI 模型吗？",
        answer: "未来支持调用 OpenAI 等云端模型，也支持本地部署 llama.cpp 等轻量模型，助力交易辅助分析与数据筛选，全程无需联网依赖。",
    },
    {
        Svg: require("@site/static/img/faqs/f11.svg").default,
        question: "有没有图表和行情分析功能？",
        answer: "Tengu 将会内置实时行情图表、K线视图、指标叠加等分析功能；结合链上数据同步，打造一站式本地数据分析终端。",
    },
    {
        Svg: require("@site/static/img/faqs/f12.svg").default,
        question: "能做自动化套利交易吗？",
        answer: "内置 Lua 与 JS 脚本引擎，未来可自定义交易策略，例如网格、DLMM、新币狙击等模式，结合并发加速，适合高频套利自动化操作。",
    },
    {
        Svg: require("@site/static/img/faqs/f13.svg").default,
        question: "Tengu 提供新闻和资讯功能吗？",
        answer: "将会内置财经快讯模块，可本地聚合主流资讯源，并支持用户自定义 RSS 接口或节点插件，打造属于自己的加密与金融情报中枢系统。",
    },
    {
        Svg: require("@site/static/img/faqs/f14.svg").default,
        question: "提供的财经数据权威吗？",
        answer: "内置支持调用 FRED、世行、IMF、央行等权威机构 API，同步利率、就业、通胀等宏观数据，用于策略分析与金融日历事件跟踪。",
    },
    {
        Svg: require("@site/static/img/faqs/f15.svg").default,
        question: "AI 能分析新闻并提出建议吗？",
        answer: "内置 AI 模型可自动解析新闻内容、识别情绪与关键词，结合行情数据推演后市走向，甚至可自动生成交易建议并配合脚本执行。",
    },
    {
        Svg: require("@site/static/img/faqs/f16.svg").default,
        question: "可以获取链上大额交易情报吗？",
        answer: "可自定义监听链上地址与合约，捕捉鲸鱼地址异动、大额转账、抢购行为等动态，配合图表与脚本进行快速反应与策略执行。",
    },
    {
        Svg: require("@site/static/img/faqs/f17.svg").default,
        question: "Tengu 能在没有服务器的情况下运作吗？",
        answer: "核心功能如钱包、AI 等完全离线可用；借助内置 P2P 模块，还可支持本地与节点间直接通信，实现插件、数据、模块的自主共享与更新。",
    },
    {
        Svg: require("@site/static/img/faqs/f18.svg").default,
        question: "Tengu 有计划变成去中心化网络节点吗？",
        answer: "是的。未来版本中，Tengu 将逐步演化为多功能网络节点，结合 DHT、WebRTC、P2P 网络构建一个无需服务器的分布式加密资产操作平台。",
    },
    {
        Svg: require("@site/static/img/faqs/f19.svg").default,
        question: "更新机制是怎样的？",
        answer: "软件支持在线更新检测，日常升级无需重装；重大版本发布需完整下载二进制包，用户配置和数据将完整保留，确保安全与兼容性。",
    },
    {
        Svg: require("@site/static/img/faqs/f20.svg").default,
        question: "出现问题如何求助？",
        answer: "开源用户可通过 GitHub 提交 Issue 反馈；商业用户持有授权 NFT 后可加入 Telegram 官方群组，享有专属一对一技术支持与答疑。",
    },
];

function FAQ({ Svg, question, answer }: FAQItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{question}</Heading>
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default function FAQs(): ReactNode {
    return (
        <section className={clsx("hero", styles.faqs)}>
            <div className="container">
                <div className="row">
                    {FAQList.map((props, idx) => (
                        <FAQ key={idx} {...props} />
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
