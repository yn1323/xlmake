import { describe, expect, it } from "vitest";
import { xlmake } from "./index";

describe("xlmake", () => {
  it("should export xlmake function", () => {
    expect(xlmake).toBeDefined();
    expect(typeof xlmake).toBe("function");
  });

  it("should create workbook instance", () => {
    const wb = xlmake();
    expect(wb).toBeDefined();
  });

  it("should support method chaining", () => {
    const wb = xlmake().sheet("Test").text("Hello").space(1);
    expect(wb).toBeDefined();
  });
});
