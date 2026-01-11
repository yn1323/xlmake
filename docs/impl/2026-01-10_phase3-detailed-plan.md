# Phase 3 詳細実装計画: コアビルダー

## 概要

メソッドチェーン型APIの骨格を実装する。`xlkit()` ファクトリ関数と、各種メソッド（`.sheet()`, `.table()`, `.text()`, `.image()`, `.space()`）を提供し、宣言的なExcel生成を可能にする。

## 参照ドキュメント

- [API実装計画](./2026-01-11_xlkit-api-implementation-plan.md)
- [Phase 1-2 詳細計画](./2026-01-10_phase1-2-detailed-plan.md)
- [API設計書](../spec/2026-01-11_xlkit-api-design.md)

## 前提条件

Phase 1-2が完了していること:
- `zod` がインストール済み
- `src/types/` 配下の型定義が完成
- `src/schemas/` 配下のスキーマが完成

---

## Phase 3: コアビルダー

### 目的

メソッドチェーンの骨格を実装し、ユーザーが直感的にExcelを構築できるAPIを提供する。

### 実装ファイル

```
src/core/
├── workbook-builder.ts   # WorkbookBuilder クラス + xlkit() ファクトリ
└── sheet-builder.ts      # SheetBuilder クラス

src/index.ts              # エントリーポイント更新
```

---

## 3.1 `src/core/workbook-builder.ts`

### 目的

- `xlkit()` ファクトリ関数を提供
- ワークブック全体の状態管理
- `.sheet()` メソッドでシート追加
- `.browser` / `.node` プロパティで出力オブジェクトを返す

### 実装内容

```typescript
import type { WorkbookState } from "../types/workbook";
import { SheetBuilder } from "./sheet-builder";

export class WorkbookBuilder {
  private state: WorkbookState;

  constructor() {
    this.state = {
      sheets: [],
    };
  }

  /**
   * シートを追加する
   * @param name シート名（省略時は "Sheet1", "Sheet2", ...）
   */
  sheet(name?: string): SheetBuilder {
    // シート名が省略された場合、自動生成
    const sheetName = name ?? `Sheet${this.state.sheets.length + 1}`;

    // 既存のシート名と重複チェック
    if (this.state.sheets.some((s) => s.name === sheetName)) {
      throw new Error(`シート名 "${sheetName}" は既に存在します`);
    }

    // 新しいシートを追加
    const sheetState = { name: sheetName, blocks: [] };
    this.state.sheets.push(sheetState);

    // SheetBuilder を返す（このワークブックの状態を共有）
    return new SheetBuilder(this, sheetState);
  }

  /**
   * ワークブックの状態を取得（内部用）
   */
  getState(): WorkbookState {
    return this.state;
  }

  /**
   * ブラウザ向け出力オブジェクト
   * Phase 5 で実装
   */
  get browser() {
    // TODO: Phase 5 で実装
    throw new Error("Not implemented yet");
  }

  /**
   * Node.js向け出力オブジェクト
   * Phase 5 で実装
   */
  get node() {
    // TODO: Phase 5 で実装
    throw new Error("Not implemented yet");
  }
}

/**
 * xlkit ファクトリ関数
 */
export function xlkit(): WorkbookBuilder {
  return new WorkbookBuilder();
}
```

### 実装上の注意

**シート名の自動生成**:
- 省略時は `Sheet1`, `Sheet2`, ... と連番
- 既存のシート名と重複する場合はエラー

**状態の共有**:
- `WorkbookBuilder` と `SheetBuilder` は同じ `state` を共有
- `SheetBuilder` で `.table()` 等を呼ぶと、`state.sheets[n].blocks` に追加される

**出力メソッド**:
- `.browser` / `.node` は Phase 5 で実装
- Phase 3 では `throw new Error("Not implemented yet")` で仮実装

### テスト方針

