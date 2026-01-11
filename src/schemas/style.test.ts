import { describe, expect, it } from "vitest";
import { borderStyleSchema, cellStyleSchema, tableStyleSchema } from "./style";

describe("cellStyleSchema", () => {
  describe("正常系", () => {
    it("should validate valid cell style", () => {
      const style = { bold: true, fontSize: 12, color: "#FF0000" };
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(true);
    });

    it("should validate empty object", () => {
      const style = {};
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(true);
    });

    it("should validate all properties", () => {
      const style = {
        fontFamily: "Arial",
        fontSize: 14,
        bold: true,
        italic: true,
        underline: true,
        strike: true,
        color: "#000000",
        fill: "#FFFFFF",
        align: "center" as const,
        format: "number" as const,
        decimalPlaces: 2,
        thousandsSeparator: true,
      };
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(true);
    });
  });

  describe("異常系", () => {
    it("should reject invalid color format (name)", () => {
      const style = { color: "red" };
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.message).toContain("#RRGGBB");
      }
    });

    it("should reject invalid color format (3 digits)", () => {
      const style = { color: "#FFF" };
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(false);
    });

    it("should reject invalid color format (invalid hex)", () => {
      const style = { color: "#GGGGGG" };
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(false);
    });

    it("should reject negative fontSize", () => {
      const style = { fontSize: -10 };
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(false);
    });

    it("should reject zero fontSize", () => {
      const style = { fontSize: 0 };
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(false);
    });

    it("should reject negative decimalPlaces", () => {
      const style = { decimalPlaces: -1 };
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(false);
    });

    it("should reject non-integer decimalPlaces", () => {
      const style = { decimalPlaces: 1.5 };
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(false);
    });

    it("should reject unknown properties", () => {
      const style = { unknownProp: true };
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(false);
    });

    it("should reject invalid align value", () => {
      const style = { align: "top" };
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(false);
    });

    it("should reject invalid format value", () => {
      const style = { format: "percentage" };
      const result = cellStyleSchema.safeParse(style);
      expect(result.success).toBe(false);
    });
  });
});

describe("borderStyleSchema", () => {
  describe("正常系", () => {
    it("should validate valid border style", () => {
      const border = { outline: "thin", headerBody: "medium" };
      const result = borderStyleSchema.safeParse(border);
      expect(result.success).toBe(true);
    });

    it("should validate empty object", () => {
      const border = {};
      const result = borderStyleSchema.safeParse(border);
      expect(result.success).toBe(true);
    });

    it("should validate all properties", () => {
      const border = {
        outline: "medium" as const,
        headerBody: "double" as const,
        headerInner: "thin" as const,
        bodyInner: "thin" as const,
        borderColor: "#000000",
      };
      const result = borderStyleSchema.safeParse(border);
      expect(result.success).toBe(true);
    });

    it("should validate all line styles", () => {
      const lineStyles = ["thin", "medium", "thick", "dotted", "dashed", "double"] as const;
      for (const style of lineStyles) {
        const border = { outline: style };
        const result = borderStyleSchema.safeParse(border);
        expect(result.success).toBe(true);
      }
    });
  });

  describe("異常系", () => {
    it("should reject invalid color format", () => {
      const border = { borderColor: "black" };
      const result = borderStyleSchema.safeParse(border);
      expect(result.success).toBe(false);
    });

    it("should reject invalid line style value", () => {
      const border = { outline: "solid" };
      const result = borderStyleSchema.safeParse(border);
      expect(result.success).toBe(false);
    });

    it("should reject unknown properties", () => {
      const border = { unknownProp: true };
      const result = borderStyleSchema.safeParse(border);
      expect(result.success).toBe(false);
    });

    it("should reject old format properties", () => {
      const border = { top: true, bottom: true };
      const result = borderStyleSchema.safeParse(border);
      expect(result.success).toBe(false);
    });
  });
});

describe("tableStyleSchema", () => {
  describe("正常系", () => {
    it("should validate valid table style", () => {
      const tableStyle = {
        header: { bold: true, color: "#FFFFFF", fill: "#4472C4" },
        body: { fontSize: 10 },
      };
      const result = tableStyleSchema.safeParse(tableStyle);
      expect(result.success).toBe(true);
    });

    it("should validate empty object", () => {
      const tableStyle = {};
      const result = tableStyleSchema.safeParse(tableStyle);
      expect(result.success).toBe(true);
    });

    it("should validate with only header", () => {
      const tableStyle = { header: { bold: true } };
      const result = tableStyleSchema.safeParse(tableStyle);
      expect(result.success).toBe(true);
    });

    it("should validate with only body", () => {
      const tableStyle = { body: { fontSize: 10 } };
      const result = tableStyleSchema.safeParse(tableStyle);
      expect(result.success).toBe(true);
    });
  });

  describe("異常系", () => {
    it("should reject invalid header style", () => {
      const tableStyle = { header: { color: "red" } };
      const result = tableStyleSchema.safeParse(tableStyle);
      expect(result.success).toBe(false);
    });

    it("should reject invalid body style", () => {
      const tableStyle = { body: { fontSize: -10 } };
      const result = tableStyleSchema.safeParse(tableStyle);
      expect(result.success).toBe(false);
    });

    it("should reject unknown properties", () => {
      const tableStyle = { footer: { bold: true } };
      const result = tableStyleSchema.safeParse(tableStyle);
      expect(result.success).toBe(false);
    });
  });
});
