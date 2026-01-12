---
sidebar_position: 1
---

# API Overview

xlkit's API is divided into two main parts.

## Entry Points

### xlkit()

Creates a builder for generating Excel files.

```typescript
import { xlkit } from "xlkit";

const builder = xlkit();
```

### read()

Reads existing Excel files.

```typescript
import { read } from "xlkit";

const workbook = await read("report.xlsx");
```

## Method Reference

### WorkbookBuilder / SheetBuilder

| Method | Returns | Description |
|--------|---------|-------------|
| `sheet(name?)` | `SheetBuilder` | Add sheet (auto-generated name if omitted) |
| `table(options)` | `this` | Add table |
| `text(input)` | `this` | Add text |
| `image(options)` | `this` | Add image |
| `space(lines?)` | `this` | Add empty rows (default: 1) |
| `getNode()` | `Promise<NodeOutput>` | Get Node.js output object |
| `getBrowser()` | `Promise<BrowserOutput>` | Get browser output object |

### NodeOutput

| Method | Returns | Description |
|--------|---------|-------------|
| `saveToFile(path)` | `Promise<void>` | Save to file |
| `toBuffer()` | `Promise<Buffer>` | Get as Buffer |

### BrowserOutput

| Method | Returns | Description |
|--------|---------|-------------|
| `download(filename)` | `Promise<void>` | Download file |

## Basic Flow

```
xlkit() → sheet() → table() / text() / image() → getNode() / getBrowser()
```

```typescript
const output = await xlkit()
  .sheet("Sheet Name")
  .table({ columns: [...], data: [...] })
  .getNode();

await output.saveToFile("output.xlsx");
```

## Next Steps

- [xlkit()](./xlkit.md) - Factory function details
- [.table()](./table.md) - Table API details
- [Style API](./styling.md) - Styling details
