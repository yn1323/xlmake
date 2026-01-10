import { describe, expect, it } from "vitest";
import { textInputSchema } from "./text";

describe("textInputSchema", () => {
  describe("正常系", () => {
    it("should validate plain string", () => {
      const input = "タイトル";
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    it("should validate styled cell with string value", () => {
      const input = { value: "タイトル", style: { bold: true } };
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    it("should validate styled cell with number value", () => {
      const input = { value: 123 };
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    it("should validate styled cell with boolean value", () => {
      const input = { value: true };
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    it("should validate styled cell with all style properties", () => {
      const input = {
        value: "タイトル",
        style: {
          fontFamily: "Arial",
          fontSize: 14,
          bold: true,
          italic: true,
          color: "#FF0000",
          fill: "#FFFF00",
          align: "center" as const,
        },
      };
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    it("should validate empty string", () => {
      const input = "";
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });
  });

  describe("異常系", () => {
    it("should reject null", () => {
      const input = null;
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    it("should reject undefined", () => {
      const input = undefined;
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    it("should reject array", () => {
      const input: any[] = [];
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    it("should reject object without value", () => {
      const input = { style: { bold: true } };
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    it("should reject styled cell with invalid value type", () => {
      const input = { value: null };
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    it("should reject styled cell with invalid style", () => {
      const input = { value: "タイトル", style: { color: "red" } };
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    it("should reject styled cell with unknown properties", () => {
      const input = { value: "タイトル", unknownProp: true };
      const result = textInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });
  });
});
