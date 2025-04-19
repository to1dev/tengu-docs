import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function CTA3(): ReactNode {
    return (
        <section className={clsx("hero", styles.ctas)}>
            <div className="container">
                <blockquote className={styles.quote}>
                    <p>想打造自己的加密桌面控制台？从这里出发</p>
                    <footer>
                        你可以修改界面、扩展功能、加上你的
                        LOGO，然后直接卖给客户，甚至做成 SaaS 平台。Tengu
                        商业版，让每一位普通用户都能成为厂商。
                    </footer>
                    <footer>
                        现在购买商业版，不仅获得授权，还将锁定 TENGU
                        代币未来空投资格，让你在使用中也有机会持币为王。
                    </footer>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--danger button--lg fancy-button"
                            to="/docs/intro"
                        >
                            🧀 购买许可证
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
                    fill="#303846"
                    d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,218.7C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}
