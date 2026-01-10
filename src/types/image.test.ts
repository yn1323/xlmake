import { describe, expect, it } from "vitest";
import type { ImageSource } from "./image";
import { isBuffer } from "./image";

describe("isBuffer", () => {
  it("should return true for Buffer", () => {
    const source: ImageSource = Buffer.from("test");
    expect(isBuffer(source)).toBe(true);
  });

  it("should return false for URL string", () => {
    const source: ImageSource = "https://example.com/image.png";
    expect(isBuffer(source)).toBe(false);
  });

  it("should return false for file path string", () => {
    const source: ImageSource = "/path/to/image.png";
    expect(isBuffer(source)).toBe(false);
  });
});
