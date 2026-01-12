---
sidebar_position: 6
---

# .image()

画像を追加します。

## ImageOptions

```typescript
.image({
  source: Buffer | string,  // Buffer、URL、またはファイルパス
  width?: number,           // 幅（ピクセル）
  height?: number,          // 高さ（ピクセル）
  row?: number,             // 行位置（0-indexed）
  col?: number,             // 列位置（0-indexed）
})
```

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `source` | `Buffer` \| `string` | 画像データ、URL、またはファイルパス（Node.jsのみ） |
| `width` | `number` | 画像の幅（ピクセル） |
| `height` | `number` | 画像の高さ（ピクセル） |
| `row` | `number` | 配置する行（0から開始） |
| `col` | `number` | 配置する列（0から開始） |

## source

### Bufferを使用

```typescript
import { readFileSync } from "fs";

const logoBuffer = readFileSync("./logo.png");

.image({
  source: logoBuffer,
  width: 150,
  height: 75,
})
```

### ファイルパスを使用（Node.jsのみ）

```typescript
.image({
  source: "./logo.png",
  width: 150,
  height: 75,
})
```

### URLを使用（ブラウザ・Node.js両対応）

```typescript
.image({
  source: "https://example.com/logo.png",
  width: 150,
  height: 75,
})
```

## 使用例

```typescript
import { readFileSync } from "fs";

const logoBuffer = readFileSync("./logo.png");

const output = await xlkit()
  .sheet("レポート")
  .text({ value: "月次レポート", style: { bold: true, fontSize: 16 } })
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

## 関連

- [画像挿入ガイド](../guides/images.md) - 画像の詳しい使い方
