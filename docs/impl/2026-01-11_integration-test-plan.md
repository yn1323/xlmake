# xlkit 結合テスト実装計画

## 概要

xlkitの結合テストを実装する。Excelファイルを出力して目視確認 + READ APIで検証を行う。

### 前提条件
- Excel制約バリデーターが実装済みであること
  - 参照: [2026-01-11_excel-constraints-validator.md](./2026-01-11_excel-constraints-validator.md)

### 目的
- 各機能が正しく動作することを検証
- スタイル・書式の出力を目視確認可能にする
- エラーハンドリングの動作を検証

### 方針
- 出力Excelは7ブックに分割（起動回数を抑えつつ差分管理しやすく）
- 各スタイル項目は最低1回登場（複合テストで効率的にカバー）
- `toBuffer()` と `saveToFile()` の両方をテスト

---

## 結合テストの考え方

### なぜ結合テストが必要か

ユニットテストでは各モジュールが個別に正しく動作することを検証するが、結合テストでは以下を確認する：

1. **モジュール間の連携**: ビルダー → エンジン → 出力 の一連の流れが正しく動作するか
2. **最終出力の正確性**: 生成されたExcelファイルが意図通りの内容・スタイルになっているか
3. **READ APIとの整合性**: 書き込んだ内容がREAD APIで正しく読み取れるか

### 検証の2つのアプローチ

| アプローチ | 方法 | 目的 |
|-----------|------|------|
| **自動検証** | READ APIで生成ファイルを読み取り、値・スタイルをassert | 回帰テスト、CI/CD |
| **目視確認** | 生成Excelを実際に開いて確認 | レイアウト、見た目の最終確認 |

両方を組み合わせることで、機械的な検証と人間の目による確認を両立する。

---

## テスト観点の洗い出し

### 観点1: 出力形式

| 観点 | 説明 |
|------|------|
| `toBuffer()` | バッファ出力（APIレスポンス用途） |
| `saveToFile()` | ファイル保存（目視確認用） |

### 観点2: ブロック種類

xlkitは「ブロックを上から積み上げる」設計のため、各ブロックの動作確認が必要。

| ブロック | 説明 |
|---------|------|
| table | テーブル出力（メイン機能） |
| text | テキスト出力 |
| image | 画像挿入 |
| space | 空行挿入 |

### 観点3: テーブル機能

| 機能 | 説明 |
|------|------|
| preset | プリセットスタイル（basic/minimal/striped） |
| autoWidth | 列幅自動調整（all/body/false） |
| mergeSameValues | 同値セルの垂直マージ |
| マルチヘッダー | 親カラム構造（階層ヘッダー） |
| border | 罫線設定 |
| _style | セル単位スタイル |

### 観点4: スタイル項目

| カテゴリ | 項目 |
|---------|------|
| フォント | fontFamily, fontSize, bold, italic, underline, strike |
| 色 | color（文字色）, fill（背景色） |
| 配置 | align（left/center/right） |
| 書式 | format, decimalPlaces, thousandsSeparator |

### 観点5: 罫線

| 項目 | 説明 |
|------|------|
| outline | 外枠 |
| headerBody | ヘッダーとボディの境目 |
| headerInner | ヘッダー内部 |
| bodyInner | ボディ内部 |
| borderColor | 罫線色 |

### 観点6: 構造

| 観点 | 説明 |
|------|------|
| 複数シート | 複数シートの生成と独立性 |
| 複合ブロック | text → space → table の組み合わせ |
| セルマージ | マージ情報の読み取り |

### 観点7: エラーハンドリング

| カテゴリ | 観点 |
|---------|------|
| 既存エラー | 重複シート名、不正プリセット、space負数 |
| Excel制約 | シート名制約、データサイズ制約 |

---

## テスト設計の方針

### スタイルの網羅性

**方針**: 全パターンを網羅するが、個別テストではなく複合テストでカバー

```
❌ 個別テスト方式（非効率）
- test: bold が適用される
- test: italic が適用される
- test: underline が適用される
...

✅ 複合テスト方式（効率的）
- test: FontStyles シートで bold, italic, underline, strike, fontFamily を一括検証
```

### ブック分割の考え方

**トレードオフ:**
- まとめすぎ → 1ファイルの差分が大きくなる
- 分けすぎ → Excel起動回数が増える（起動に時間がかかる）

