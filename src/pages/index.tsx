import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Screenshots from "@site/src/components/Screenshots";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <section style={{ overflow: "hidden", position: "relative" }}>
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
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
            <svg
                className={styles.wave}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#fff"
                    d="M0,256L60,240C120,224,240,192,360,165.3C480,139,600,117,720,122.7C840,128,960,160,1080,160C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>
        </section>
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
                <Screenshots />
            </main>
        </Layout>
    );
}