```typescript
// src/core/workbook-builder.test.ts
import { describe, expect, it } from "vitest";
import { xlkit } from "./workbook-builder";

describe("WorkbookBuilder", () => {
  it("should create workbook instance", () => {
    const wb = xlkit();
    expect(wb).toBeDefined();
    expect(wb.getState().sheets).toEqual([]);
  });

  it("should add sheet with default name", () => {
    const wb = xlkit();
    wb.sheet();
    expect(wb.getState().sheets).toHaveLength(1);
    expect(wb.getState().sheets[0].name).toBe("Sheet1");
  });

  it("should add sheet with custom name", () => {
    const wb = xlkit();
    wb.sheet("売上データ");
    expect(wb.getState().sheets[0].name).toBe("売上データ");
  });

  it("should auto-increment sheet names", () => {
    const wb = xlkit();
    wb.sheet();
    wb.sheet();
    expect(wb.getState().sheets[0].name).toBe("Sheet1");
    expect(wb.getState().sheets[1].name).toBe("Sheet2");
  });

  it("should throw error for duplicate sheet names", () => {
    const wb = xlkit();
    wb.sheet("売上");
    expect(() => wb.sheet("売上")).toThrow('シート名 "売上" は既に存在します');
  });

  it("should return SheetBuilder from sheet()", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    expect(sb).toBeDefined();
    expect(sb.constructor.name).toBe("SheetBuilder");
  });
});
```

---

## 3.2 `src/core/sheet-builder.ts`

### 目的

- シート単位のブロック追加メソッド（`.table()`, `.text()`, `.image()`, `.space()`）
- メソッドチェーンで連続して呼び出し可能
- バリデーション実施（Zodスキーマ使用）

### 実装内容

```typescript
import type { WorkbookBuilder } from "./workbook-builder";
import type { SheetState, Block } from "../types/workbook";
import type { TableOptions } from "../types/table";
import type { TextInput } from "../types/text";
import type { ImageOptions } from "../types/image";
import { tableOptionsSchema } from "../schemas/table";
import { textInputSchema } from "../schemas/text";
import { imageOptionsSchema } from "../schemas/image";

export class SheetBuilder {
  private workbook: WorkbookBuilder;
  private sheetState: SheetState;

  constructor(workbook: WorkbookBuilder, sheetState: SheetState) {
    this.workbook = workbook;
    this.sheetState = sheetState;
  }

  /**
   * テーブルを追加
   */
  table<T>(options: TableOptions<T>): this {
    // バリデーション
    const result = tableOptionsSchema.safeParse(options);
    if (!result.success) {
      throw new Error(`Invalid table options: ${result.error.message}`);
    }

    // ブロックを追加
    const block: Block = { type: "table", options };
    this.sheetState.blocks.push(block);

    return this;
  }

  /**
   * テキストを追加
   */
  text(input: TextInput): this {
    // バリデーション
    const result = textInputSchema.safeParse(input);
    if (!result.success) {
      throw new Error(`Invalid text input: ${result.error.message}`);
    }

    // ブロックを追加
    const block: Block = { type: "text", input };
    this.sheetState.blocks.push(block);

    return this;
  }

  /**
   * 画像を追加
   */
  image(options: ImageOptions): this {
    // バリデーション
    const result = imageOptionsSchema.safeParse(options);
    if (!result.success) {
      throw new Error(`Invalid image options: ${result.error.message}`);
    }

    // ブロックを追加
    const block: Block = { type: "image", options };
    this.sheetState.blocks.push(block);

    return this;
  }

  /**
   * 空行を追加
   */
  space(lines = 1): this {
    // バリデーション
    if (lines <= 0) {
      throw new Error("space() の引数は正の整数である必要があります");
    }

    // ブロックを追加
    const block: Block = { type: "space", lines };
    this.sheetState.blocks.push(block);

    return this;
  }

  /**
   * 新しいシートを追加（WorkbookBuilderに委譲）
   */
  sheet(name?: string): SheetBuilder {
    return this.workbook.sheet(name);
  }

  /**
   * ブラウザ向け出力オブジェクト（WorkbookBuilderに委譲）
   */
  get browser() {
    return this.workbook.browser;
  }

  /**
   * Node.js向け出力オブジェクト（WorkbookBuilderに委譲）
   */
  get node() {
    return this.workbook.node;
  }
}
```

