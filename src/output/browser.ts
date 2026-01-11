import type ExcelJS from "exceljs";

export class BrowserOutput {
  constructor(private workbook: ExcelJS.Workbook) {}

  /**
   * ブラウザでダウンロード
   */
  async download(fileName: string): Promise<void> {
    const buffer = await this.workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(url);
  }
}
