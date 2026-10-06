import type {ReactNode} from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "../Landing/styles.module.css";

const faqs = [
    ["Tengu 适合谁？","适合希望在自己的电脑上研究和组织钱包、链上数据与扩展工具的用户和开发者。当前仍为 Alpha 阶段，先用测试账户评估实际功能。"],
    ["现在可以下载哪个版本？","本站以 0.0.1-alpha（Reforge，2025-04-30）为准，提供 Windows x64 发布记录。下载前核对发布页、校验文件和平台要求。"],
    ["Linux 和 macOS 能用吗？","目前本站没有记录可验证的 Linux 或 macOS 二进制发行包。源码构建取决于目标提交的依赖和平台适配，不能将跨平台设计直接视为已发布支持。"],
    ["本地运行意味着完全离线吗？","本地界面、配置和密钥操作在设备上进行。查询链上状态、获取行情、广播交易与调用云端服务仍需要网络。"],
    ["哪些功能属于后续规划？","多链扩展、实时行情、自动化策略、AI 辅助、P2P 分发和插件市场是演进方向。请以安装版本的实际界面和发布说明判断可用能力。"],
    ["免费版可以用于商业场景吗？","AGPLv3 不禁止商业使用，但你需要遵守对应的许可义务。希望取得额外的闭源分发、集成或再授权权利时，可选择协议约定的商业许可。"],
    ["NFT 就等于已经激活授权吗？","被认可的有效 NFT 可以作为 Tier 2 授权凭证，但仍需按商业协议完成持有验证和授权密钥发放。具体流程以正式说明为准。"],
    ["购买授权会保证代币奖励吗？","不会。奖励、空投和高级模块依可用性与单独公告安排，没有固定时间、金额或收益保证。购买依据应是已明确的许可权利。"],
    ["如何保护钱包和本地数据？","分开保存恢复资料，备份钱包与配置，并在独立环境验证恢复结果。不要向插件、客服或问题反馈提供私钥、助记词和钱包密码。"],
    ["遇到问题怎样反馈？","提供程序版本、系统、复现步骤与脱敏错误信息。可通过项目 Issue、社区或 tengu@to1.dev 联系维护者；安全问题优先使用邮箱。"],
];

export default function FAQs(): ReactNode {
    return <section className={styles.section} aria-labelledby="faq-title"><div className="container"><div className={styles.faqLayout}>
        <div className={styles.faqIntro}><span className={styles.eyebrow}>A little more clarity</span><Heading as="h2" id="faq-title" className={styles.title}>先把问题讲清楚。</Heading><p className={styles.lede}>版本、网络与授权边界。<br/>开始之前，你值得知道更多。</p><Link className={styles.sectionLink} style={{display:"inline-block",marginTop:"1.5rem"}} to="/docs/intro">阅读入门指南 <span aria-hidden="true">↗</span></Link></div>
        <div className={styles.faqList}>{faqs.map(([question,answer]) => <details className={styles.faqDetails} key={question}><summary className={styles.faqSummary}>{question}</summary><p className={styles.faqAnswer}>{answer}</p></details>)}</div>
    </div></div></section>;
}
