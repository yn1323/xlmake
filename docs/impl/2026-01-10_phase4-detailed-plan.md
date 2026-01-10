# Phase 4 詳細実装計画: スタイル処理

## 概要

スタイルのプリセット、カスケーディング（優先度に基づくマージ）、ExcelJSへの変換を実装する。ユーザーが簡単にスタイルを指定できる仕組みと、細かいカスタマイズの両方をサポートする。

## 参照ドキュメント

- [API実装計画](./2026-01-11_xlkit-api-implementation-plan.md)
- [Phase 1-2 詳細計画](./2026-01-10_phase1-2-detailed-plan.md)
- [Phase 3 詳細計画](./2026-01-10_phase3-detailed-plan.md)
- [API設計書](../spec/2026-01-11_xlkit-api-design.md)

## 前提条件

Phase 1-3が完了していること:
- 型定義とスキーマが完成
- コアビルダーが実装済み

---

## Phase 4: スタイル処理

### 目的

- プリセットスタイルで簡単にスタイリング
- カスケーディングで柔軟なスタイル指定
- ExcelJSのスタイル形式に変換

### 実装ファイル

```
src/styles/
├── presets.ts    # プリセットスタイル定義（basic, minimal, striped）
├── merger.ts     # スタイルのカスケーディング処理
└── converter.ts  # xlkit → ExcelJS スタイル変換
```

---

## 4.1 `src/styles/presets.ts`

### 目的

よく使うスタイルをプリセットとして提供し、ユーザーが簡単にスタイリングできるようにする。

### プリセット定義

**提供するプリセット**:
1. `basic` - 基本的なテーブルスタイル（罫線あり、ヘッダー背景色）
2. `minimal` - ミニマルなスタイル（罫線なし、ヘッダー太字のみ）
3. `striped` - ストライプ（罫線あり、奇数行に背景色）

### 実装内容

```typescript
import type { TableStyle, BorderStyle } from "../types/style";

/**
 * テーブルプリセットの型定義
 */
export type TablePresetConfig = {
  style?: TableStyle;
  border?: BorderStyle;
  stripedRowColor?: string;  // striped用の奇数行背景色
};

/**
 * プリセット定義
 */
export const TABLE_PRESETS: Record<string, TablePresetConfig> = {
  basic: {
    style: {
      header: {
        bold: true,
        fill: "#4472C4",       // Excelの標準青
        color: "#FFFFFF",      // 白文字
        align: "center",
      },
      body: {
        align: "left",
      },
    },
    border: {
      top: true,
      bottom: true,
      left: true,
      right: true,
      horizontal: true,
      vertical: true,
      style: "thin",
    },
  },

  minimal: {
    style: {
      header: {
        bold: true,
        align: "left",
      },
      body: {
        align: "left",
      },
    },
    border: {
      bottom: true,          // ヘッダーの下線のみ
      style: "thin",
    },
  },

  striped: {
    style: {
      header: {
        bold: true,
        fill: "#4472C4",
        color: "#FFFFFF",
        align: "center",
      },
      body: {
        align: "left",
      },
    },
    border: {
      top: true,
      bottom: true,
      left: true,
      right: true,
      horizontal: true,
      vertical: true,
      style: "thin",
    },
    stripedRowColor: "#F2F2F2",  // 奇数行の背景色（薄いグレー）
  },
};

/**
 * プリセット名からプリセット設定を取得
 */
export function getPreset(presetName: string): TablePresetConfig {
  const preset = TABLE_PRESETS[presetName];
  if (!preset) {
    throw new Error(`不明なプリセット名: ${presetName}`);
  }
  return preset;
}

/**
 * プリセットが存在するかチェック
 */
export function hasPreset(presetName: string): boolean {
  return presetName in TABLE_PRESETS;
}
```

### 実装上の注意

**色の選定**:
- `basic` / `striped` のヘッダー背景: `#4472C4`（Excel標準の青）
- `striped` の奇数行背景: `#F2F2F2`（薄いグレー）
- ヘッダー文字色: `#FFFFFF`（白）

**罫線の設定**:
- `basic` / `striped`: すべての罫線を表示
- `minimal`: ヘッダーの下線のみ

**ストライプの実装**:
- `stripedRowColor` プロパティを追加
- 実際のストライプ適用は Phase 5（Excel出力エンジン）で実装
- 奇数行（1行目、3行目、...）に背景色を適用

### 使用例

