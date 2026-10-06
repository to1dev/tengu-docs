import type {ReactNode} from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "../Landing/styles.module.css";

export default function CTA3(): ReactNode {
    return <section className={styles.ctaWrap} aria-labelledby="start-title"><div className="container"><div className={styles.cta}>
        <div><span className={styles.eyebrow}>Make it your workspace</span><Heading as="h2" id="start-title">从开源开始，按需扩展。</Heading><p>先了解 Alpha 版本，再建立自己的工作环境。<br/>需要闭源分发、产品集成或再授权时，选择与你用途匹配的许可。</p></div>
        <div className={styles.ctaActions}><Link className="button button--primary button--lg" to="/docs/quickstart">开始体验 <span aria-hidden="true">↗</span></Link><Link className="button button--outline button--lg tengu-button-on-dark" to="/license/dual_license">了解授权方式</Link></div>
    </div></div></section>;
}
