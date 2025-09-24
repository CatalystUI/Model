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
                    docId: "model",
                    label: "Model"
                },
                {
                    type: "search",
                    position: "right"
                },
                // TODO: Revisit.
                // {
                //     type: "docsVersionDropdown",
                //     position: "right"
                // },
                {
                    type: "localeDropdown",
                    position: "right"
                }
            ],
            hideOnScroll: true
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        }
    } satisfies Preset.ThemeConfig,
    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts"
                }
            } satisfies Preset.Options
        ]
    ]
};

export default config;