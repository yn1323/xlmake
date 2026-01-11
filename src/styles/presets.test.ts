import { describe, expect, it } from "vitest";
import { getPreset, hasPreset, TABLE_PRESETS } from "./presets";

describe("TABLE_PRESETS", () => {
  it("should have basic preset", () => {
    expect(TABLE_PRESETS.basic).toBeDefined();
    expect(TABLE_PRESETS.basic.style?.header?.bold).toBe(true);
    expect(TABLE_PRESETS.basic.style?.header?.fill).toBe("#4472C4");
    expect(TABLE_PRESETS.basic.style?.header?.color).toBe("#FFFFFF");
    expect(TABLE_PRESETS.basic.style?.header?.align).toBe("center");
    expect(TABLE_PRESETS.basic.style?.body?.align).toBe("left");
    expect(TABLE_PRESETS.basic.border?.outline).toBe("thin");
    expect(TABLE_PRESETS.basic.border?.headerBody).toBe("thin");
    expect(TABLE_PRESETS.basic.border?.headerInner).toBe("thin");
    expect(TABLE_PRESETS.basic.border?.bodyInner).toBe("thin");
    expect(TABLE_PRESETS.basic.stripedRowColor).toBeUndefined();
  });

  it("should have minimal preset", () => {
    expect(TABLE_PRESETS.minimal).toBeDefined();
    expect(TABLE_PRESETS.minimal.style?.header?.bold).toBe(true);
    expect(TABLE_PRESETS.minimal.style?.header?.align).toBe("left");
    expect(TABLE_PRESETS.minimal.style?.body?.align).toBe("left");
    // 罫線なし
    expect(TABLE_PRESETS.minimal.border).toBeUndefined();
    expect(TABLE_PRESETS.minimal.stripedRowColor).toBeUndefined();
  });

  it("should have striped preset", () => {
    expect(TABLE_PRESETS.striped).toBeDefined();
    expect(TABLE_PRESETS.striped.style?.header?.bold).toBe(true);
    expect(TABLE_PRESETS.striped.style?.header?.fill).toBe("#4472C4");
    expect(TABLE_PRESETS.striped.style?.header?.color).toBe("#FFFFFF");
    expect(TABLE_PRESETS.striped.style?.header?.align).toBe("center");
    expect(TABLE_PRESETS.striped.style?.body?.align).toBe("left");
    expect(TABLE_PRESETS.striped.border?.outline).toBe("thin");
    expect(TABLE_PRESETS.striped.border?.headerBody).toBe("thin");
    expect(TABLE_PRESETS.striped.border?.headerInner).toBe("thin");
    expect(TABLE_PRESETS.striped.border?.bodyInner).toBe("thin");
    expect(TABLE_PRESETS.striped.stripedRowColor).toBe("#F2F2F2");
  });
});

describe("getPreset", () => {
  it("should return basic preset", () => {
    const preset = getPreset("basic");
    expect(preset).toEqual(TABLE_PRESETS.basic);
  });

  it("should return minimal preset", () => {
    const preset = getPreset("minimal");
    expect(preset).toEqual(TABLE_PRESETS.minimal);
  });

  it("should return striped preset", () => {
    const preset = getPreset("striped");
    expect(preset).toEqual(TABLE_PRESETS.striped);
  });

  it("should throw error for unknown preset", () => {
    expect(() => getPreset("unknown")).toThrow("不明なプリセット名: unknown");
  });

  it("should throw error for empty string", () => {
    expect(() => getPreset("")).toThrow("不明なプリセット名: ");
  });
});

describe("hasPreset", () => {
  it("should return true for basic", () => {
    expect(hasPreset("basic")).toBe(true);
  });

  it("should return true for minimal", () => {
    expect(hasPreset("minimal")).toBe(true);
  });

  it("should return true for striped", () => {
    expect(hasPreset("striped")).toBe(true);
  });

  it("should return false for unknown preset", () => {
    expect(hasPreset("unknown")).toBe(false);
  });

  it("should return false for empty string", () => {
    expect(hasPreset("")).toBe(false);
  });
});
