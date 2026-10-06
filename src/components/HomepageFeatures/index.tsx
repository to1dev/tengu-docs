import type {ReactNode} from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "../Landing/styles.module.css";

const features = [
    {title: "数据，留在自己的设备", description: "以本地管理为核心组织钱包与配置。你决定保存什么、备份什么，以及何时连接外部服务。", path: "M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4ZM9 12l2 2 4-4"},
    {title: "为桌面工作而设计", description: "以 C++ / Qt 构建原生工作环境。把常用操作放到手边，让复杂任务拥有清晰的入口。", path: "M3 4h18v13H3V4ZM8 21h8M12 17v4"},
    {title: "让代码与边界可见", description: "在 AGPLv3 下研究、修改和使用开源版本。功能是否可用，以实际版本和发布说明为准。", path: "m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16"},
    {title: "连接不同的链上世界", description: "多链钱包与数据接口是持续演进的方向。统一工作环境，同时保留各网络的差异和连接选择。", path: "M7 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm14 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM14 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM5 7v5h14V7m-7 5v5"},
    {title: "把重复工作变成流程", description: "规划通过脚本与插件组合查询、分析和操作。扩展接口逐步完善，先从可验证的小任务开始。", path: "m5 5 5 7-5 7m8 0h6M3 3h18v18H3V3Z"},
    {title: "给理解留出空间", description: "行情、资讯和 AI 辅助分析属于后续规划。目标是帮助理解信息与操作依据，让决策过程更透明。", path: "M4 19V5m0 14h16M8 15l4-5 4 2 5-7"},
];

export default function HomepageFeatures(): ReactNode {
    return <section className={styles.section} aria-labelledby="features-title">
        <div className="container">
            <div className={styles.sectionHeading}>
                <div><span className={styles.eyebrow}>Built around your device</span><Heading as="h2" id="features-title" className={styles.title}>从自己的设备出发。</Heading><p className={styles.lede}>本地优先、原生桌面、可扩展工作流。<br/>用清晰的设计，承接复杂的链上世界。</p></div>
                <Link className={styles.sectionLink} to="/whitepaper">了解设计方向 <span aria-hidden="true">↗</span></Link>
            </div>
            <div className={styles.grid}>{features.map((feature, index) => <article className={styles.card} key={feature.title}>
                <div className={styles.cardTop}><span className={styles.icon}><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={feature.path}/></svg></span><span className={styles.number}>{String(index + 1).padStart(2, "0")} / {index < 3 ? "PRINCIPLE" : "ROADMAP"}</span></div>
                <Heading as="h3" className={styles.cardTitle}>{feature.title}</Heading><p className={styles.cardDesc}>{feature.description}</p>
            </article>)}</div>
        </div>
    </section>;
}
