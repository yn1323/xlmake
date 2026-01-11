/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",
    "installation",
    "quick-start",
    {
      type: "category",
      label: "Guides",
      items: ["guides/basic-usage", "guides/styling", "guides/multi-sheet", "guides/images", "guides/reading"],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        "api-reference/overview",
        "api-reference/xlkit",
        "api-reference/table",
        "api-reference/text",
        "api-reference/image",
        "api-reference/styling",
        "api-reference/reading",
      ],
    },
    {
      type: "category",
      label: "Examples",
      items: [
        "examples/basic-table",
        "examples/presets",
        "examples/multi-header",
        "examples/cell-merge",
        "examples/borders",
        "examples/conditional-styling",
      ],
    },
    {
      type: "category",
      label: "Reference",
      items: ["reference/presets", "reference/limitations", "reference/excel-constraints"],
    },
  ],
};

module.exports = sidebars;
