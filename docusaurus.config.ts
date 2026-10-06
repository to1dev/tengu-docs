import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import font from "./src/fonts.json";
import {themeBootstrap} from "./src/themes/catalog";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "Tengu",
    tagline: "本地优先的加密桌面工作区",
    favicon: "img/tengu.svg",

    // Set the production url of your site here
    url: "https://tengu.to1.dev",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    future: { faster: true, v4: { removeLegacyPostBuildHeadAttribute: true } },
    headTags: [
        { tagName: "script", attributes: { id: "tengu-theme-bootstrap" }, innerHTML: themeBootstrap },
        {
            tagName: "style",
            attributes: { id: "tengu-font-face" },
            innerHTML: `@font-face{font-family:"LXGW WenKai Screen";src:url("/fonts/${font.filename}") format("woff2");font-style:normal;font-weight:400;font-display:swap}`,
        },
        {
            tagName: "link",
            attributes: {
                rel: "preload",
                href: `/fonts/${font.filename}`,
                as: "font",
                type: "font/woff2",
                crossorigin: "anonymous",
            },
        },
    ],

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "to1dev", // Usually your GitHub org/user name.
    projectName: "tengu", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenAnchors: "throw",
    markdown: { hooks: { onBrokenMarkdownLinks: "throw" } },

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
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: "Tengu",
            logo: {
                alt: "Tengu Logo",
                src: "img/tengu.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "文档",
                },
                { to: "/blog", label: "博客", position: "left" },
                { to: "/whitepaper", label: "白皮书", position: "left" },
                { to: "/license/dual_license", label: "授权", position: "left" },
                {
                    href: "https://x.com/to1dev",
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
                            to: "/docs/quickstart",
                        },
                        { label: "项目与联系", to: "/markdown-page" },
                    ],
                },
                {
                    title: "社区",
                    items: [
                        {
                            label: "X",
                            href: "https://x.com/to1dev",
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
                            to: "/license/dual_license",
                        },
                        {
                            label: "白皮书",
                            to: "/whitepaper",
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
                            to: "/legal/terms",
                        },
                        {
                            label: "最终用户许可协议",
                            to: "/legal/eula",
                        },
                        {
                            label: "免责声明",
                            to: "/legal/disclaimer",
                        },
                        {
                            label: "退款政策",
                            to: "/legal/refund-policy",
                        },
                        {
                            label: "Cookie Policy",
                            to: "/legal/cookie-policy",
                        },
                    ],
                },
            ],
            copyright: `&copy; ${new Date().getFullYear()} Tengu · Local first, thoughtfully built. <a href="/license/agplv3">AGPLv3</a> / <a href="/license/dual_license">商业许可</a> · <a href="https://x.com/to1dev" target="_blank" rel="noopener noreferrer">@to1dev</a>`,
        },
        prism: {
            theme: prismThemes.dracula,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ["powershell", "bash", "json", "lua"],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