```typescript
// basic プリセット
xlkit()
  .sheet("売上")
  .table({
    preset: "basic",
    columns: [{ key: "name", label: "名前" }],
    data: [{ name: "太郎" }],
  });

// プリセット + カスタマイズ
xlkit()
  .sheet("売上")
  .table({
    preset: "basic",
    style: {
      header: { fill: "#FF0000" },  // ヘッダー背景を赤に上書き
    },
    columns: [{ key: "name", label: "名前" }],
    data: [{ name: "太郎" }],
  });
```

### テスト方針

```typescript
// src/styles/presets.test.ts
import { describe, expect, it } from "vitest";
import { getPreset, hasPreset, TABLE_PRESETS } from "./presets";

describe("TABLE_PRESETS", () => {
  it("should define basic preset", () => {
    expect(TABLE_PRESETS.basic).toBeDefined();
    expect(TABLE_PRESETS.basic.style?.header?.bold).toBe(true);
    expect(TABLE_PRESETS.basic.style?.header?.fill).toBe("#4472C4");
    expect(TABLE_PRESETS.basic.border?.top).toBe(true);
  });

  it("should define minimal preset", () => {
    expect(TABLE_PRESETS.minimal).toBeDefined();
    expect(TABLE_PRESETS.minimal.style?.header?.bold).toBe(true);
    expect(TABLE_PRESETS.minimal.border?.bottom).toBe(true);
    expect(TABLE_PRESETS.minimal.border?.top).toBeUndefined();
  });

  it("should define striped preset", () => {
    expect(TABLE_PRESETS.striped).toBeDefined();
    expect(TABLE_PRESETS.striped.stripedRowColor).toBe("#F2F2F2");
  });
});

describe("getPreset", () => {
  it("should return preset by name", () => {
    const preset = getPreset("basic");
    expect(preset).toEqual(TABLE_PRESETS.basic);
  });

  it("should throw error for unknown preset", () => {
    expect(() => getPreset("unknown")).toThrow("不明なプリセット名: unknown");
  });
});

describe("hasPreset", () => {
  it("should return true for existing preset", () => {
    expect(hasPreset("basic")).toBe(true);
    expect(hasPreset("minimal")).toBe(true);
    expect(hasPreset("striped")).toBe(true);
  });

  it("should return false for unknown preset", () => {
    expect(hasPreset("unknown")).toBe(false);
  });
});
```

---

## 4.2 `src/styles/merger.ts`

### 目的

複数のスタイルソースをカスケーディング優先度に従ってマージする。

### カスケーディング優先度

**優先度（低 → 高）**:
1. プリセット（`preset`）
2. 列単位スタイル（`columns[].style`）
3. 行種類（`style.header` / `style.body`）
4. 条件付きスタイル（`conditionalStyle()`）
5. セル単位（`data[]._style`） ← 最優先

### 実装内容

```typescript
import type { CellStyle } from "../types/style";

/**
 * スタイルをマージする（後のスタイルが優先）
 */
export function mergeStyles(...styles: (CellStyle | undefined)[]): CellStyle {
  const merged: CellStyle = {};

  for (const style of styles) {
    if (!style) continue;

    // すべてのプロパティをマージ
    Object.assign(merged, style);
  }

  return merged;
}

/**
 * スタイル配列をディープコピー
 */
export function cloneStyle(style: CellStyle | undefined): CellStyle | undefined {
  if (!style) return undefined;
  return { ...style };
}

/**
 * 空のスタイルかチェック
 */
export function isEmptyStyle(style: CellStyle | undefined): boolean {
  if (!style) return true;
  return Object.keys(style).length === 0;
}
```

### 実装上の注意

**マージのルール**:
- `Object.assign()` で後のスタイルが前のスタイルを上書き
- `undefined` は無視
- 部分的な上書きが可能（例: `{ bold: true }` だけ指定すると、他のプロパティは前のスタイルを維持）

**ディープコピー**:
- `CellStyle` はネストしていないフラットなオブジェクトなので、Spread演算子で十分
- `{ ...style }` でシャローコピー

**空スタイルのチェック**:
- `Object.keys(style).length === 0` で判定
- パフォーマンス最適化に使用（空スタイルは適用をスキップ）

### 使用例（Phase 5で使用）

