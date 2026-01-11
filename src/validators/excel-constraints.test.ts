import { describe, expect, it } from "vitest";
import { EXCEL_LIMITS, validateDataSize, validateSheetName } from "./excel-constraints";

describe("validateSheetName", () => {
  it("正常なシート名を許可する", () => {
    expect(() => validateSheetName("Sheet1")).not.toThrow();
    expect(() => validateSheetName("売上データ")).not.toThrow();
    expect(() => validateSheetName("a".repeat(31))).not.toThrow();
  });

  it("32文字以上でエラー", () => {
    expect(() => validateSheetName("a".repeat(32))).toThrow("シート名は31文字以内である必要があります");
  });

  it("禁止文字でエラー", () => {
    for (const char of EXCEL_LIMITS.SHEET_NAME_INVALID_CHARS) {
      expect(() => validateSheetName(`Sheet${char}1`)).toThrow(`シート名に使用できない文字が含まれています: ${char}`);
    }
  });

  it("空白のみでエラー", () => {
    expect(() => validateSheetName("   ")).toThrow("シート名を空白のみにすることはできません");
  });
});

describe("validateDataSize", () => {
  it("正常なサイズを許可する", () => {
    expect(() => validateDataSize(1000, 100)).not.toThrow();
    expect(() => validateDataSize(EXCEL_LIMITS.MAX_ROWS, EXCEL_LIMITS.MAX_COLUMNS)).not.toThrow();
  });

  it("行数超過でエラー", () => {
    expect(() => validateDataSize(EXCEL_LIMITS.MAX_ROWS + 1, 1)).toThrow(
      "データ行数がExcelの上限(1,048,576行)を超えています",
    );
  });

  it("列数超過でエラー", () => {
    expect(() => validateDataSize(1, EXCEL_LIMITS.MAX_COLUMNS + 1)).toThrow(
      "列数がExcelの上限(16,384列)を超えています",
    );
  });
});
