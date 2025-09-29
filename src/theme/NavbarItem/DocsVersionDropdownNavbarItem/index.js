import React from "react";
// import { useLocation } from "@docusaurus/router";
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import OriginalDocsVersionDropdownNavbarItem from "@theme-original/NavbarItem/DocsVersionDropdownNavbarItem";

export default function DocsVersionDropdownNavbarItemWrapper(props) {
    // Cause the dropdown to only appear on the appropriate docs pages
    if (props.docsPluginId !== null || props.docsPluginId !== undefined) {
        const { activeDoc } = useActiveDocContext(props.docsPluginId);
        if (activeDoc === null || activeDoc === undefined) {
            return null;
        }
    }

    // Draw the original component
    return <OriginalDocsVersionDropdownNavbarItem {...props} />;
}
