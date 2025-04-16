import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FAQItem = {
    question: string;
    answer: string;
};

const FAQList: FAQItem[] = [
    {
        question: "问题1",
        answer: "回答1",
    },
    {
        question: "问题2",
        answer: "回答2",
    },
];

function FAQ({ question, answer }: FAQItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center"></div>
        </div>
    );
}

export default function FAQs(): ReactNode {
    return (
        <section className={clsx("hero", styles.faqs)}>
            <div className="container">
                <div className="row">
                    {FAQList.map((props, idx) => (
                        <FAQ key={idx} {...props} />
                    ))}
                </div>
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