### 実装上の注意

**メソッドチェーン**:
- すべてのメソッドが `this` を返す
- これにより `.table().text().space()` のように連続して呼び出し可能

**バリデーション**:
- Zodスキーマの `.safeParse()` を使用
- エラー時はメッセージを含めて `throw new Error()`

**ワークブックへの委譲**:
- `.sheet()`, `.browser`, `.node` は `WorkbookBuilder` に委譲
- これにより、どのビルダーからでも出力やシート追加が可能

**空行の扱い**:
- `.space(n)` で n 行の空行を追加
- デフォルトは1行
- 0以下はエラー

### 使用例

```typescript
import { xlkit } from "xlkit";

// メソッドチェーンで構築
await xlkit()
  .sheet("売上データ")
  .text("月次売上レポート")
  .space(1)
  .table({
    columns: [
      { key: "name", label: "商品名" },
      { key: "price", label: "価格" },
    ],
    data: [
      { name: "PC", price: 100000 },
      { name: "モニタ", price: 30000 },
    ],
  })
  .space(2)
  .text("以上")
  .sheet("在庫データ")
  .table({
    columns: [{ key: "item", label: "商品" }],
    data: [{ item: "キーボード" }],
  })
  .node.saveToFile("report.xlsx");
```

### テスト方針

```typescript
// src/core/sheet-builder.test.ts
import { describe, expect, it } from "vitest";
import { xlkit } from "./workbook-builder";

describe("SheetBuilder", () => {
  it("should add text block", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    sb.text("タイトル");

    const state = wb.getState();
    expect(state.sheets[0].blocks).toHaveLength(1);
    expect(state.sheets[0].blocks[0]).toEqual({
      type: "text",
      input: "タイトル",
    });
  });

  it("should add table block", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    sb.table({
      columns: [{ key: "name", label: "名前" }],
      data: [{ name: "太郎" }],
    });

    const state = wb.getState();
    expect(state.sheets[0].blocks).toHaveLength(1);
    expect(state.sheets[0].blocks[0].type).toBe("table");
  });

  it("should add space block", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    sb.space(3);

    const state = wb.getState();
    expect(state.sheets[0].blocks).toHaveLength(1);
    expect(state.sheets[0].blocks[0]).toEqual({
      type: "space",
      lines: 3,
    });
  });

  it("should add image block", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    sb.image({
      source: "https://example.com/logo.png",
      width: 200,
    });

    const state = wb.getState();
    expect(state.sheets[0].blocks).toHaveLength(1);
    expect(state.sheets[0].blocks[0].type).toBe("image");
  });

  it("should chain methods", () => {
    const wb = xlkit();
    wb.sheet()
      .text("タイトル")
      .space(1)
      .table({
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
      });

    const state = wb.getState();
    expect(state.sheets[0].blocks).toHaveLength(3);
    expect(state.sheets[0].blocks[0].type).toBe("text");
    expect(state.sheets[0].blocks[1].type).toBe("space");
    expect(state.sheets[0].blocks[2].type).toBe("table");
  });

  it("should throw error for invalid space argument", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    expect(() => sb.space(0)).toThrow("正の整数である必要があります");
    expect(() => sb.space(-1)).toThrow("正の整数である必要があります");
  });

  it("should throw error for invalid table options", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    expect(() =>
      sb.table({
        columns: [],  // 空配列はNG - ランタイムでバリデーションエラー
        data: [],
      })
    ).toThrow("Invalid table options");
  });

  it("should delegate sheet() to workbook", () => {
    const wb = xlkit();
    const sb1 = wb.sheet("Sheet1");
    const sb2 = sb1.sheet("Sheet2");

    const state = wb.getState();
    expect(state.sheets).toHaveLength(2);
    expect(state.sheets[0].name).toBe("Sheet1");
    expect(state.sheets[1].name).toBe("Sheet2");
  });
});
```

---

## 3.3 `src/index.ts` の更新

### 目的

