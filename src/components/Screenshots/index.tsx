import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function Screenshots(): ReactNode {
    return (
        <section className={clsx("hero hero--primary", styles.screenshots)}>
            <div className="container">
                <div className="row">[Screenshots]</div>
            </div>
            <svg
                className={styles.wave}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#303846"
                    d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,85.3C672,53,768,43,864,74.7C960,107,1056,181,1152,208C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}
