import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="A universal model for human–computer interaction that transforms raw data into fast, consistent, multisensory experiences across platforms.">
            <main>
                <h1>Hello, world!</h1>
            </main>
        </Layout>
    );
}