```typescript
import { mergeStyles } from "../styles/merger";
import { getPreset } from "../styles/presets";

// カスケーディングの例
const preset = getPreset("basic");
const columnStyle = { align: "right" };
const headerStyle = preset.style?.header;
const conditionalStyle = { color: "#FF0000" };
const cellStyle = { bold: true };

// マージ（優先度順）
const finalStyle = mergeStyles(
  headerStyle,        // 1. プリセットのヘッダースタイル
  columnStyle,        // 2. 列単位スタイル
  conditionalStyle,   // 3. 条件付きスタイル
  cellStyle,          // 4. セル単位スタイル（最優先）
);

// 結果:
// {
//   bold: true,           // cellStyle から（最優先）
//   fill: "#4472C4",      // headerStyle から
//   color: "#FF0000",     // conditionalStyle から（headerStyleの#FFFFFFを上書き）
//   align: "right",       // columnStyle から（headerStyleのcenterを上書き）
// }
```

### テスト方針

```typescript
// src/styles/merger.test.ts
import { describe, expect, it } from "vitest";
import { mergeStyles, cloneStyle, isEmptyStyle } from "./merger";

describe("mergeStyles", () => {
  it("should merge multiple styles", () => {
    const style1 = { bold: true, fontSize: 12 };
    const style2 = { fontSize: 14, color: "#FF0000" };
    const result = mergeStyles(style1, style2);

    expect(result).toEqual({
      bold: true,
      fontSize: 14,        // style2が優先
      color: "#FF0000",
    });
  });

  it("should ignore undefined styles", () => {
    const style1 = { bold: true };
    const result = mergeStyles(undefined, style1, undefined);

    expect(result).toEqual({ bold: true });
  });

  it("should return empty object for all undefined", () => {
    const result = mergeStyles(undefined, undefined);
    expect(result).toEqual({});
  });

  it("should handle empty objects", () => {
    const style1 = { bold: true };
    const style2 = {};
    const result = mergeStyles(style1, style2);

    expect(result).toEqual({ bold: true });
  });

  it("should prioritize later styles", () => {
    const style1 = { bold: true, color: "#000000" };
    const style2 = { color: "#FF0000" };
    const style3 = { bold: false };
    const result = mergeStyles(style1, style2, style3);

    expect(result).toEqual({
      bold: false,         // style3が最優先
      color: "#FF0000",    // style2が優先
    });
  });
});

describe("cloneStyle", () => {
  it("should clone style object", () => {
    const original = { bold: true, fontSize: 12 };
    const cloned = cloneStyle(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);  // 参照が異なる
  });

  it("should return undefined for undefined input", () => {
    expect(cloneStyle(undefined)).toBeUndefined();
  });

  it("should not affect original when cloned is modified", () => {
    const original = { bold: true };
    const cloned = cloneStyle(original);

    if (cloned) {
      cloned.fontSize = 14;
    }

    expect(original).toEqual({ bold: true });
    expect(cloned).toEqual({ bold: true, fontSize: 14 });
  });
});

describe("isEmptyStyle", () => {
  it("should return true for undefined", () => {
    expect(isEmptyStyle(undefined)).toBe(true);
  });

  it("should return true for empty object", () => {
    expect(isEmptyStyle({})).toBe(true);
  });

  it("should return false for non-empty object", () => {
    expect(isEmptyStyle({ bold: true })).toBe(false);
  });
});
```

---

## 4.3 `src/styles/converter.ts`

### 目的

xlkitの `CellStyle` 型をExcelJSの `Style` 型に変換する。

### ExcelJSのスタイル形式

ExcelJSは以下のような形式でスタイルを扱う:

```typescript
// ExcelJSのスタイル形式
{
  font: {
    name: "Arial",
    size: 12,
    bold: true,
    italic: true,
    underline: true,
    strike: true,
    color: { argb: "FFFF0000" },  // ARGB形式
  },
  fill: {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF4472C4" },
  },
  alignment: {
    horizontal: "center",
    vertical: "middle",
  },
  numFmt: "#,##0",  // 数値フォーマット
}
```

### 実装内容

