import { describe, expect, it } from "vitest";
import { argbToHex, convertToExcelJSStyle } from "./converter";

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
      thousandsSeparator: true,
    };

    const result = convertToExcelJSStyle(style);
    expect(result.font?.bold).toBe(true);
    expect(result.fill?.type).toBe("pattern");
    expect(result.alignment?.horizontal).toBe("right");
    expect(result.numFmt).toBe("#,##0.0");
  });

  it("should handle underline and strike", () => {
    const style = {
      underline: true,
      strike: true,
    };

    const result = convertToExcelJSStyle(style);
    expect(result.font?.underline).toBe(true);
    expect(result.font?.strike).toBe(true);
  });

  it("should handle left alignment", () => {
    const style = { align: "left" as const };
    const result = convertToExcelJSStyle(style);

    expect(result.alignment).toEqual({
      horizontal: "left",
      vertical: "middle",
    });
  });

  it("should handle right alignment", () => {
    const style = { align: "right" as const };
    const result = convertToExcelJSStyle(style);

    expect(result.alignment).toEqual({
      horizontal: "right",
      vertical: "middle",
    });
  });

  it("should handle number format with thousandsSeparator only", () => {
    const style = {
      format: "number" as const,
      thousandsSeparator: true,
    };

    const result = convertToExcelJSStyle(style);
    expect(result.numFmt).toBe("#,##0");
  });

  it("should handle number format without thousandsSeparator", () => {
    const style = {
      format: "number" as const,
      decimalPlaces: 3,
      thousandsSeparator: false,
    };

    const result = convertToExcelJSStyle(style);
    expect(result.numFmt).toBe("#0.000");
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
