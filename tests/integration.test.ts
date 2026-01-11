import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";
import { read, xlkit } from "../src/index";

const __dirname = dirname(fileURLToPath(import.meta.url));

describe("Excel生成の結合テスト", () => {
  it("should generate a basic Excel file", async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Sample");

    sheet.getCell("A1").value = "Hello xlkit";

    const outputPath = join(__dirname, "output", "sample.xlsx");
    await workbook.xlsx.writeFile(outputPath);

    // 生成したファイルを読み取って検証
    const readWorkbook = new ExcelJS.Workbook();
    await readWorkbook.xlsx.readFile(outputPath);

    const readSheet = readWorkbook.getWorksheet("Sample");
    expect(readSheet?.getCell("A1").value).toBe("Hello xlkit");
  });
});

describe("xlkit APIを使った結合テスト", () => {
  it("should write and read simple table", async () => {
    // 生成
    const node = await xlkit()
      .sheet("売上")
      .table({
        columns: [
          { key: "name", label: "名前" },
          { key: "price", label: "価格" },
        ],
        data: [
          { name: "PC", price: 100000 },
          { name: "モニタ", price: 30000 },
        ],
      })
      .getNode();
    const buffer = await node.toBuffer();

    // 読み取り
    const workbook = await read(buffer);
    const sheet = workbook.sheet("売上");

    // 検証
    expect(sheet.cell("A1").value).toBe("名前");
    expect(sheet.cell("B1").value).toBe("価格");
    expect(sheet.cell("A2").value).toBe("PC");
    expect(sheet.cell("B2").value).toBe(100000);
    expect(sheet.cell("A3").value).toBe("モニタ");
    expect(sheet.cell("B3").value).toBe(30000);
  });

  it("should write and read text with style", async () => {
    const node = await xlkit()
      .sheet("Test")
      .text({
        value: "タイトル",
        style: { bold: true, fontSize: 14, color: "#FF0000" },
      })
      .getNode();
    const buffer = await node.toBuffer();

    const workbook = await read(buffer);
    const sheet = workbook.sheet("Test");
    const cell = sheet.cell("A1");

    expect(cell.value).toBe("タイトル");
    expect(cell.style?.bold).toBe(true);
    expect(cell.style?.fontSize).toBe(14);
    expect(cell.style?.color).toBe("#FF0000");
  });

  it("should write and read with preset", async () => {
    const node = await xlkit()
      .sheet("売上")
      .table({
        preset: "basic",
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
      })
      .getNode();
    const buffer = await node.toBuffer();

    const workbook = await read(buffer);
    const sheet = workbook.sheet("売上");

    // ヘッダースタイル確認
    const header = sheet.cell("A1");
    expect(header.style?.bold).toBe(true);
    expect(header.style?.fill).toBe("#4472C4");
    expect(header.style?.color).toBe("#FFFFFF");
  });
});
