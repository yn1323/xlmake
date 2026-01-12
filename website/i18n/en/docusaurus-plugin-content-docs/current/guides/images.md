---
sidebar_position: 4
---

# Images

Learn how to insert images into Excel with xlkit.

## Basic Usage

```typescript
import { xlkit } from "xlkit";
import { readFileSync } from "fs";

const logoBuffer = readFileSync("./logo.png");

const output = await xlkit()
  .sheet("Report")
  .image({
    source: logoBuffer,
    width: 150,
    height: 75,
  })
  .getNode();
```

## ImageOptions

```typescript
.image({
  source: Buffer | string,  // Image data or file path
  width?: number,           // Width (pixels)
  height?: number,          // Height (pixels)
  row?: number,             // Row position (0-indexed)
  col?: number,             // Column position (0-indexed)
})
```

## Specifying source

### Using Buffer (Recommended)

```typescript
import { readFileSync } from "fs";

const imageBuffer = readFileSync("./image.png");

.image({
  source: imageBuffer,
  width: 200,
  height: 100,
})
```

### Using File Path (Node.js only)

```typescript
.image({
  source: "./image.png",
  width: 200,
  height: 100,
})
```

## Specifying Size

Image size is specified in pixels.

```typescript
.image({
  source: imageBuffer,
  width: 300,   // 300 pixels wide
  height: 150,  // 150 pixels tall
})
```

## Specifying Position

Use `row` and `col` to specify placement position (starting from 0).

```typescript
.image({
  source: imageBuffer,
  width: 200,
  height: 100,
  row: 5,   // Row 6
  col: 2,   // Column C
})
```

## Combining with Text and Tables

```typescript
const output = await xlkit()
  .sheet("Report")
  .text({ value: "Monthly Report", style: { bold: true, fontSize: 16 } })
  .space(1)
  .image({
    source: logoBuffer,
    width: 150,
    height: 75,
  })
  .space(2)
  .table({
    preset: "basic",
    columns: [...],
    data: [...],
  })
  .getNode();
```

## Complete Example

```typescript
import { xlkit } from "xlkit";
import { readFileSync } from "fs";

const logoBuffer = readFileSync("./company-logo.png");
const chartBuffer = readFileSync("./sales-chart.png");

const output = await xlkit()
  .sheet("Report")
  // Header section
  .text({ value: "Sample Corporation", style: { bold: true, fontSize: 18 } })
  .space(1)
  .image({
    source: logoBuffer,
    width: 120,
    height: 60,
  })
  .space(2)
  // Data table
  .text({ value: "Sales Data", style: { bold: true, fontSize: 14 } })
  .space(1)
  .table({
    preset: "basic",
    columns: [
      { key: "month", label: "Month" },
      { key: "sales", label: "Sales" },
    ],
    data: [
      { month: "January", sales: 1000000 },
      { month: "February", sales: 1200000 },
      { month: "March", sales: 1100000 },
    ],
  })
  .space(2)
  // Chart image
  .text({ value: "Sales Trend Chart", style: { bold: true, fontSize: 14 } })
  .space(1)
  .image({
    source: chartBuffer,
    width: 400,
    height: 250,
  })
  .getNode();

await output.saveToFile("report-with-images.xlsx");
```

## Related

- [.image() API](../api-reference/image.md) - Image API details
- [Basic Usage](./basic-usage.md) - xlkit basics
