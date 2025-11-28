# xlkit

<p align="center">
  <img src="./logo.png" alt="xlkit Logo" width="200" />
</p>

A declarative, schema-based wrapper for [ExcelJS](https://github.com/exceljs/exceljs).
Define your Excel structure with a simple schema and let xlkit handle the styling, formatting, and layout.

[日本語 README](./README.md)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Quick Reference](#quick-reference)
  - [Style Properties](#style-properties)
  - [Border Presets](#border-presets)
  - [Style Priority](#style-priority)
  - [Preserving Leading Zeros](#preserving-leading-zeros--string-values)
- [API Reference](#api-reference)
- [Multi-Row Headers](#multi-row-headers)
- [Common Patterns](#common-patterns)
- [Complete Example](#complete-example)

## Features

- 📝 **Declarative Schema**: Define data and schema in one place
- 🎨 **Flexible Styling**: Apply styles at 7 different levels (title, header, row, column, cell)
- 🔗 **Auto Merge**: Automatically merge vertical cells with the same value
- 📊 **Multi-Row Headers**: Flexible header layouts with `colSpan`/`rowSpan` support
- 📏 **Auto Width**: Smart column width calculation based on content (including full-width chars)
- 🌈 **Hex Colors**: Use standard 6-digit hex codes (`#FF0000`) directly
- 🌐 **Universal**: Works in Node.js (file output) and Browser (`Uint8Array` output)

## Installation

```bash
npm install xlkit
```

## Quick Start

```typescript
import { createWorkbook } from 'xlkit';

await createWorkbook().addSheet({
  name: 'Users',
  headers: [
    { key: 'id', label: 'ID', width: 10 },
    { key: 'name', label: 'Name', width: 20 },
    { key: 'role', label: 'Role', width: 'auto', merge: 'vertical' },
    {
      key: 'isActive',
      label: 'Status',
      format: (val) => val ? 'Active' : 'Inactive',
      style: (val) => ({ font: { color: val ? '#00AA00' : '#FF0000' } })
    }
  ],
  rows: [
    { id: 1, name: 'Alice', role: 'Admin', isActive: true },
    { id: 2, name: 'Bob', role: 'User', isActive: true },
    { id: 3, name: 'Charlie', role: 'User', isActive: false }
  ],
  borders: 'all'
}).save('users.xlsx');
```

## Quick Reference

### Style Properties

#### Font (`font`)

| Property | Type | Possible Values | Default | Description |
|----------|------|-----------------|---------|-------------|
| `name` | `string` | `'Arial'`, `'Times New Roman'`, etc. | System dependent | Font name |
| `size` | `number` | `8` - `72` | `11` | Font size |
| `bold` | `boolean` | `true` / `false` | `false` | Bold text |
| `italic` | `boolean` | `true` / `false` | `false` | Italic text |
| `underline` | `boolean` | `true` / `false` | `false` | Underlined text |
| `strike` | `boolean` | `true` / `false` | `false` | Strikethrough |
| `color` | `string` | `'#RRGGBB'` format | `'#000000'` | Font color |

```typescript
// Example
{ font: { name: 'Arial', size: 12, bold: true, color: '#FF0000' } }
```

#### Fill (`fill`)

| Property | Type | Possible Values | Default | Description |
|----------|------|-----------------|---------|-------------|
| `color` | `string` | `'#RRGGBB'` format | None | Background color |

```typescript
// Example
{ fill: { color: '#FFFF00' } }  // Yellow background
```

**Common Colors:**

| Color | Hex Code | Use Case |
|-------|----------|----------|
| Red | `#FF0000` | Errors, warnings |
| Green | `#00AA00` | Success, active |
| Blue | `#4472C4` | Headers, links |
| Yellow | `#FFFF00` | Highlights |
| Gray | `#F2F2F2` | Alternating rows |
| Light Blue | `#DEEBF7` | Selected rows |
| Light Green | `#C6EFCE` | Positive values |
| Light Red | `#FFC7CE` | Negative values |

#### Alignment (`alignment`)

| Property | Type | Possible Values | Default | Description |
|----------|------|-----------------|---------|-------------|
| `horizontal` | `string` | `'left'`, `'center'`, `'right'` | `'left'` | Horizontal alignment |
| `vertical` | `string` | `'top'`, `'middle'`, `'bottom'` | `'bottom'` | Vertical alignment |
| `wrapText` | `boolean` | `true` / `false` | `false` | Wrap text in cell |

```typescript
// Example
{ alignment: { horizontal: 'center', vertical: 'middle', wrapText: true } }
```

### Border Presets

| Value | Description | Appearance |
|-------|-------------|------------|
| `'none'` | No borders (default) | Cell boundaries invisible |
| `'all'` | Grid borders on all cells | Table format |
| `'outer'` | Border only on outer edges | Outer frame only |
| `'header-body'` | Thick line below header | Emphasized header |

### Column Width Options

| Value | Type | Description |
|-------|------|-------------|
| `10`, `20`, etc. | `number` | Fixed width (character units) |
| `'auto'` | `string` | Auto-calculated based on content |
| Not specified | - | Uses `autoWidth` setting, or default width |

### Style Priority

Styles are applied in the following order, with later styles overriding earlier ones.

**Header Row:**
```
styles.all → styles.header → headers[].label.style
```

**Data Rows:**
```
styles.all → styles.body → styles.column[key] → styles.row() → headers[].style → rows[].{key}.style
```

```
Priority: Low ──────────────────────────────────────────────────────────→ High

┌──────────┐   ┌──────────┐   ┌────────────────┐   ┌───────────┐   ┌──────────────┐   ┌─────────────────┐
│styles.all│ → │styles.body│ → │styles.column[key]│ → │styles.row()│ → │headers[].style│ → │rows[].{key}.style│
└──────────┘   └──────────┘   └────────────────┘   └───────────┘   └──────────────┘   └─────────────────┘
    All          All body        Column-level        Row-level       Header def style   Cell-level style
```

## API Reference

### Basic Structure

```typescript
createWorkbook().addSheet({
  name: string,              // Sheet name (required)
  headers: HeaderDef[],      // Column definitions (required)
  rows: RowData[],           // Data rows (required)
  title?: TitleConfig,       // Title row
  multiRowHeaders?: MultiRowHeaderConfig, // Multi-row header configuration
  styles?: StylesConfig,     // Global styles
  borders?: BorderPreset,    // Border preset
  autoWidth?: AutoWidthConfig // Auto width configuration
})
```

### Header Definition (`HeaderDef`)

| Property | Type | Required | Default | Description |
|----------|------|:--------:|---------|-------------|
| `key` | `string` | ✅ | - | Data property key |
| `label` | `string \| LabelConfig` | ✅ | - | Header text |
| `width` | `number \| 'auto'` | - | Not set | Column width |
| `merge` | `'vertical'` | - | Not set | Auto-merge vertically |
| `format` | `string \| FormatFn` | - | Not set | Display format |
| `style` | `XLStyle \| StyleFn` | - | Not set | Column style |

```typescript
headers: [
  // Basic definition
  { key: 'id', label: 'ID', width: 10 },

  // Auto-merge
  { key: 'dept', label: 'Department', merge: 'vertical' },

  // Excel format string
  { key: 'salary', label: 'Salary', format: '$#,##0' },

  // Format function
  { key: 'rate', label: 'Rate', format: (val) => `${val}%` },

  // Fixed style
  { key: 'total', label: 'Total', style: { font: { bold: true } } },

  // Conditional style (function)
  {
    key: 'status',
    label: 'Status',
    style: (val, row, index) => val === 'OK'
      ? { font: { color: '#00AA00' } }
      : { font: { color: '#FF0000' } }
  },

  // Style header cell itself
  {
    key: 'name',
    label: { value: 'Name', style: { font: { bold: true, color: '#FFFFFF' }, fill: { color: '#4472C4' } } }
  }
]
```

### Format Strings

| Purpose | Format | Display Example |
|---------|--------|-----------------|
| Currency (USD) | `'$#,##0'` | $1,000 |
| Currency (JPY) | `'¥#,##0'` | ¥1,000 |
| 2 Decimals | `'#,##0.00'` | 1,000.00 |
| Percentage | `'0.00%'` | 12.34% |
| Date (ISO) | `'yyyy-mm-dd'` | 2025-01-15 |
| Date (US) | `'mm/dd/yyyy'` | 01/15/2025 |
| Text (String) | `'@'` | As-is |

### Preserving Leading Zeros / String Values

In Excel, values like `01` or `007` are treated as numbers, causing leading zeros to be removed.
To preserve them as strings, use one of the following methods:

**Method 1: Pass data as strings (Recommended)**

```typescript
rows: [
  { code: '007' },      // ✅ Pass as string → "007" preserved
  { code: '0123' },     // ✅ "0123" preserved
  { zipCode: '00456' }  // ✅ "00456" preserved
]
```

**Method 2: Use `@` format**

```typescript
headers: [
  {
    key: 'code',
    label: 'Code',
    format: '@'  // Force text format
  }
]
```

**Important Notes:**

| Value | Type | Excel Display |
|-------|------|---------------|
| `'007'` | String | 007 ✅ |
| `7` | Number | 7 |
| `'01234567890'` | String | 01234567890 ✅ |
| `1234567890` | Number | 1234567890 |

> For phone numbers, zip codes, employee IDs, and other data that may have leading zeros, always pass them as strings.

### Data Rows (`rows`)

```typescript
rows: [
  // Simple values
  { id: 1, name: 'Alice', salary: 50000 },

  // Cell with style
  {
    id: 2,
    name: { value: 'Bob', style: { font: { bold: true } } },
    salary: 60000
  }
]
```

### Title Row (`title`)

| Property | Type | Description |
|----------|------|-------------|
| `label` | `string \| string[]` | Title text (array for multiple lines) |
| `style` | `XLStyle` | Title style |

```typescript
// Single line title
title: {
  label: 'Employee List 2025',
  style: {
    fill: { color: '#4472C4' },
    font: { color: '#FFFFFF', bold: true, size: 14 },
    alignment: { horizontal: 'center' }
  }
}

// Multiple line title
title: {
  label: ['Company Inc.', 'Monthly Report - January 2025'],
  style: { font: { bold: true }, alignment: { horizontal: 'center' } }
}
```

### Global Styles (`styles`)

| Property | Type | Description |
|----------|------|-------------|
| `all` | `XLStyle` | Applied to all cells |
| `header` | `XLStyle` | Applied to header row |
| `body` | `XLStyle` | Applied to all data rows |
| `row` | `(data, index) => XLStyle` | Dynamic row styling |
| `column` | `{ [key]: XLStyle }` | Column-specific styling |

```typescript
styles: {
  all: { font: { name: 'Arial', size: 10 } },
  header: { fill: { color: '#4472C4' }, font: { color: '#FFFFFF', bold: true } },
  body: { alignment: { vertical: 'middle' } },
  row: (data, index) => index % 2 === 1 ? { fill: { color: '#F2F2F2' } } : {},
  column: {
    price: { alignment: { horizontal: 'right' } },
    name: { font: { bold: true } }
  }
}
```

### Auto Width (`autoWidth`)

```typescript
// Simple enable
autoWidth: true

// Detailed configuration
autoWidth: {
  enabled: true,           // Enable/disable
  padding: 2,              // Padding (character units)
  headerIncluded: true,    // Include header in calculation
  charWidthConstant: 1.2   // Width calculation multiplier
}
```

### Output Methods

| Method | Environment | Description |
|--------|-------------|-------------|
| `save(filename, options?)` | Node.js | Save to file |
| `download(filename, options?)` | Browser | Trigger download |
| `saveToBuffer(options?)` | Both | Get `Uint8Array` |

```typescript
// Options
interface SaveOptions {
  timeout?: number;  // Timeout in ms, default: 10000
}

// Examples
await workbook.save('output.xlsx');
await workbook.save('output.xlsx', { timeout: 30000 });
await workbook.download('output.xlsx');
const buffer = await workbook.saveToBuffer();
```

## Multi-Row Headers

Define headers that span multiple rows. Use `colSpan` for horizontal merging and `rowSpan` for vertical merging.

### Basic Usage

```typescript
await createWorkbook().addSheet({
  name: 'Report',
  headers: [
    { key: 'col1', label: 'Col 1' },
    { key: 'col2', label: 'Col 2' },
    { key: 'col3', label: 'Col 3' }
  ],
  multiRowHeaders: {
    rows: [
      [
        { value: 'Group A', colSpan: 2 },  // Merge 2 columns horizontally
        'Group B'
      ],
      ['Sub 1', 'Sub 2', 'Sub 3']  // Row 2
    ]
  },
  rows: [
    { col1: 'A1', col2: 'B1', col3: 'C1' }
  ]
}).save('output.xlsx');
```

**Result:**
```
┌─────────────────┬─────────┐
│    Group A      │ Group B │  ← Row 1 (Group A spans 2 columns)
├────────┬────────┼─────────┤
│ Sub 1  │ Sub 2  │  Sub 3  │  ← Row 2
├────────┼────────┼─────────┤
│  A1    │  B1    │   C1    │  ← Data row
└────────┴────────┴─────────┘
```

### rowSpan (Vertical Merging)

```typescript
multiRowHeaders: {
  rows: [
    [
      { value: 'Group 1', colSpan: 2 },
      { value: 'Group 2', rowSpan: 2 }  // Merge 2 rows vertically
    ],
    ['Sub 1', 'Sub 2']  // Group 2 is merged from above, so skip it
  ]
}
```

**Result:**
```
┌─────────────────┬─────────┐
│    Group 1      │         │
├────────┬────────┤ Group 2 │  ← rowSpan merges 2 rows
│ Sub 1  │ Sub 2  │         │
├────────┼────────┼─────────┤
│  ...   │  ...   │   ...   │  ← Data row
└────────┴────────┴─────────┘
```

### 3+ Row Headers

```typescript
multiRowHeaders: {
  rows: [
    [{ value: 'Main Title', colSpan: 4 }],
    [
      { value: 'Left Group', colSpan: 2 },
      { value: 'Right Group', colSpan: 2 }
    ],
    ['A', 'B', 'C', 'D']
  ]
}
```

### Styling Header Cells

```typescript
multiRowHeaders: {
  rows: [
    [
      {
        value: 'Styled Header',
        colSpan: 2,
        style: {
          font: { bold: true, color: '#FFFFFF' },
          fill: { color: '#4472C4' },
          alignment: { horizontal: 'center' }
        }
      }
    ],
    ['Column A', 'Column B']
  ]
}
```

### Combined with Title

```typescript
{
  title: { label: 'Report Title' },
  multiRowHeaders: {
    rows: [
      [{ value: 'Group', colSpan: 2 }],
      ['A', 'B']
    ]
  },
  // ...
}
// Result: Title row → Multi-row headers → Data rows
```

### HeaderCell Type Definition

| Property | Type | Required | Default | Description |
|----------|------|:--------:|---------|-------------|
| `value` | `string` | ✅ | - | Cell text |
| `colSpan` | `number` | - | `1` | Horizontal merge count |
| `rowSpan` | `number` | - | `1` | Vertical merge count |
| `style` | `XLStyle` | - | - | Cell style |

```typescript
// Type definitions
type HeaderRowDef = (HeaderCell | string)[];  // string is shorthand for { value: string }

interface MultiRowHeaderConfig {
  rows: HeaderRowDef[];
}
```

## Common Patterns

### Alternating Row Colors

```typescript
styles: {
  row: (_, index) => index % 2 === 1 ? { fill: { color: '#F2F2F2' } } : {}
}
```

### Conditional Formatting (Color by Value)

```typescript
headers: [
  {
    key: 'score',
    label: 'Score',
    style: (val) => {
      if (val >= 80) return { font: { color: '#006100' }, fill: { color: '#C6EFCE' } };
      if (val >= 60) return { font: { color: '#9C5700' }, fill: { color: '#FFEB9C' } };
      return { font: { color: '#9C0006' }, fill: { color: '#FFC7CE' } };
    }
  }
]
```

### Merge Cells by Department

```typescript
headers: [
  { key: 'dept', label: 'Department', merge: 'vertical', style: { alignment: { vertical: 'middle' } } },
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' }
]
// Ensure rows are sorted by department
```

### Currency Format with Right Alignment

```typescript
headers: [
  {
    key: 'price',
    label: 'Price',
    format: '$#,##0',
    style: { alignment: { horizontal: 'right' } }
  }
]
```

### Emphasized Header

```typescript
styles: {
  header: {
    fill: { color: '#4472C4' },
    font: { color: '#FFFFFF', bold: true, size: 12 },
    alignment: { horizontal: 'center' }
  }
}
```

## Complete Example

```typescript
import { createWorkbook } from 'xlkit';

await createWorkbook().addSheet({
  name: 'Employees',
  title: {
    label: 'Employee List 2025',
    style: {
      fill: { color: '#1F4E79' },
      font: { color: '#FFFFFF', bold: true, size: 16 },
      alignment: { horizontal: 'center' }
    }
  },
  headers: [
    {
      key: 'dept',
      label: 'Department',
      merge: 'vertical',
      style: { alignment: { vertical: 'middle', horizontal: 'center' } }
    },
    { key: 'name', label: 'Name', width: 20 },
    {
      key: 'salary',
      label: 'Salary',
      format: '$#,##0',
      style: (val) => val > 100000
        ? { font: { color: '#006100', bold: true }, fill: { color: '#C6EFCE' } }
        : {}
    },
    {
      key: 'status',
      label: 'Status',
      format: (val) => val ? 'Active' : 'Inactive',
      style: (val) => ({ font: { color: val ? '#006100' : '#9C0006' } })
    }
  ],
  rows: [
    { dept: 'Engineering', name: 'Alice', salary: 120000, status: true },
    { dept: 'Engineering', name: 'Bob', salary: 80000, status: true },
    { dept: 'Sales', name: 'Charlie', salary: 95000, status: true },
    { dept: 'Sales', name: 'Diana', salary: 88000, status: false }
  ],
  styles: {
    all: { font: { name: 'Arial', size: 10 } },
    header: { fill: { color: '#4472C4' }, font: { color: '#FFFFFF', bold: true } },
    row: (_, index) => index % 2 === 1 ? { fill: { color: '#F2F2F2' } } : {}
  },
  borders: 'all',
  autoWidth: true
}).save('employees.xlsx');
```

## License

MIT
