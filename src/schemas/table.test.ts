import { describe, expect, it } from "vitest";
import { tableOptionsSchema } from "./table";

describe("tableOptionsSchema", () => {
  describe("正常系", () => {
    it("should validate basic table options", () => {
      const options = {
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(true);
    });

    it("should validate table options with all properties", () => {
      const options = {
        preset: "basic" as const,
        columns: [
          { key: "name", label: "名前" },
          { key: "age", label: "年齢" },
        ],
        data: [
          { name: "太郎", age: 30 },
          { name: "花子", age: 25 },
        ],
        autoWidth: "all" as const,
        mergeSameValues: true,
        style: {
          header: { bold: true, color: "#FFFFFF", fill: "#4472C4" },
          body: { fontSize: 10 },
        },
        border: { top: true, bottom: true, color: "#000000" },
        conditionalStyle: (row: any, col: string) => ({}),
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(true);
    });

    it("should validate with nested columns", () => {
      const options = {
        columns: [
          {
            label: "基本情報",
            children: [
              { key: "name", label: "名前" },
              { key: "age", label: "年齢" },
            ],
          },
        ],
        data: [{ name: "太郎", age: 30 }],
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(true);
    });

    it("should validate with autoWidth false", () => {
      const options = {
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
        autoWidth: false,
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(true);
    });

    it("should validate with autoWidth 'body'", () => {
      const options = {
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
        autoWidth: "body" as const,
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(true);
    });

    it("should validate with empty data array", () => {
      const options = {
        columns: [{ key: "name", label: "名前" }],
        data: [],
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(true);
    });
  });

  describe("異常系", () => {
    it("should reject without columns", () => {
      const options = {
        data: [{ name: "太郎" }],
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject without data", () => {
      const options = {
        columns: [{ key: "name", label: "名前" }],
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with empty columns", () => {
      const options = {
        columns: [],
        data: [{ name: "太郎" }],
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with invalid preset", () => {
      const options = {
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
        preset: "unknown",
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with invalid autoWidth (true)", () => {
      const options = {
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
        autoWidth: true,
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with invalid autoWidth (string)", () => {
      const options = {
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
        autoWidth: "header",
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with data not array", () => {
      const options = {
        columns: [{ key: "name", label: "名前" }],
        data: "not an array",
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with invalid style", () => {
      const options = {
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
        style: { header: { color: "red" } },
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with invalid border", () => {
      const options = {
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
        border: { color: "black" },
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with unknown properties", () => {
      const options = {
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
        unknownProp: true,
      };
      const result = tableOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });
  });
});
