import { describe, expect, it } from "vitest";
import { imageOptionsSchema } from "./image";

describe("imageOptionsSchema", () => {
  describe("正常系", () => {
    it("should validate with URL source", () => {
      const options = {
        source: "https://example.com/image.png",
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(true);
    });

    it("should validate with file path source", () => {
      const options = {
        source: "/path/to/image.png",
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(true);
    });

    it("should validate with Buffer source", () => {
      const options = {
        source: Buffer.from("test"),
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(true);
    });

    it("should validate with all properties", () => {
      const options = {
        source: "https://example.com/image.png",
        width: 200,
        height: 100,
        row: 0,
        col: 0,
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(true);
    });

    it("should validate with width and height", () => {
      const options = {
        source: "https://example.com/image.png",
        width: 200,
        height: 100,
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(true);
    });

    it("should validate with row and col", () => {
      const options = {
        source: "https://example.com/image.png",
        row: 5,
        col: 10,
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(true);
    });
  });

  describe("異常系", () => {
    it("should reject without source", () => {
      const options = { width: 200 };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with empty string source", () => {
      const options = { source: "" };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with negative width", () => {
      const options = {
        source: "https://example.com/image.png",
        width: -100,
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with zero width", () => {
      const options = {
        source: "https://example.com/image.png",
        width: 0,
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with negative height", () => {
      const options = {
        source: "https://example.com/image.png",
        height: -100,
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with zero height", () => {
      const options = {
        source: "https://example.com/image.png",
        height: 0,
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with negative row", () => {
      const options = {
        source: "https://example.com/image.png",
        row: -1,
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with negative col", () => {
      const options = {
        source: "https://example.com/image.png",
        col: -1,
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with non-integer row", () => {
      const options = {
        source: "https://example.com/image.png",
        row: 1.5,
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with non-integer col", () => {
      const options = {
        source: "https://example.com/image.png",
        col: 1.5,
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });

    it("should reject with unknown properties", () => {
      const options = {
        source: "https://example.com/image.png",
        unknownProp: true,
      };
      const result = imageOptionsSchema.safeParse(options);
      expect(result.success).toBe(false);
    });
  });
});
