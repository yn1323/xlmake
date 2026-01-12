---
sidebar_position: 5
---

# .text()

テキストを追加します。

## 入力形式

### シンプルなテキスト

```typescript
.text("タイトル")
```

### スタイル付きテキスト

```typescript
.text({
  value: "重要なテキスト",
  style: { bold: true, fontSize: 14, color: "#FF0000" }
})
```

## TextInput

| 形式 | 説明 |
|------|------|
| `string` | プレーンテキスト |
| `{ value, style? }` | スタイル付きテキスト |

## 使用例

```typescript
const output = await xlkit()
  .sheet("レポート")
  .text({ value: "売上レポート", style: { bold: true, fontSize: 16 } })
  .text("2024年1月分")
  .space(2)
  .table({
    preset: "basic",
    columns: [...],
    data: [...],
  })
  .space(1)
  .text("※ 金額は税抜きです")
  .getNode();
```

## スタイルオプション

`style`には[CellStyle](./styling.md#cellstyle)のプロパティを指定できます。

```typescript
.text({
  value: "警告メッセージ",
  style: {
    bold: true,
    color: "#FF0000",
    fontSize: 12,
  }
})
```

## 関連

- [スタイルAPI](./styling.md) - CellStyleの詳細
