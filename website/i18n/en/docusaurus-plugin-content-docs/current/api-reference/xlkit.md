---
sidebar_position: 2
---

# xlkit()

Factory function that returns a WorkbookBuilder.

## Import

```typescript
import { xlkit } from "xlkit";
```

## Usage

```typescript
const builder = xlkit();
```

## WorkbookBuilder Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `sheet(name?)` | `SheetBuilder` | Add sheet |
| `getNode()` | `Promise<NodeOutput>` | Get Node.js output |
| `getBrowser()` | `Promise<BrowserOutput>` | Get browser output |

## SheetBuilder Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `table(options)` | `this` | Add table |
| `text(input)` | `this` | Add text |
| `image(options)` | `this` | Add image |
| `space(lines?)` | `this` | Add empty rows (default: 1) |
| `sheet(name?)` | `SheetBuilder` | Switch to another sheet |
| `getNode()` | `Promise<NodeOutput>` | Get Node.js output |
| `getBrowser()` | `Promise<BrowserOutput>` | Get browser output |

## sheet()

Adds a sheet. Name is auto-generated if omitted.

```typescript
// With name
xlkit().sheet("Sales Data")

// Without name (Sheet1, Sheet2... auto-generated)
xlkit().sheet()
```

## getNode()

Gets output object for Node.js environment.

```typescript
const output = await xlkit()
  .sheet("Data")
  .table({ columns: [...], data: [...] })
  .getNode();

// Save to file
await output.saveToFile("report.xlsx");

// Get as Buffer (for API responses)
const buffer = await output.toBuffer();
```

## getBrowser()

Gets output object for browser environment.

```typescript
const output = await xlkit()
  .sheet("Data")
  .table({ columns: [...], data: [...] })
  .getBrowser();

// Download
await output.download("report.xlsx");
```
