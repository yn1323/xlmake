# Excel制約バリデーター実装計画

## 概要

Excelの制約（シート名、データサイズ等）をチェックするバリデーターを実装する。

### 目的
- Excel制約違反を事前にチェックしてthrow
- ExcelJS側でエラーになる前にキャッチ
- 開発者に早期にエラーを通知

---

## 新規ファイル

`src/validators/excel-constraints.ts`

---

## 実装する制約チェック

### シート名の制約

| 制約 | 内容 | エラーメッセージ |
|------|------|-----------------|
| 文字数上限 | 31文字が上限 | `シート名は31文字以内である必要があります` |
| 禁止文字 | `: \ / ? * [ ]` | `シート名に使用できない文字が含まれています: {char}` |
| 空白のみ | 空白のみはNG | `シート名を空白のみにすることはできません` |

### データサイズの制約

| 制約 | 内容 | エラーメッセージ |
|------|------|-----------------|
| 行数上限 | 1,048,576行 | `データ行数がExcelの上限(1,048,576行)を超えています` |
| 列数上限 | 16,384列 | `列数がExcelの上限(16,384列)を超えています` |

---

## 実装詳細

### バリデーター関数

```typescript
// src/validators/excel-constraints.ts

// Excel制約の定数
export const EXCEL_LIMITS = {
  SHEET_NAME_MAX_LENGTH: 31,
  SHEET_NAME_INVALID_CHARS: [':', '\\', '/', '?', '*', '[', ']'],
  MAX_ROWS: 1_048_576,
  MAX_COLUMNS: 16_384,
} as const;

/**
 * シート名のバリデーション
 */
export function validateSheetName(name: string): void {
  // 文字数チェック
  if (name.length > EXCEL_LIMITS.SHEET_NAME_MAX_LENGTH) {
    throw new Error(`シート名は31文字以内である必要があります`);
  }

  // 禁止文字チェック
  for (const char of EXCEL_LIMITS.SHEET_NAME_INVALID_CHARS) {
    if (name.includes(char)) {
      throw new Error(`シート名に使用できない文字が含まれています: ${char}`);
    }
  }

  // 空白のみチェック
  if (name.trim().length === 0) {
    throw new Error(`シート名を空白のみにすることはできません`);
  }
}

/**
 * データサイズのバリデーション
 */
export function validateDataSize(rowCount: number, columnCount: number): void {
  if (rowCount > EXCEL_LIMITS.MAX_ROWS) {
    throw new Error(`データ行数がExcelの上限(1,048,576行)を超えています`);
  }

  if (columnCount > EXCEL_LIMITS.MAX_COLUMNS) {
    throw new Error(`列数がExcelの上限(16,384列)を超えています`);
  }
}
```

---

## 呼び出し箇所

### workbook-builder.ts

```typescript
// src/core/workbook-builder.ts
import { validateSheetName } from "../validators/excel-constraints";

sheet(name?: string): SheetBuilder {
  const sheetName = name ?? `Sheet${this.state.sheets.length + 1}`;

  // シート名バリデーション追加
  validateSheetName(sheetName);

  // 既存の重複チェック
  if (this.state.sheets.some((s) => s.name === sheetName)) {
    throw new Error(`シート名 "${sheetName}" は既に存在します`);
  }
  // ...
}
```

### sheet-builder.ts

```typescript
// src/core/sheet-builder.ts
import { validateDataSize } from "../validators/excel-constraints";
import { flattenColumns } from "../utils/column";

table<T extends Record<string, unknown>>(options: TableOptions<T>): SheetBuilder {
  // データサイズバリデーション追加
  const leafColumns = flattenColumns(options.columns);
  validateDataSize(options.data.length, leafColumns.length);
  // ...
}
```

---

## ユニットテスト

`src/validators/excel-constraints.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import {
  validateSheetName,
  validateDataSize,
  EXCEL_LIMITS,
} from "./excel-constraints";

describe("validateSheetName", () => {
  it("正常なシート名を許可する", () => {
    expect(() => validateSheetName("Sheet1")).not.toThrow();
    expect(() => validateSheetName("売上データ")).not.toThrow();
    expect(() => validateSheetName("a".repeat(31))).not.toThrow();
  });

  it("32文字以上でエラー", () => {
    expect(() => validateSheetName("a".repeat(32))).toThrow(
      "シート名は31文字以内である必要があります"
    );
  });

  it("禁止文字でエラー", () => {
    for (const char of EXCEL_LIMITS.SHEET_NAME_INVALID_CHARS) {
      expect(() => validateSheetName(`Sheet${char}1`)).toThrow(
        `シート名に使用できない文字が含まれています: ${char}`
      );
    }
  });

  it("空白のみでエラー", () => {
    expect(() => validateSheetName("   ")).toThrow(
      "シート名を空白のみにすることはできません"
    );
  });
});

describe("validateDataSize", () => {
  it("正常なサイズを許可する", () => {
    expect(() => validateDataSize(1000, 100)).not.toThrow();
    expect(() => validateDataSize(EXCEL_LIMITS.MAX_ROWS, EXCEL_LIMITS.MAX_COLUMNS)).not.toThrow();
  });

  it("行数超過でエラー", () => {
    expect(() => validateDataSize(EXCEL_LIMITS.MAX_ROWS + 1, 1)).toThrow(
      "データ行数がExcelの上限(1,048,576行)を超えています"
    );
  });

  it("列数超過でエラー", () => {
    expect(() => validateDataSize(1, EXCEL_LIMITS.MAX_COLUMNS + 1)).toThrow(
      "列数がExcelの上限(16,384列)を超えています"
    );
  });
});
```

---

## 修正対象ファイル一覧

| ファイル | 変更内容 |
|---------|---------|
| `src/validators/excel-constraints.ts` | 新規作成 |
| `src/validators/excel-constraints.test.ts` | 新規作成（ユニットテスト） |
| `src/core/workbook-builder.ts` | シート名バリデーション追加 |
| `src/core/sheet-builder.ts` | データサイズバリデーション追加 |

---

## 検証方法

```bash
# ユニットテスト実行
pnpm test src/validators/excel-constraints.test.ts

# 型チェック
pnpm type-check

# コード品質チェック
pnpm lint && pnpm format
```
