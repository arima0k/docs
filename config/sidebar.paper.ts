import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const paper: SidebarsConfig = {
  primary: [
    "README",
    {
      type: "category",
      label: "Administration",
      collapsed: true,
      link: {
        type: "doc",
        id: "admin/README",
      },
      items: [
        {
          type: "category",
          label: "Getting Started",
          link: {
            type: "generated-index",
            slug: "/cat/admin/getting-started",
          },
          items: [
            "admin/getting-started/getting-started",
            "admin/getting-started/adding-plugins",
            "admin/getting-started/migration",
          ],
        },
        {
          type: "category",
          label: "How-to Guides",
          link: {
            type: "generated-index",
            slug: "/cat/admin/how-to-guides",
          },
          items: [
            "admin/how-to/per-world-configuration",
            "admin/how-to/update",
            "admin/how-to/aikars-flags",
            "admin/how-to/anti-xray",
          ],
        },
        {
          type: "category",
          label: "Reference",
          link: {
            type: "generated-index",
            slug: "/cat/admin/reference",
          },
          items: ["admin/reference/global-configuration", "admin/reference/world-configuration"],
        },
      ],
    },
    {
      type: "category",
      label: "Development",
      collapsed: true,
      link: {
        type: "doc",
        id: "dev/README",
      },
      items: [
        {
          type: "ref",
          id: "dev/README",
        },
      ],
    },
  ],
};

export = paper;
