---
sidebar_position: 3
---

# .table()

テーブルを追加します。

## TableOptions

```typescript
.table({
  preset?: "basic" | "minimal" | "striped",
  columns: Column<T>[],
  data: T[],
  autoWidth?: "all" | "body" | false,
  mergeSameValues?: boolean,
  style?: TableStyle,
  border?: BorderStyle,
})
```

| オプション | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `preset` | `"basic"` \| `"minimal"` \| `"striped"` | - | プリセットスタイル |
| `columns` | `Column<T>[]` | **必須** | カラム定義 |
| `data` | `T[]` | **必須** | データ配列（`_style`、`_rowStyle`で行・セル単位スタイル指定可） |
| `autoWidth` | `"all"` \| `"body"` \| `false` | `"all"` | 列幅自動調整 |
| `mergeSameValues` | `boolean` | `false` | 同じ値のセルを縦方向にマージ |
| `style` | `TableStyle` | - | テーブル全体のスタイル |
| `border` | `BorderStyle` | - | 罫線設定 |

### data の特殊プロパティ

データ配列の各要素には、以下の特殊プロパティを追加できます:

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `_rowStyle` | `CellStyle` | この行全体に適用するスタイル |
| `_style` | `Partial<Record<keyof T, CellStyle>>` | 特定のセルに適用するスタイル |

```typescript
data: [
  { name: "通常", price: 100 },
  { name: "強調", price: 200, _rowStyle: { fill: "#FFFF00" } },
  { name: "混合", price: 300, _rowStyle: { bold: true }, _style: { price: { fill: "#FF0000" } } },
]
```

## カラム定義（Column）

### LeafColumn（通常のカラム）

```typescript
{
  key: keyof T & string,     // データのキー
  label: string,             // ヘッダーテキスト
  style?: CellStyle,         // この列のデフォルトスタイル
  mergeSameValues?: boolean, // この列で同値マージするか
}
```

### ParentColumn（マルチヘッダー用）

```typescript
{
  label: string,             // 親ヘッダーテキスト
  children: Column<T>[],     // 子カラム（再帰的に定義可能）
}
```

**マルチヘッダーの例:**

```typescript
columns: [
  {
    label: "商品情報",
    children: [
      { key: "category", label: "カテゴリ" },
      { key: "name", label: "商品名" },
    ],
  },
  { key: "price", label: "価格" },
]
```

結果:
```
| 商品情報           | 価格 |
| カテゴリ | 商品名 |      |
```

## autoWidth

列幅を自動調整します。

| 値 | 説明 |
|----|------|
| `"all"` | ヘッダーとボディ両方の最大幅で調整（デフォルト） |
| `"body"` | ボディのみで調整（ヘッダーは無視） |
| `false` | 自動調整しない |

```typescript
.table({
  autoWidth: "all",
  columns: [...],
  data: [...],
})
```

## mergeSameValues

同じ値のセルを縦方向にマージします。

```typescript
// テーブル全体でマージ
.table({
  mergeSameValues: true,
  columns: [...],
  data: [...],
})

// 列単位でマージ
.table({
  columns: [
    { key: "category", label: "カテゴリ", mergeSameValues: true },
    { key: "name", label: "商品名" },
  ],
  data: [...],
})
```

## 関連

- [スタイルAPI](./styling.md) - CellStyle, TableStyle, BorderStyleの詳細
- [プリセット一覧](../reference/presets.md) - プリセットの詳細