```typescript
import type { CellStyle } from "../types/style";
import type { Style, Font, Fill, Alignment } from "exceljs";

/**
 * xlkitのCellStyleをExcelJSのStyleに変換
 */
export function convertToExcelJSStyle(style: CellStyle | undefined): Partial<Style> {
  if (!style) return {};

  const excelStyle: Partial<Style> = {};

  // フォント
  if (hasFont(style)) {
    excelStyle.font = convertFont(style);
  }

  // 塗りつぶし
  if (style.fill) {
    excelStyle.fill = convertFill(style.fill);
  }

  // 配置
  if (style.align) {
    excelStyle.alignment = convertAlignment(style.align);
  }

  // 数値フォーマット
  if (style.format) {
    excelStyle.numFmt = convertNumFmt(style);
  }

  return excelStyle;
}

/**
 * フォント関連のプロパティがあるかチェック
 */
function hasFont(style: CellStyle): boolean {
  return !!(
    style.fontFamily ||
    style.fontSize ||
    style.bold ||
    style.italic ||
    style.underline ||
    style.strike ||
    style.color
  );
}

/**
 * フォントを変換
 */
function convertFont(style: CellStyle): Partial<Font> {
  const font: Partial<Font> = {};

  if (style.fontFamily) font.name = style.fontFamily;
  if (style.fontSize) font.size = style.fontSize;
  if (style.bold) font.bold = true;
  if (style.italic) font.italic = true;
  if (style.underline) font.underline = true;
  if (style.strike) font.strike = true;

  if (style.color) {
    // #RRGGBB → ARGB形式に変換
    font.color = { argb: hexToArgb(style.color) };
  }

  return font;
}

/**
 * 塗りつぶしを変換
 */
function convertFill(hexColor: string): Fill {
  return {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: hexToArgb(hexColor) },
  };
}

/**
 * 配置を変換
 */
function convertAlignment(align: "left" | "center" | "right"): Partial<Alignment> {
  return {
    horizontal: align,
    vertical: "middle",  // 垂直方向は常に中央
  };
}

/**
 * 数値フォーマットを変換
 */
function convertNumFmt(style: CellStyle): string {
  if (style.format === "date") {
    return "yyyy-mm-dd";  // 日付フォーマット
  }

  if (style.format === "number") {
    const { decimalPlaces = 0, thousandsSeparator = false } = style;

    // 桁区切りカンマ
    const base = thousandsSeparator ? "#,##0" : "#,##0".replace(",", "");

    // 小数点以下
    if (decimalPlaces > 0) {
      const decimals = "0".repeat(decimalPlaces);
      return `${base}.${decimals}`;
    }

    return base;
  }

  // "string" or 未指定
  return "@";  // テキスト形式
}

/**
 * #RRGGBB → AARRGGBB (ARGB形式) に変換
 * 不透明度は常に100% (FF)
 */
function hexToArgb(hex: string): string {
  // "#RRGGBB" → "FFRRGGBB"
  return `FF${hex.slice(1).toUpperCase()}`;
}

/**
 * ARGB → #RRGGBB に変換（読み取りAPI用）
 */
export function argbToHex(argb: string): string {
  // "FFRRGGBB" → "#RRGGBB"
  return `#${argb.slice(2).toUpperCase()}`;
}
```

### 実装上の注意

**色の変換**:
- xlkit: `#RRGGBB` 形式（6桁）
- ExcelJS: `AARRGGBB` 形式（8桁、先頭2桁は不透明度）
- 不透明度は常に `FF`（100%）

**数値フォーマット**:
- `format: "number"` の場合、`decimalPlaces` と `thousandsSeparator` を組み合わせる
- 例: `decimalPlaces: 2, thousandsSeparator: true` → `"#,##0.00"`
- 例: `decimalPlaces: 0, thousandsSeparator: false` → `"#0"`

**配置**:
- 水平方向: xlkitの `align` をそのまま使用
- 垂直方向: 常に `middle`（中央）に固定

**フォント**:
- `fontFamily` のデフォルト値は指定しない（ExcelJSのデフォルトに任せる）
- `fontSize` のデフォルト値も同様

### テスト方針

