import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// Docusaurus configuration
const config: Config = {
    title: "CatalystUI",
    url: "https://catalystui.org/",
    baseUrl: "/docs/",
    favicon: "/favicon.ico",
    trailingSlash: true,
    i18n: {
        defaultLocale: "en-US",
        locales: ["en-US"],
        path: "i18n",
        localeConfigs: {
            "en-US": {
                label: "English",
                direction: "ltr",
                htmlLang: "en-US",
                calendar: "gregory",
                path: "en-US"
            }
        }
    },
    future: {
        v4: true
    },
    tagline: "The universal translator between humans and computers.",
    organizationName: "catalystui",
    projectName: "model",
    deploymentBranch: "gh-pages",
    themeConfig: {
        colorMode: {
            defaultMode: "light",
            disableSwitch: false,
            respectPrefersColorScheme: true
        },
        image: "favicon.png",
        docs: {
            versionPersistence: "localStorage",
            sidebar: {
                hideable: true,
                autoCollapseCategories: false
            }
        },
        navbar: {
            title: "CatalystUI Documentation",
            logo: {
                alt: "CatalystUI Logo",
                src: "favicon.png"
            },
            items: [
                {
                    type: "doc",
                    position: "left",
                    docId: "index",
                    docsPluginId: "model",
                    label: "Model"
                },
                {
                    to: "/frameworks/",
                    label: "Frameworks",
                    position: "left",
                    activeBaseRegex: `/frameworks/`
                },
                {
                    type: "search",
                    position: "right"
                },
                // This needs to only appear on the correct docs pages
                // {
                //     type: "docsVersionDropdown",
                //     position: "right",
                //     docsPluginId: "model"
                // },
                {
                    type: "localeDropdown",
                    position: "right"
                }
            ],
            hideOnScroll: true
        },
        footer: {
            logo: {
                alt: "CatalystUI Logo",
                src: "logo.png",
                width: 117,
                height: 28
            },
            copyright: `Copyright © ${new Date().getFullYear()} FireController#1847.<br/>Copyright © ${new Date().getFullYear()} CatalystUI LLC.<br/>Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        }
    } satisfies Preset.ThemeConfig,
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    id: "model",
                    path: "docs/hm-model",
                    routeBasePath: "/model/"
                },
                blog: false
            }
        ]
    ],
    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "framework-netcore",
                path: "docs/fw-netcore",
                routeBasePath: "/frameworks/netcore/"
            }
        ]
    ]
};

export default config;