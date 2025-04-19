import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function CTA1(): ReactNode {
    return (
        <section className={clsx("hero", styles.ctas)}>
            <div className="container">
                <blockquote className={styles.quote}>
                    <p>不仅是工具，更是一款可以出售的商品</p>
                    <footer>
                        Tengu
                        商业版不仅让你闭源定制、品牌重塑，还允许你将产品打包出售、提供服务、上线平台。一套程序，N
                        种变现路径，全看你怎么玩！
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
                    fill="#29784c"
                    d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,218.7C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}
