import { describe, expect, it } from "vitest";
import type { Block } from "./workbook";
import { isImageBlock, isSpaceBlock, isTableBlock, isTextBlock } from "./workbook";

describe("isTableBlock", () => {
  it("should return true for table block", () => {
    const block: Block = {
      type: "table",
      options: { columns: [], data: [] },
    };
    expect(isTableBlock(block)).toBe(true);
  });

  it("should return false for non-table block", () => {
    const block: Block = { type: "text", input: "test" };
    expect(isTableBlock(block)).toBe(false);
  });
});

describe("isTextBlock", () => {
  it("should return true for text block", () => {
    const block: Block = { type: "text", input: "test" };
    expect(isTextBlock(block)).toBe(true);
  });

  it("should return false for non-text block", () => {
    const block: Block = {
      type: "table",
      options: { columns: [], data: [] },
    };
    expect(isTextBlock(block)).toBe(false);
  });
});

describe("isImageBlock", () => {
  it("should return true for image block", () => {
    const block: Block = {
      type: "image",
      options: { source: "https://example.com/image.png" },
    };
    expect(isImageBlock(block)).toBe(true);
  });

  it("should return false for non-image block", () => {
    const block: Block = { type: "text", input: "test" };
    expect(isImageBlock(block)).toBe(false);
  });
});

describe("isSpaceBlock", () => {
  it("should return true for space block", () => {
    const block: Block = { type: "space", lines: 2 };
    expect(isSpaceBlock(block)).toBe(true);
  });

  it("should return false for non-space block", () => {
    const block: Block = { type: "text", input: "test" };
    expect(isSpaceBlock(block)).toBe(false);
  });
});