```typescript
// src/styles/converter.test.ts
import { describe, expect, it } from "vitest";
import { convertToExcelJSStyle, argbToHex } from "./converter";

describe("convertToExcelJSStyle", () => {
  it("should convert font properties", () => {
    const style = {
      fontFamily: "Arial",
      fontSize: 12,
      bold: true,
      italic: true,
      color: "#FF0000",
    };

    const result = convertToExcelJSStyle(style);
    expect(result.font).toEqual({
      name: "Arial",
      size: 12,
      bold: true,
      italic: true,
      color: { argb: "FFFF0000" },
    });
  });

  it("should convert fill color", () => {
    const style = { fill: "#4472C4" };
    const result = convertToExcelJSStyle(style);

    expect(result.fill).toEqual({
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF4472C4" },
    });
  });

  it("should convert alignment", () => {
    const style = { align: "center" as const };
    const result = convertToExcelJSStyle(style);

    expect(result.alignment).toEqual({
      horizontal: "center",
      vertical: "middle",
    });
  });

  it("should convert number format with decimals", () => {
    const style = {
      format: "number" as const,
      decimalPlaces: 2,
      thousandsSeparator: true,
    };

    const result = convertToExcelJSStyle(style);
    expect(result.numFmt).toBe("#,##0.00");
  });

  it("should convert number format without decimals", () => {
    const style = {
      format: "number" as const,
      decimalPlaces: 0,
      thousandsSeparator: false,
    };

    const result = convertToExcelJSStyle(style);
    expect(result.numFmt).toBe("#0");
  });

  it("should convert date format", () => {
    const style = { format: "date" as const };
    const result = convertToExcelJSStyle(style);

    expect(result.numFmt).toBe("yyyy-mm-dd");
  });

  it("should convert string format", () => {
    const style = { format: "string" as const };
    const result = convertToExcelJSStyle(style);

    expect(result.numFmt).toBe("@");
  });

  it("should return empty object for undefined style", () => {
    const result = convertToExcelJSStyle(undefined);
    expect(result).toEqual({});
  });

  it("should combine multiple properties", () => {
    const style = {
      bold: true,
      fill: "#F2F2F2",
      align: "right" as const,
      format: "number" as const,
      decimalPlaces: 1,
    };

    const result = convertToExcelJSStyle(style);
    expect(result.font?.bold).toBe(true);
    expect(result.fill?.type).toBe("pattern");
    expect(result.alignment?.horizontal).toBe("right");
    expect(result.numFmt).toBe("#,##0.0");
  });
});

describe("argbToHex", () => {
  it("should convert ARGB to hex", () => {
    expect(argbToHex("FFFF0000")).toBe("#FF0000");
    expect(argbToHex("FF4472C4")).toBe("#4472C4");
    expect(argbToHex("FFF2F2F2")).toBe("#F2F2F2");
  });

  it("should handle lowercase input", () => {
    expect(argbToHex("ffff0000")).toBe("#FF0000");
  });
});
```

---

## Phase 4 完了条件

### 実装チェックリスト

- [ ] `src/styles/presets.ts` を実装
  - [ ] `TABLE_PRESETS` 定義（basic, minimal, striped）
  - [ ] `getPreset()` 関数
  - [ ] `hasPreset()` 関数
- [ ] `src/styles/presets.test.ts` を実装
  - [ ] プリセット定義のテスト
  - [ ] `getPreset()` のテスト
  - [ ] `hasPreset()` のテスト
- [ ] `src/styles/merger.ts` を実装
  - [ ] `mergeStyles()` 関数
  - [ ] `cloneStyle()` 関数
  - [ ] `isEmptyStyle()` 関数
- [ ] `src/styles/merger.test.ts` を実装
  - [ ] マージのテスト（優先度確認）
  - [ ] クローンのテスト
  - [ ] 空スタイルチェックのテスト
- [ ] `src/styles/converter.ts` を実装
  - [ ] `convertToExcelJSStyle()` 関数
  - [ ] `argbToHex()` 関数（読み取りAPI用）
  - [ ] 各変換関数（フォント、塗りつぶし、配置、数値フォーマット）
- [ ] `src/styles/converter.test.ts` を実装
  - [ ] 各スタイルプロパティの変換テスト
  - [ ] 複合スタイルのテスト
  - [ ] ARGB/HEX変換のテスト

### 検証コマンド

```bash
pnpm type-check  # 型エラーがないことを確認
pnpm lint        # リントエラーがないことを確認
pnpm test        # すべてのテストが通ることを確認
```

### 完了後の状態

```
src/
├── core/
│   └── （Phase 3で作成済み）
├── types/
│   └── （Phase 1で作成済み）
├── schemas/
│   └── （Phase 2で作成済み）
└── styles/
    ├── presets.ts
    ├── presets.test.ts
    ├── merger.ts
    ├── merger.test.ts
    ├── converter.ts
    └── converter.test.ts
```

---

## 次のステップ

Phase 4 完了後、Phase 5（Excel出力エンジン）に進む:

- `src/engine/writer.ts` - ExcelJS WorkbookWriter のラッパー
- `src/engine/sheet-writer.ts` - シート書き込みロジック
- `src/engine/cell-writer.ts` - セル・マージ処理
- `src/engine/width-calculator.ts` - 列幅自動計算
- `src/output/browser.ts` - ブラウザ向け出力（ダウンロード）
- `src/output/node.ts` - Node.js向け出力（ファイル保存、Buffer）

Phase 5では、ここで実装したスタイル処理を使用して、実際にExcelファイルを生成する。
