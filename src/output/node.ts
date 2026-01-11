import type ExcelJS from "exceljs";

export class NodeOutput {
  constructor(private workbook: ExcelJS.Workbook) {}

  /**
   * ファイルに保存
   */
  async saveToFile(filePath: string): Promise<void> {
    await this.workbook.xlsx.writeFile(filePath);
  }

  /**
   * Bufferとして取得
   */
  async toBuffer(): Promise<Buffer> {
    const buffer = await this.workbook.xlsx.writeBuffer();
    return Buffer.from(buffer);
  }
}
