import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";

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
