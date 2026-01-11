# 罫線API リファクタリング計画

## 背景

### 問題

罫線（border）の書き方が、結合テスト計画ドキュメントと実際のソースコードで異なっていた。

**結合テスト計画（テーブル構造ベース）:**
```typescript
border: {
  outline: "medium",
  headerBody: "double",
  headerInner: "thin",
  bodyInner: "thin",
  borderColor: "#000000",
}
```

**実装（セル位置ベース）:**
```typescript
border: {
  top: true,
  bottom: true,
  left: true,
  right: true,
  horizontal: true,
  vertical: true,
  color: "#000000",
  style: "thin",
}
```

### 決定

**テーブル構造ベース（A案）に統一する。**

理由：
- テーブルの意味で指定できる（「ヘッダーとボディの境目」等）
- 宣言的APIの思想に合致
- xlkitのコンセプト「コードから結果が見える」に適合

---

## 目標のAPI形式

```typescript
type LineStyle = "thin" | "medium" | "thick" | "dotted" | "dashed" | "double";

type BorderStyle = {
  outline?: LineStyle;       // 外枠（テーブル全体の外周）
  headerBody?: LineStyle;    // ヘッダーとボディの境目
  headerInner?: LineStyle;   // ヘッダー内部の罫線
  bodyInner?: LineStyle;     // ボディ内部の罫線
  borderColor?: string;      // 罫線色 "#RRGGBB"
};
```

### 各プロパティの説明

| プロパティ | 説明 | 適用箇所 |
|-----------|------|---------|
| `outline` | 外枠 | テーブル全体の上下左右の外周 |
| `headerBody` | ヘッダーとボディの境目 | ヘッダー最下行の下罫線 |
| `headerInner` | ヘッダー内部 | ヘッダー内のセル間罫線 |
| `bodyInner` | ボディ内部 | ボディ内のセル間罫線 |
| `borderColor` | 罫線色 | 全罫線に適用される色 |

### 視覚的なイメージ

```
┌──────────┬──────────┬──────────┐  ← outline (top)
│  Header1 │  Header2 │  Header3 │  ← headerInner (vertical)
├══════════┼══════════┼══════════┤  ← headerBody
│   Data1  │   Data2  │   Data3  │
├──────────┼──────────┼──────────┤  ← bodyInner
│   Data4  │   Data5  │   Data6  │
└──────────┴──────────┴──────────┘  ← outline (bottom)
↑                                 ↑
outline (left)              outline (right)
```

---

## 変更対象ファイル

### 1. 型定義・スキーマ

| ファイル | 変更内容 |
|---------|---------|
| `src/types/style.ts` | BorderStyle型を新形式に変更、LineStyle型を追加 |
| `src/schemas/style.ts` | borderStyleSchemaを新形式に更新 |
| `src/index.ts` | LineStyle型をエクスポート |

### 2. プリセット

| ファイル | 変更内容 |
|---------|---------|
| `src/styles/presets.ts` | 各プリセットのborder定義を新形式に更新 |

### 3. コンバーター（新規関数追加）

| ファイル | 変更内容 |
|---------|---------|
| `src/styles/converter.ts` | `createHeaderCellBorder()`, `createBodyCellBorder()` 追加 |

**追加関数の役割:**
- テーブル構造ベースのBorderStyleから、各セルに適用するExcelJS Borders形式に変換
- セルの位置（先頭列、最終列、先頭行、最終行）に応じて適切な罫線を選択

### 4. エンジン

| ファイル | 変更内容 |
|---------|---------|
| `src/engine/sheet-writer.ts` | writeHeaders, writeDataRowsで罫線適用処理追加 |

### 5. 読み取り機能

| ファイル | 変更内容 |
|---------|---------|
| `src/reader/cell-reader.ts` | 罫線情報の読み取り機能を追加 |

### 6. ユニットテスト

| ファイル | 変更内容 |
|---------|---------|
| `src/schemas/style.test.ts` | borderStyleSchemaのテストを新形式に更新 |
| `src/styles/presets.test.ts` | プリセットのborderテストを更新 |
| `src/styles/converter.test.ts` | Border変換関数のテストを追加 |

### 7. 結合テスト

| ファイル | 変更内容 |
|---------|---------|
| `tests/integration/05-table-features.test.ts` | Borderシートのborder設定を新形式に更新 |

---

## 実装順序

1. 型定義の変更 (`src/types/style.ts`)
2. スキーマの変更 (`src/schemas/style.ts`)
3. スキーマテストの更新 (`src/schemas/style.test.ts`)
4. コンバーター関数の追加 (`src/styles/converter.ts`)
5. コンバーターテストの追加 (`src/styles/converter.test.ts`)
6. プリセットの更新 (`src/styles/presets.ts`)
7. プリセットテストの更新 (`src/styles/presets.test.ts`)
8. SheetWriterの更新 (`src/engine/sheet-writer.ts`)
9. 読み取り機能の追加 (`src/reader/cell-reader.ts`)
10. エクスポートの更新 (`src/index.ts`)
11. 結合テストの更新 (`tests/integration/05-table-features.test.ts`)

---

## 実装詳細

### コンバーター関数の設計

```typescript
// ヘッダーセル用のボーダーを生成
export function createHeaderCellBorder(
  border: BorderStyle | undefined,
  position: { isFirst: boolean; isLast: boolean },
  isLastHeaderRow: boolean
): Partial<Borders> | undefined;

// ボディセル用のボーダーを生成
export function createBodyCellBorder(
  border: BorderStyle | undefined,
  position: {
    isFirstCol: boolean;
    isLastCol: boolean;
    isFirstRow: boolean;
    isLastRow: boolean
  }
): Partial<Borders> | undefined;
```

### プリセット更新例

```typescript
// basic プリセット
border: {
  outline: "thin",
  headerBody: "thin",
  headerInner: "thin",
  bodyInner: "thin",
},

// minimal プリセット
border: {
  headerBody: "thin",  // ヘッダーの下線のみ
},
```

---

## 検証方法

1. `pnpm type-check` - 型チェック
2. `pnpm lint` - リンティング
3. `pnpm format` - フォーマット
4. `pnpm test` - ユニットテスト
5. 結合テストでExcel出力し、罫線が正しく適用されているか目視確認

---

## 決定の経緯（2026-01-11）

- Q: 結合テスト計画と実装で罫線の書き方が異なる。どちらに統一するか？
- A: **テーブル構造ベース（A案）に統一する。** 理由：テーブルの意味で指定でき、宣言的APIの思想に合致するため。

- Q: 罫線の読み取り機能も実装するか？
- A: **実装する。** 理由：結合テストで罫線が正しく適用されているか検証するため。

- Q: 結合テストも修正対象か？
- A: **はい。** `tests/integration/05-table-features.test.ts` の Borderシートを新形式に更新する。