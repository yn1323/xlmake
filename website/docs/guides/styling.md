---
sidebar_position: 2
---

# スタイリング

xlmakeでは様々な方法でスタイルを適用できます。

## プリセット

最も簡単な方法はプリセットを使うことです。

```typescript
.table({
  preset: "basic",  // 青ヘッダー + 全罫線
  columns: [...],
  data: [...],
})
```

利用可能なプリセット:
- `basic` - 青ヘッダー、白文字、全罫線
- `minimal` - ヘッダー太字のみ、罫線なし
- `striped` - 青ヘッダー、奇数行グレー背景、全罫線

## CellStyle

セルのスタイルを細かく指定できます。

```typescript
{
  // フォント
  fontFamily: "Arial",
  fontSize: 11,
  bold: true,
  italic: true,
  underline: true,
  strike: true,

  // 色
  color: "#FF0000",    // 文字色
  fill: "#FFFF00",     // 背景色

  // 配置（水平のみ、または垂直-水平の複合形式）
  align: "center",     // "left" | "center" | "right" | "top-left" | "bottom-center" など

  // 数値書式
  format: "number",
  decimalPlaces: 2,
  thousandsSeparator: true,
}
```

## テーブルスタイル

テーブル全体のヘッダーとボディにスタイルを適用します。

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

## 列スタイル

特定の列にスタイルを適用します。

```typescript
.table({
  columns: [
    { key: "name", label: "名前" },
    { key: "price", label: "価格", style: { bold: true } },
    { key: "warning", label: "警告", style: { color: "#FF0000" } },
  ],
  data: [...],
})
```

## 行スタイル（_rowStyle）

特定のデータ行全体にスタイルを適用します。

```typescript
.table({
  columns: [...],
  data: [
    { name: "通常", price: 100 },
    { name: "強調", price: 200, _rowStyle: { fill: "#FFFF00" } },
    { name: "合計", price: 300, _rowStyle: { bold: true, fill: "#E0E0E0" } },
  ],
})
```

`_rowStyle`は行全体に同じスタイルを適用したい場合に便利です。例えば、合計行を目立たせたり、エラー行に警告色を付けたりできます。

## セル単位スタイル（_style）

特定のセルだけにスタイルを適用します。

```typescript
.table({
  columns: [...],
  data: [
    { name: "通常", price: 100 },
    {
      name: "特価",
      price: 50,
      _style: {
        price: { bold: true, fill: "#FFFF00" },
      },
    },
  ],
})
```

## スタイルの優先度

スタイルは以下の順で適用されます（後のものが優先）:

1. **プリセット** - `preset: "basic"` など
2. **テーブルスタイル** - `style.header` / `style.body`
3. **列スタイル** - `columns[].style`
4. **行スタイル** - `data[]._rowStyle`
5. **セル単位スタイル** - `data[]._style`

## 数値書式

```typescript
.table({
  columns: [
    {
      key: "price",
      label: "価格",
      style: {
        format: "number",
        thousandsSeparator: true,  // 1,234,567
      },
    },
    {
      key: "rate",
      label: "割合",
      style: {
        format: "number",
        decimalPlaces: 2,  // 12.34
      },
    },
  ],
  data: [...],
})
```

## 罫線

```typescript
.table({
  columns: [...],
  data: [...],
  border: {
    outline: "medium",      // 外枠
    headerBody: "medium",   // ヘッダーとボディの境界
    headerInner: "thin",    // ヘッダー内部
    bodyInner: "thin",      // ボディ内部
    borderColor: "#000080", // 罫線の色
  },
})
```

## 関連

- [スタイルAPI](../api-reference/styling.md) - 全スタイルプロパティの詳細
- [罫線の例](../examples/borders.md) - 罫線の使用例
