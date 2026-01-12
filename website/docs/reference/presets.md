---
sidebar_position: 1
---

# プリセット一覧

xlkitが提供するテーブルスタイルのプリセットです。

## プリセット比較

| プリセット | ヘッダー | ボディ | 罫線 |
|-----------|---------|--------|------|
| `basic` | 青背景（#4472C4）・白文字・太字 | - | 全罫線（thin） |
| `minimal` | 太字のみ | - | なし |
| `striped` | 青背景（#4472C4）・白文字・太字 | 奇数行グレー背景（#F2F2F2） | 全罫線（thin） |

## basic

標準的なビジネス向けスタイルです。

### 特徴
- ヘッダー: 青背景（#4472C4）、白文字、太字
- ボディ: デフォルト
- 罫線: 全罫線（thin）

### 使用例

```typescript
.table({
  preset: "basic",
  columns: [...],
  data: [...],
})
```

## minimal

シンプルで軽量なスタイルです。

### 特徴
- ヘッダー: 太字のみ
- ボディ: デフォルト
- 罫線: なし

### 使用例

```typescript
.table({
  preset: "minimal",
  columns: [...],
  data: [...],
})
```

## striped

行ごとに背景色が交互に変わる、見やすいスタイルです。

### 特徴
- ヘッダー: 青背景（#4472C4）、白文字、太字
- ボディ: 奇数行にグレー背景（#F2F2F2）
- 罫線: 全罫線（thin）

### 使用例

```typescript
.table({
  preset: "striped",
  columns: [...],
  data: [...],
})
```

## カスタマイズ

プリセットをベースに、追加のスタイルを適用できます。後から指定したスタイルが優先されます。

```typescript
.table({
  preset: "basic",
  style: {
    header: { fontSize: 14 },  // ヘッダーのフォントサイズを変更
  },
  columns: [
    { key: "price", label: "価格", style: { bold: true } },  // この列を太字
  ],
  data: [...],
})
```

## 関連

- [プリセット使用例](../examples/presets.md) - プリセットの使用例
- [スタイルAPI](../api-reference/styling.md) - スタイルの優先度
