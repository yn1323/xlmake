import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { read, xlmake } from "../../src/index";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "output");

describe("03-formats.xlsx", () => {
  const outputPath = join(outputDir, "03-formats.xlsx");

  it("should generate and verify formats", async () => {
    // 生成
    const node = await xlmake()
      // NumberFormat シート
      .sheet("NumberFormat")
      .table({
        columns: [
          { key: "raw", label: "元値" },
          {
            key: "formatted",
            label: "書式適用",
            style: {
              format: "number",
              decimalPlaces: 2,
              thousandsSeparator: true,
            },
          },
        ],
        data: [
          { raw: 1234567.89, formatted: 1234567.89 },
          { raw: 100, formatted: 100 },
        ],
      })
      // DateFormat シート
      .sheet("DateFormat")
      .table({
        columns: [{ key: "date", label: "日付", style: { format: "date" } }],
        data: [{ date: new Date("2026-01-11") }],
      })
      // CurrencyFormat シート
      .sheet("CurrencyFormat")
      .table({
        columns: [
          { key: "amount", label: "金額" },
          {
            key: "formatted",
            label: "通貨形式",
            style: {
              format: "number",
              thousandsSeparator: true,
            },
          },
        ],
        data: [{ amount: 1000000, formatted: 1000000 }],
      })
      // StringFormat シート（0始まり文字列の検証）
      .sheet("StringFormat")
      .table({
        columns: [
          { key: "raw", label: "元値" },
          { key: "formatted", label: "文字列書式", style: { format: "string" } },
        ],
        data: [
          { raw: "01234", formatted: "01234" },
          { raw: "00100", formatted: "00100" },
          { raw: "0", formatted: "0" },
        ],
      })
      .getNode();

    // ファイル保存（目視確認用）
    await node.saveToFile(outputPath);

    // Buffer経由で読み取り
    const buffer = await node.toBuffer();
    const workbook = await read(buffer);

    // NumberFormat シート検証（値が正しく入っているか）
    const numberSheet = workbook.sheet("NumberFormat");
    expect(numberSheet.cell("A2").value).toBe(1234567.89);
    expect(numberSheet.cell("B2").value).toBe(1234567.89);

    // DateFormat シート検証（日付値の確認）
    const dateSheet = workbook.sheet("DateFormat");
    expect(dateSheet.cell("A1").value).toBe("日付");
    // Note: 日付フォーマットの値書き込みは別途検証が必要

    // CurrencyFormat シート検証
    const currencySheet = workbook.sheet("CurrencyFormat");
    expect(currencySheet.cell("A2").value).toBe(1000000);

    // StringFormat シート検証（0始まり文字列が保持されているか）
    const stringSheet = workbook.sheet("StringFormat");
    expect(stringSheet.cell("B2").value).toBe("01234");
    expect(stringSheet.cell("B3").value).toBe("00100");
    expect(stringSheet.cell("B4").value).toBe("0");
    expect(stringSheet.cell("B2").style?.format).toBe("string");
  });
});
