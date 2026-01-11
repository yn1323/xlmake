import { describe, expect, it } from "vitest";
import { getCellAddress } from "./cell-writer";

describe("getCellAddress", () => {
  it("should convert row/col to A1 notation", () => {
    expect(getCellAddress(1, 1)).toBe("A1");
    expect(getCellAddress(1, 2)).toBe("B1");
    expect(getCellAddress(2, 1)).toBe("A2");
    expect(getCellAddress(10, 5)).toBe("E10");
  });

  it("should handle columns beyond Z", () => {
    expect(getCellAddress(1, 27)).toBe("AA1");
    expect(getCellAddress(1, 28)).toBe("AB1");
    expect(getCellAddress(1, 52)).toBe("AZ1");
    expect(getCellAddress(1, 53)).toBe("BA1");
  });
});

// writeCell, mergeCells等はExcelJSのモックが必要なため、結合テストで検証
