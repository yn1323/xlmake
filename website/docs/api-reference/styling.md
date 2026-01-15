---
sidebar_position: 4
---

# スタイルAPI

セルやテーブルのスタイルを定義するための型です。

## CellStyle

セル単位のスタイルを定義します。

```typescript
{
  // フォント
  fontFamily?: string,
  fontSize?: number,
  bold?: boolean,
  italic?: boolean,
  underline?: boolean,
  strike?: boolean,

  // 色
  color?: string,    // 文字色 "#RRGGBB"
  fill?: string,     // 背景色 "#RRGGBB"

  // 配置
  align?: "left" | "center" | "right"
        | "top-left" | "top-center" | "top-right"
        | "middle-left" | "middle-center" | "middle-right"
        | "bottom-left" | "bottom-center" | "bottom-right",

  // 書式
  format?: "string" | "number" | "date",
  decimalPlaces?: number,
  thousandsSeparator?: boolean,
}
```

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `fontFamily` | `string` | フォント名 |
| `fontSize` | `number` | フォントサイズ |
| `bold` | `boolean` | 太字 |
| `italic` | `boolean` | 斜体 |
| `underline` | `boolean` | 下線 |
| `strike` | `boolean` | 取り消し線 |
| `color` | `string` | 文字色（#RRGGBB形式） |
| `fill` | `string` | 背景色（#RRGGBB形式） |
| `align` | `AlignType` | 配置（下記参照） |
| `format` | `"string"` \| `"number"` \| `"date"` | セル書式 |
| `decimalPlaces` | `number` | 小数点以下の桁数 |
| `thousandsSeparator` | `boolean` | 3桁区切りを使用 |

### AlignType

水平方向のみ、または垂直・水平の複合形式で指定できます。

| 値 | 説明 |
|----|------|
| `"left"` / `"center"` / `"right"` | 水平配置のみ（垂直は中央） |
| `"top-left"` / `"top-center"` / `"top-right"` | 上寄せ + 水平配置 |
| `"middle-left"` / `"middle-center"` / `"middle-right"` | 中央 + 水平配置 |
| `"bottom-left"` / `"bottom-center"` / `"bottom-right"` | 下寄せ + 水平配置 |

:::info マージ時の自動上寄せ
`mergeSameValues`でマージされたセルは、自動的に上寄せ（`top`）になります。
:::

## TableStyle

テーブル全体のスタイルを定義します。

```typescript
{
  header?: CellStyle,  // ヘッダー行のスタイル
  body?: CellStyle,    // ボディ行のスタイル
}
```

**使用例:**

```typescript
.table({
  columns: [...],
  data: [...],
  style: {
    header: { bold: true, fill: "#4472C4", color: "#FFFFFF" },
    body: { fontSize: 11 },
  },
})
```

## BorderStyle

罫線を定義します。

```typescript
{
  outline?: LineStyle,      // 外枠（テーブル全体）
  headerBody?: LineStyle,   // ヘッダーとボディの境界
  headerInner?: LineStyle,  // ヘッダー内部
  bodyInner?: LineStyle,    // ボディ内部
  borderColor?: string,     // 罫線色 "#RRGGBB"
}
```

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `outline` | `LineStyle` | テーブル外枠の罫線 |
| `headerBody` | `LineStyle` | ヘッダーとボディの境界線 |
| `headerInner` | `LineStyle` | ヘッダー内部の罫線 |
| `bodyInner` | `LineStyle` | ボディ内部の罫線 |
| `borderColor` | `string` | 罫線の色（#RRGGBB形式） |

## LineStyle

罫線の種類を指定します。

| 値 | 説明 |
|----|------|
| `"thin"` | 細線 |
| `"medium"` | 中線 |
| `"thick"` | 太線 |
| `"dotted"` | 点線 |
| `"dashed"` | 破線 |
| `"double"` | 二重線 |

**使用例:**

```typescript
.table({
  columns: [...],
  data: [...],
  border: {
    outline: "medium",
    headerBody: "medium",
    headerInner: "thin",
    bodyInner: "thin",
    borderColor: "#000080",
  },
})
```

## スタイルの優先度

スタイルは以下の順で適用されます（後のものが優先）:

1. **プリセット** - `preset: "basic"` など
2. **テーブルスタイル** - `style.header` / `style.body`
3. **列スタイル** - `columns[].style`
4. **条件付きスタイル** - `conditionalStyle`
5. **セル単位スタイル** - `data[]._style`

```typescript
// 優先度の例
.table({
  preset: "basic",              // 1. ベースのスタイル
  style: {
    header: { fontSize: 14 },   // 2. ヘッダーのフォントサイズを上書き
  },
  columns: [
    { key: "price", label: "価格", style: { bold: true } },  // 3. この列を太字
  ],
  conditionalStyle: (row, col) => {  // 4. 条件でスタイル適用
    if (col === "price" && row.price < 0) {
      return { color: "#FF0000" };
    }
    return {};
  },
  data: [
    {
      name: "特価",
      price: 100,
      _style: { price: { fill: "#FFFF00" } },  // 5. このセルだけ背景色
    },
  ],
})
```

## 関連

- [.table()](./table.md) - テーブルAPIの詳細
- [罫線の例](../examples/borders.md) - 罫線の使用例
- [条件付きスタイルの例](../examples/conditional-styling.md) - 条件付きスタイルの使用例
