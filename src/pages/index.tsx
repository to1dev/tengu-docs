import type {ReactNode} from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Screenshots from "@site/src/components/Screenshots";
import FAQs from "@site/src/components/FAQs";
import CTA3 from "@site/src/components/CTA3";
import styles from "./index.module.css";

export default function Home(): ReactNode {
    const screenshot = useBaseUrl("/img/screenshots/s1.png");
    return <Layout title="本地优先的加密桌面工作区" description="Tengu 以本地计算、原生桌面与开源共建为核心。了解 Alpha 版本、设计规划与授权方式。" wrapperClassName={styles.home}>
        <main>
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={`container ${styles.heroGrid}`}>
                <div className={styles.heroCopy}>
                    <Link className={styles.release} to="/docs/quickstart"><span className={styles.releaseDot}/> 0.0.1 Alpha <span className={styles.releaseDivider}/> 探索早期版本 <span aria-hidden="true">↗</span></Link>
                    <span className={styles.eyebrow}>YOUR DEVICE. YOUR WORKSPACE.</span>
                    <Heading as="h1" id="hero-title" className={styles.heroTitle}>把掌控权，<br/>留在你的<span>桌面。</span></Heading>
                    <p className={styles.heroDescription}>让钱包、链上数据与扩展工具，<br className={styles.desktopBreak}/>在自己的设备上拥有一个清晰的工作环境。</p>
                    <div className={styles.heroActions}><Link className="button button--primary button--lg" to="/docs/intro">认识 Tengu <span aria-hidden="true">↗</span></Link><Link className={styles.textLink} to="/docs/quickstart">下载与安装 <span aria-hidden="true">↓</span></Link></div>
                    <div className={styles.heroMeta}><span>C++ / Qt</span><span>LOCAL FIRST</span><span>OPEN SOURCE</span></div>
                </div>
                <div className={styles.visual}>
                    <div className={styles.visualGrid}/>
                    <div className={styles.preview}>
                        <div className={styles.previewBar}><span className={styles.windowDots}><i/><i/><i/></span><span>Tengu · Desktop</span><span className={styles.previewBadge}>ALPHA</span></div>
                        <div className={styles.previewImage}><img src={screenshot} alt="Tengu Alpha 早期桌面界面截图" width="512" height="512" fetchPriority="high" decoding="async"/></div>
                        <div className={styles.previewFooter}><span className={styles.statusDot}/><span>本地工作区 / 早期界面预览</span><span aria-hidden="true">↗</span></div>
                    </div>
                    <div className={styles.floatingNote}><span className={styles.noteIcon} aria-hidden="true">⌘</span><div><strong>从自己的设备出发</strong><span>Built for your desktop</span></div></div>
                    <span className={styles.visualLabel}>01 — A LOCAL PERSPECTIVE</span>
                </div>
            </div>
            <div className={`container ${styles.principles}`}>{[["01","本地优先","把数据和工作环境放在手边"],["02","原生桌面","为连续、专注的操作而设计"],["03","开源共建","让理解、研究与改进有据可循"]].map(([number,title,description]) => <div className={styles.principle} key={number}><span>{number}</span><div><strong>{title}</strong><p>{description}</p></div></div>)}</div>
        </section>
        <HomepageFeatures/><Screenshots/><FAQs/><CTA3/>
        </main>
    </Layout>;
}
