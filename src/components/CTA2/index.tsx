import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function CTA2(): ReactNode {
    return (
        <section className={clsx("hero", styles.ctas)}>
            <div className="container">
                <blockquote className={styles.quote}>
                    <p>链上 NFT 就是你的商业许可证</p>
                    <footer>
                        持有 Tengu 授权
                        NFT（Tier1–4），即可自动解锁商业权利：闭源、商用、打包、销售，无需激活码，无需服务器验证，一次购买，永久授权。
                    </footer>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--danger button--lg fancy-button"
                            to="/docs/intro"
                        >
                            🍕 购买许可证
                        </Link>
                    </div>
                </blockquote>
            </div>
            <svg
                className={styles.wave}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#44475a"
                    d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,218.7C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}
