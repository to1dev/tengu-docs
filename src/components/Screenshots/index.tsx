import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.css";

type ScreenshotItem = {
    title: string;
    image?: string;
    width?: number;
    height?: number;
    description?: ReactNode;
    cropX?: number;
    cropY?: number;
    scale?: number;
};

const ScreenshotList: ScreenshotItem[] = [
    {
        title: "主界面",
        image: require("@site/static/img/screenshots/s1.png").default,
        width: 3440,
        height: 1440,
        cropX: 150,
        cropY: 150,
    },
    {
        title: "隐私保护",
        image: require("@site/static/img/screenshots/s1.png").default,
        width: 3440,
        height: 1440,
        cropX: 150,
        cropY: 150,
    },
    {
        title: "多链钱包",
        image: require("@site/static/img/screenshots/s3.png").default,
        width: 1770,
        height: 1094,
        cropX: 150,
        cropY: 150,
    },
    {
        title: "原生性能",
        image: require("@site/static/img/screenshots/s1.png").default,
        cropX: 150,
        cropY: 150,
    },
    {
        title: "脚本支持",
        image: require("@site/static/img/screenshots/s1.png").default,
        cropX: 150,
        cropY: 150,
    },
    {
        title: "免费开源",
        image: require("@site/static/img/screenshots/s1.png").default,
        cropX: 150,
        cropY: 150,
    },
    {
        title: "智能整合",
        image: require("@site/static/img/screenshots/s1.png").default,
        cropX: 150,
        cropY: 150,
    },
];

function Screenshot({
    title,
    image,
    description,
    width,
    height,
    cropX = 0,
    cropY = 0,
    scale = 2.3,
}: ScreenshotItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                {image && (
                    <svg
                        width="300"
                        height="300"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <mask id="myMask">
                                <path
                                    fill="white"
                                    d="M60.3,-18.9C65.8,-2.6,49.5,21.6,27.9,36.9C6.3,52.3,-20.6,58.9,-37,47.7C-53.4,36.6,-59.1,7.8,-51.2,-11.9C-43.3,-31.5,-21.6,-41.9,2.9,-42.8C27.4,-43.7,54.8,-35.2,60.3,-18.9Z"
                                    transform={`translate(${cropX} ${cropY}) scale(${scale})`}
                                />
                            </mask>
                        </defs>

                        <image
                            href={image}
                            width={width}
                            height={height}
                            mask="url(#myMask)"
                        />

                        <path
                            fill="none"
                            d="M60.3,-18.9C65.8,-2.6,49.5,21.6,27.9,36.9C6.3,52.3,-20.6,58.9,-37,47.7C-53.4,36.6,-59.1,7.8,-51.2,-11.9C-43.3,-31.5,-21.6,-41.9,2.9,-42.8C27.4,-43.7,54.8,-35.2,60.3,-18.9Z"
                            transform={`translate(${cropX} ${cropY}) scale(${scale})`}
                            stroke="white"
                            strokeWidth="5"
                        />
                    </svg>
                )}
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Screenshots(): ReactNode {
    return (
        <section className={clsx("hero", styles.screenshots)}>
            <div className="container">
                <div className="row">
                    {ScreenshotList.map((props, idx) => (
                        <Screenshot key={idx} {...props} />
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
