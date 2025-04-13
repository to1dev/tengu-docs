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
        </section>
    );
}
