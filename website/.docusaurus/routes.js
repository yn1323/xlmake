import ComponentCreator from "@docusaurus/ComponentCreator";
import React from "react";

export default [
  {
    path: "/xlkit/__docusaurus/debug",
    component: ComponentCreator("/xlkit/__docusaurus/debug", "a37"),
    exact: true,
  },
  {
    path: "/xlkit/__docusaurus/debug/config",
    component: ComponentCreator("/xlkit/__docusaurus/debug/config", "e7b"),
    exact: true,
  },
  {
    path: "/xlkit/__docusaurus/debug/content",
    component: ComponentCreator("/xlkit/__docusaurus/debug/content", "9d2"),
    exact: true,
  },
  {
    path: "/xlkit/__docusaurus/debug/globalData",
    component: ComponentCreator("/xlkit/__docusaurus/debug/globalData", "f6c"),
    exact: true,
  },
  {
    path: "/xlkit/__docusaurus/debug/metadata",
    component: ComponentCreator("/xlkit/__docusaurus/debug/metadata", "577"),
    exact: true,
  },
  {
    path: "/xlkit/__docusaurus/debug/registry",
    component: ComponentCreator("/xlkit/__docusaurus/debug/registry", "850"),
    exact: true,
  },
  {
    path: "/xlkit/__docusaurus/debug/routes",
    component: ComponentCreator("/xlkit/__docusaurus/debug/routes", "b71"),
    exact: true,
  },
  {
    path: "/xlkit/docs",
    component: ComponentCreator("/xlkit/docs", "aad"),
    routes: [
      {
        path: "/xlkit/docs",
        component: ComponentCreator("/xlkit/docs", "551"),
        routes: [
          {
            path: "/xlkit/docs",
            component: ComponentCreator("/xlkit/docs", "7aa"),
            routes: [
              {
                path: "/xlkit/docs/api-reference/image",
                component: ComponentCreator("/xlkit/docs/api-reference/image", "ce2"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/api-reference/overview",
                component: ComponentCreator("/xlkit/docs/api-reference/overview", "103"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/api-reference/reading",
                component: ComponentCreator("/xlkit/docs/api-reference/reading", "f46"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/api-reference/styling",
                component: ComponentCreator("/xlkit/docs/api-reference/styling", "c53"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/api-reference/table",
                component: ComponentCreator("/xlkit/docs/api-reference/table", "4ac"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/api-reference/text",
                component: ComponentCreator("/xlkit/docs/api-reference/text", "a8b"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/api-reference/xlkit",
                component: ComponentCreator("/xlkit/docs/api-reference/xlkit", "444"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/examples/basic-table",
                component: ComponentCreator("/xlkit/docs/examples/basic-table", "805"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/examples/borders",
                component: ComponentCreator("/xlkit/docs/examples/borders", "b2a"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/examples/cell-merge",
                component: ComponentCreator("/xlkit/docs/examples/cell-merge", "2de"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/examples/conditional-styling",
                component: ComponentCreator("/xlkit/docs/examples/conditional-styling", "ff0"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/examples/multi-header",
                component: ComponentCreator("/xlkit/docs/examples/multi-header", "ec6"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/examples/presets",
                component: ComponentCreator("/xlkit/docs/examples/presets", "f86"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/guides/basic-usage",
                component: ComponentCreator("/xlkit/docs/guides/basic-usage", "3a7"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/guides/images",
                component: ComponentCreator("/xlkit/docs/guides/images", "219"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/guides/multi-sheet",
                component: ComponentCreator("/xlkit/docs/guides/multi-sheet", "aa0"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/guides/reading",
                component: ComponentCreator("/xlkit/docs/guides/reading", "10e"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/guides/styling",
                component: ComponentCreator("/xlkit/docs/guides/styling", "995"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/installation",
                component: ComponentCreator("/xlkit/docs/installation", "9a7"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/intro",
                component: ComponentCreator("/xlkit/docs/intro", "270"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/quick-start",
                component: ComponentCreator("/xlkit/docs/quick-start", "be9"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/reference/excel-constraints",
                component: ComponentCreator("/xlkit/docs/reference/excel-constraints", "431"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/reference/limitations",
                component: ComponentCreator("/xlkit/docs/reference/limitations", "384"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/xlkit/docs/reference/presets",
                component: ComponentCreator("/xlkit/docs/reference/presets", "4ea"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/xlkit/",
    component: ComponentCreator("/xlkit/", "c31"),
    exact: true,
  },
  {
    path: "*",
    component: ComponentCreator("*"),
  },
];
