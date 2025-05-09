import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "Tengu",
    tagline: "一站式加密桌面客户端",
    favicon: "img/tengu.svg",

    // Set the production url of your site here
    url: "https://tengu.to1.dev",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "to1dev", // Usually your GitHub org/user name.
    projectName: "tengu", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "zh-Hans",
        locales: ["en", "zh-Hans"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/card.png",
        colorMode: {
            defaultMode: "light",
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: "Tengu",
            logo: {
                alt: "Tengu Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "文档",
                },
                { to: "/blog", label: "博客", position: "left" },
                {
                    href: "https://x.com/tengu_ai",
                    className: "header-x-link",
                    position: "right",
                    "aria-label": "X",
                },
                {
                    href: "https://github.com/to1dev/tengu",
                    position: "right",
                    className: "header-github-link",
                    "aria-label": "GitHub repository",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "学习",
                    items: [
                        {
                            label: "简介",
                            to: "/docs/intro",
                        },
                        {
                            label: "下载与安装",
                            to: "/docs/intro",
                        },
                    ],
                },
                {
                    title: "社区",
                    items: [
                        {
                            label: "X",
                            href: "https://x.com/tengu_ai",
                        },
                        {
                            label: "Discord",
                            href: "https://discord.gg/vFYFjdtFbn",
                        },
                        {
                            label: "Telegram",
                            href: "https://t.me/TenguAI",
                        },
                    ],
                },
                {
                    title: "链接",
                    items: [
                        {
                            label: "博客",
                            to: "/blog",
                        },
                        {
                            label: "源码",
                            href: "https://github.com/to1dev/tengu",
                        },
                        {
                            label: "许可证",
                            href: "/license/dual_license",
                        },
                        {
                            label: "白皮书",
                            href: "/whitepaper",
                        },
                    ],
                },
                {
                    title: "法律",
                    items: [
                        {
                            label: "隐私",
                            to: "/legal/privacy",
                        },
                        {
                            label: "条款",
                            href: "/legal/terms",
                        },
                        {
                            label: "最终用户许可协议",
                            href: "/legal/eula",
                        },
                        {
                            label: "免责声明",
                            href: "/legal/disclaimer",
                        },
                        {
                            label: "退款政策",
                            href: "/legal/refund-policy",
                        },
                        {
                            label: "Cookie Policy",
                            href: "/legal/cookie-policy",
                        },
                    ],
                },
            ],
            copyright: `&copy; ${new Date().getFullYear()} Tengu. 软件基于 <a href="/license/agplv3">AGPLv3</a> 与 <a href="/license/dual_license">商业许可证</a> 双授权, 由 <a href="https://x.com/to1dev" target="_blank">@to1dev</a> 精心打造`,
        },
        prism: {
            theme: prismThemes.dracula,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ["powershell", "bash", "json", "lua"],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
