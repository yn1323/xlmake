import { describe, expect, it } from "vitest";
import { EXCEL_LIMITS, validateDataSize, validateSheetName } from "./excel-constraints";

describe("validateSheetName", () => {
  it("正常なシート名を許可する", () => {
    expect(() => validateSheetName("Sheet1")).not.toThrow();
    expect(() => validateSheetName("売上データ")).not.toThrow();
    expect(() => validateSheetName("a".repeat(31))).not.toThrow();
  });

  it("32文字以上でエラー", () => {
    expect(() => validateSheetName("a".repeat(32))).toThrow("Sheet name must be 31 characters or less");
  });

  it("禁止文字でエラー", () => {
    for (const char of EXCEL_LIMITS.SHEET_NAME_INVALID_CHARS) {
      expect(() => validateSheetName(`Sheet${char}1`)).toThrow(`Sheet name contains invalid character: ${char}`);
    }
  });

  it("空白のみでエラー", () => {
    expect(() => validateSheetName("   ")).toThrow("Sheet name cannot be only whitespace");
  });
});

describe("validateDataSize", () => {
  it("正常なサイズを許可する", () => {
    expect(() => validateDataSize(1000, 100)).not.toThrow();
    expect(() => validateDataSize(EXCEL_LIMITS.MAX_ROWS, EXCEL_LIMITS.MAX_COLUMNS)).not.toThrow();
  });

  it("行数超過でエラー", () => {
    expect(() => validateDataSize(EXCEL_LIMITS.MAX_ROWS + 1, 1)).toThrow(
      "Row count exceeds Excel limit (1,048,576 rows)",
    );
  });

  it("列数超過でエラー", () => {
    expect(() => validateDataSize(1, EXCEL_LIMITS.MAX_COLUMNS + 1)).toThrow(
      "Column count exceeds Excel limit (16,384 columns)",
    );
  });
});
