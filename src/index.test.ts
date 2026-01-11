import { describe, expect, it } from "vitest";
import { xlkit } from "./index";

describe("xlkit", () => {
  it("should export xlkit function", () => {
    expect(xlkit).toBeDefined();
    expect(typeof xlkit).toBe("function");
  });

  it("should create workbook instance", () => {
    const wb = xlkit();
    expect(wb).toBeDefined();
  });

  it("should support method chaining", () => {
    const wb = xlkit().sheet("Test").text("Hello").space(1);
    expect(wb).toBeDefined();
  });
});
