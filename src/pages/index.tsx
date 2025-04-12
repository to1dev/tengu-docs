import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header
            className={clsx("hero hero--primary background", styles.heroBanner)}
        >
            <div className="container">
                <Heading as="h1" className="hero__title">
                    <div>
                        <img
                            src="/img/tengu.svg"
                            alt="Tengu Logo"
                            className="w-16 h-16"
                        />
                    </div>
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg fancy-button"
                        to="/docs/intro"
                    >
                        ⌛ 一分钟指南
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`一站式加密桌面客户端`}
            description="一款安全、直观、易用的桌面应用，让加密资产管理和交易变得轻而易举。"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