エントリーポイントを更新して、`xlkit()` 関数をエクスポートする。

### 実装内容

```typescript
// xlkit - Declarative Excel generation library

export { xlkit } from "./core/workbook-builder";

// 型定義をエクスポート（ユーザーが使用できるように）
export type { CellStyle, BorderStyle, TableStyle, AlignType, FormatType } from "./types/style";
export type { Column, LeafColumn, ParentColumn } from "./types/column";
export type { TableOptions, TablePreset, AutoWidthOption } from "./types/table";
export type { TextInput, StyledCell } from "./types/text";
export type { ImageOptions, ImageSource } from "./types/image";
export type { Block, BlockType, SheetState, WorkbookState } from "./types/workbook";
```

### 実装上の注意

**エクスポート戦略**:
- 関数: `xlkit` のみ（ファクトリ関数）
- 型: ユーザーが使用する可能性のある型をすべてエクスポート
- クラス: `WorkbookBuilder`, `SheetBuilder` は内部実装なのでエクスポートしない

**バレルエクスポート禁止**:
- CLAUDE.md の制約により、バレルエクスポート（`export * from ...`）は使用しない
- すべて明示的に列挙

### テスト方針

```typescript
// src/index.test.ts（更新）
import { describe, expect, it } from "vitest";
import { xlkit } from "./index";

describe("xlkit", () => {
  it("should export xlkit function", () => {
    expect(xlkit).toBeDefined();
    expect(typeof xlkit).toBe("function");
  });

  it("should create workbook instance", () => {
    const wb = xlkit();
    expect(wb).toBeDefined();
  });

  it("should support method chaining", () => {
    const wb = xlkit()
      .sheet("Test")
      .text("Hello")
      .space(1);
    expect(wb).toBeDefined();
  });
});
```

---

## Phase 3 完了条件

### 実装チェックリスト

- [ ] `src/core/workbook-builder.ts` を実装
  - [ ] `WorkbookBuilder` クラス
  - [ ] `xlkit()` ファクトリ関数
  - [ ] `.sheet()` メソッド
  - [ ] シート名の自動生成・重複チェック
  - [ ] `.browser` / `.node` プロパティ（仮実装）
- [ ] `src/core/workbook-builder.test.ts` を実装
  - [ ] 全7件のテストケース
- [ ] `src/core/sheet-builder.ts` を実装
  - [ ] `SheetBuilder` クラス
  - [ ] `.table()` メソッド（バリデーション含む）
  - [ ] `.text()` メソッド（バリデーション含む）
  - [ ] `.image()` メソッド（バリデーション含む）
  - [ ] `.space()` メソッド（バリデーション含む）
  - [ ] WorkbookBuilderへの委譲（`.sheet()`, `.browser`, `.node`）
- [ ] `src/core/sheet-builder.test.ts` を実装
  - [ ] 全9件のテストケース
- [ ] `src/index.ts` を更新
  - [ ] `xlkit` 関数のエクスポート
  - [ ] 型定義のエクスポート
- [ ] `src/index.test.ts` を更新
  - [ ] 基本的な動作確認テスト

### 検証コマンド

```bash
pnpm type-check  # 型エラーがないことを確認
pnpm lint        # リントエラーがないことを確認
pnpm test        # すべてのテストが通ることを確認
```

### 完了後の状態

```
src/
├── index.ts
├── index.test.ts
├── types/
│   └── （Phase 1で作成済み）
├── schemas/
│   └── （Phase 2で作成済み）
└── core/
    ├── workbook-builder.ts
    ├── workbook-builder.test.ts
    ├── sheet-builder.ts
    └── sheet-builder.test.ts
```

---

## 次のステップ

Phase 3 完了後、Phase 4（スタイル処理）に進む:

- `src/styles/presets.ts` - プリセットスタイル定義
- `src/styles/merger.ts` - スタイルのカスケーディング処理
- `src/styles/converter.ts` - xlkit → ExcelJS スタイル変換

Phase 4では、ここで定義したブロック構造を元に、スタイルを適用する仕組みを実装する。
