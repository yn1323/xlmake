---
sidebar_position: 6
---

# .image()

Adds an image.

## ImageOptions

```typescript
.image({
  source: Buffer | string,  // Buffer, URL, or file path
  width?: number,           // Width (pixels)
  height?: number,          // Height (pixels)
  row?: number,             // Row position (0-indexed)
  col?: number,             // Column position (0-indexed)
})
```

| Property | Type | Description |
|----------|------|-------------|
| `source` | `Buffer` \| `string` | Image data, URL, or file path (Node.js only) |
| `width` | `number` | Image width (pixels) |
| `height` | `number` | Image height (pixels) |
| `row` | `number` | Row to place (starting from 0) |
| `col` | `number` | Column to place (starting from 0) |

## source

### Using Buffer

```typescript
import { readFileSync } from "fs";

const logoBuffer = readFileSync("./logo.png");

.image({
  source: logoBuffer,
  width: 150,
  height: 75,
})
```

### Using File Path (Node.js only)

```typescript
.image({
  source: "./logo.png",
  width: 150,
  height: 75,
})
```

### Using URL (Browser & Node.js)

```typescript
.image({
  source: "https://example.com/logo.png",
  width: 150,
  height: 75,
})
```

## Example

```typescript
import { readFileSync } from "fs";

const logoBuffer = readFileSync("./logo.png");

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

## Related

- [Images Guide](../guides/images.md) - Detailed image usage
