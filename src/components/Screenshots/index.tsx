import type {ReactNode} from "react";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../Landing/styles.module.css";

export default function Screenshots(): ReactNode {
    const main = useBaseUrl("/img/screenshots/s1.png");
    const wallets = useBaseUrl("/img/screenshots/s3.png");
    return <section className={`${styles.section} ${styles.previewSection}`} aria-labelledby="preview-title">
        <div className="container">
            <div className={styles.sectionHeading}><div><span className={styles.eyebrow}>A look inside</span><Heading as="h2" id="preview-title" className={styles.title}>桌面上的另一种可能。</Heading><p className={styles.lede}>从入口到工作区，把分散的操作逐步收拢。</p></div><span className={styles.number}>TENGU / EARLY PREVIEW</span></div>
            <div className={styles.screenGrid}>
                {[{image:main,title:"一处入口，组织你的工作",description:"早期桌面界面预览：钱包、监控、资讯与交易等模块入口。各模块的完成状态以安装版本为准。"}, {image:wallets,title:"以账户为中心的工作区",description:"钱包列表的早期界面预览。多链与账户管理沿着统一工作区的方向演进。"}].map(item => <figure key={item.title} className={styles.screenCard}><div className={styles.screenImageWrap}><img className={styles.screenImage} src={item.image} alt={item.title} width="512" height="512" loading="lazy" decoding="async"/></div><figcaption className={styles.screenCaption}><Heading as="h3">{item.title}</Heading><p>{item.description}</p></figcaption></figure>)}
            </div><p className={styles.note}>截图来自项目早期版本，展示界面方向，不代表所有入口均已交付。</p>
        </div>
    </section>;
}
