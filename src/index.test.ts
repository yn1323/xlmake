import { describe, expect, it } from "vitest";
import { xlkit } from "./index";

describe("xlkit", () => {
  it("should create xlkit instance", () => {
    const kit = xlkit();
    expect(kit).toBeDefined();
  });

  it("should set title", () => {
    const kit = xlkit();
    const result = kit.title("Test Title");
    expect(result.text).toBe("Test Title");
  });
});