**採用した方針**: カテゴリ別に7ブックに分割
- 関連する機能を1ブックにまとめる
- 目視確認時に比較しやすい
- 差分管理しやすい粒度を維持

---

## 出力ファイル構成（7ブック）

| ブック名 | 内容 | シート数 |
|---------|------|---------|
| `01-presets.xlsx` | basic/minimal/striped | 3 |
| `02-styles.xlsx` | フォント系 + 色 + 配置 | 3 |
| `03-formats.xlsx` | 数値/日付/通貨など書式 | 3 |
| `04-structure.xlsx` | 複数シート + space + 複合ブロック | 3 |
| `05-table-features.xlsx` | autoWidth/mergeSameValues/border | 5 |
| `06-cell-styles.xlsx` | _style | 1 |
| `07-image.xlsx` | 画像ブロック | 1 |

---

## テストケース詳細

### 01-presets.xlsx

3シート構成でプリセット比較。

| シート名 | preset | 検証項目 |
|---------|--------|----------|
| Basic | basic | ヘッダー背景色(#4472C4)、白文字、罫線 |
| Minimal | minimal | ヘッダー太字、ヘッダー下罫線のみ |
| Striped | striped | 奇数行背景色(#F2F2F2) |

**検証コード例:**
```typescript
// Basic プリセット
const header = sheet.cell("A1");
expect(header.style?.bold).toBe(true);
expect(header.style?.fill).toBe("#4472C4");
expect(header.style?.color).toBe("#FFFFFF");
```

---

### 02-styles.xlsx

スタイル項目を複合的にカバー。

| シート名 | カバーするスタイル |
|---------|-------------------|
| FontStyles | fontFamily, bold, italic, underline, strike |
| Colors | color, fill |
| Alignment | align (left/center/right) |

**FontStylesシートの構成:**
```typescript
columns: [
  { key: "normal", label: "通常" },
  { key: "bold", label: "太字", style: { bold: true } },
  { key: "italic", label: "斜体", style: { italic: true } },
  { key: "underline", label: "下線", style: { underline: true } },
  { key: "strike", label: "打消", style: { strike: true } },
  { key: "fontFamily", label: "Arial", style: { fontFamily: "Arial" } },
]
```

---

### 03-formats.xlsx

書式系を検証。

| シート名 | カバーする書式 |
|---------|---------------|
| NumberFormat | format: "number", decimalPlaces, thousandsSeparator |
| DateFormat | format: "date" |
| CurrencyFormat | 通貨形式（カスタムフォーマット） |

**NumberFormatシートの構成:**
```typescript
columns: [
  { key: "raw", label: "元値" },
  { key: "formatted", label: "書式適用", style: {
    format: "number",
    decimalPlaces: 2,
    thousandsSeparator: true
  }},
]
data: [
  { raw: 1234567.89, formatted: 1234567.89 },
]
// 表示: 1,234,567.89
```

---

### 04-structure.xlsx

構造系を検証。

| シート名 | 内容 |
|---------|------|
| TextSpaceTable | text → space(1) → table |
| TableSpaceTextTable | table → space(2) → text → table |
| TextOnly | textのみ（シンプルケース） |

**TextSpaceTableシートの検証:**
```typescript
// A1: テキスト
expect(sheet.cell("A1").value).toBe("タイトル");
// A2: 空行（space(1)）
expect(sheet.cell("A2").value).toBeNull();
// A3: テーブルヘッダー開始
expect(sheet.cell("A3").value).toBe("名前");
```

---

### 05-table-features.xlsx

テーブル機能を検証。

| シート名 | カバーする機能 |
|---------|---------------|
| AutoWidthAll | autoWidth: "all" |
| AutoWidthBody | autoWidth: "body" |
| MergeSameValues | mergeSameValues: true |
| Border | border設定 |
| MultiHeader | マルチヘッダー（親カラム構造） |

**Borderシートのborder設定:**
```typescript
border: {
  outline: "medium",
  headerBody: "double",
  headerInner: "thin",
  bodyInner: "thin",
  borderColor: "#000000",
}
```

**MultiHeaderシートのカラム構造:**
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

---

### 06-cell-styles.xlsx

セル単位スタイルを検証。

| シート名 | カバーする機能 |
|---------|---------------|
| CellStyle | _style によるセル単位スタイル |

**CellStyleシートのデータ:**
```typescript
data: [
  { name: "通常", price: 100 },
  { name: "強調", price: 200, _style: { price: { bold: true, fill: "#FFFF00" } } },
  { name: "警告", price: -50, _style: { price: { color: "#FF0000" } } },
]
```

---

### 07-image.xlsx

画像ブロックを検証。

| シート名 | 内容 |
|---------|------|
| ImageTest | 画像挿入 + テキスト |

**備考:** 画像はREAD APIで検証困難なため、ファイル出力して目視確認がメイン。

---

## エラーハンドリングテスト

### 既存エラーの検証

| テストケース | 入力 | 期待するエラー |
|-------------|------|---------------|
| 同名シート作成 | `.sheet("A").sheet("A")` | `シート名 "A" は既に存在します` |
| 不正なプリセット名 | `preset: "invalid"` | `不明なプリセット名: invalid` |
| space(0) | `.space(0)` | `space() の引数は正の整数である必要があります` |
| space(-1) | `.space(-1)` | `space() の引数は正の整数である必要があります` |

### Excel制約エラーの検証

| テストケース | 入力 | 期待するエラー |
|-------------|------|---------------|
| シート名32文字 | `.sheet("a".repeat(32))` | `シート名は31文字以内である必要があります` |
| シート名に`:` | `.sheet("Sheet:1")` | `シート名に使用できない文字が含まれています` |
| シート名に`/` | `.sheet("Sheet/1")` | `シート名に使用できない文字が含まれています` |
| シート名に`\` | `.sheet("Sheet\\1")` | `シート名に使用できない文字が含まれています` |
| シート名に`?` | `.sheet("Sheet?1")` | `シート名に使用できない文字が含まれています` |
| シート名に`*` | `.sheet("Sheet*1")` | `シート名に使用できない文字が含まれています` |
| シート名に`[` | `.sheet("Sheet[1")` | `シート名に使用できない文字が含まれています` |
| シート名に`]` | `.sheet("Sheet]1")` | `シート名に使用できない文字が含まれています` |
| シート名が空白のみ | `.sheet("   ")` | `シート名を空白のみにすることはできません` |
| 行数超過 | 1,048,577行のdata | `データ行数がExcelの上限を超えています` |
| 列数超過 | 16,385列のcolumns | `列数がExcelの上限を超えています` |

---

## Buffer出力テスト

各テストで `toBuffer()` と `saveToFile()` の両方を使用。

```typescript
// パターン
const node = await xlkit().sheet("Test").table({...}).getNode();

// Buffer出力
const buffer = await node.toBuffer();
const workbook = await read(buffer);
// 検証...

// ファイル出力（目視確認用）
await node.saveToFile("tests/output/xxx.xlsx");
```

---

## スタイルカバレッジマトリクス

各スタイル項目がどのテストでカバーされるか。

| スタイル項目 | 01 | 02 | 03 | 04 | 05 | 06 | 07 |
|-------------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| bold | x | x | | | | x | |
| italic | | x | | | | | |
| underline | | x | | | | | |
| strike | | x | | | | | |
| fontFamily | | x | | | | | |
| fontSize | | x | | | | | |
| color | x | x | | | | x | |
| fill | x | x | | | | x | |
| align | | x | | | | | |
| format | | | x | | | | |
| decimalPlaces | | | x | | | | |
| thousandsSeparator | | | x | | | | |

---

## 修正対象ファイル

| ファイル | 変更内容 |
|---------|---------|
| `tests/integration.test.ts` | テストケース追加 |

---

## 検証方法

```bash
# 全テスト実行
pnpm test

# 型チェック
pnpm type-check

# コード品質チェック
pnpm lint && pnpm format
```

### 目視確認

`tests/output/` 配下のExcelファイルを開いて確認:
- スタイルが正しく適用されているか
- レイアウトが意図通りか
- 罫線が正しく描画されているか

---

## 決定の経緯

### 7ブック構成にした理由
- Excel起動回数を抑えつつ（起動に時間がかかるため）
- 差分管理しやすい粒度を維持
- カテゴリ別に分けて目視確認しやすく

### スタイルテストの方針
- 全パターンテストは必要だが、個別テストは不要
- 他スタイルと組み合わせて1回利用すればOK
- 複合テストで効率的にカバー
