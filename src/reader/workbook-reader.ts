import ExcelJS from "exceljs";
import { isBuffer } from "../utils/buffer";
import { SheetReader } from "./sheet-reader";

/**
 * ワークブックの読み取り
 */
export class WorkbookReader {
  constructor(private workbook: ExcelJS.Workbook) {}

  /**
   * シート名の配列を取得
   */
  get sheetNames(): string[] {
    return this.workbook.worksheets.map((ws) => ws.name);
  }

  /**
   * シートを取得（名前指定）
   */
  sheet(name: string): SheetReader {
    const worksheet = this.workbook.getWorksheet(name);
    if (!worksheet) {
      throw new Error(`Sheet "${name}" not found`);
    }
    return new SheetReader(worksheet);
  }

  /**
   * シートを取得（インデックス指定、0-indexed）
   */
  sheetAt(index: number): SheetReader {
    const worksheet = this.workbook.worksheets[index];
    if (!worksheet) {
      throw new Error(`Sheet at index ${index} not found`);
    }
    return new SheetReader(worksheet);
  }

  /**
   * シート数を取得
   */
  get sheetCount(): number {
    return this.workbook.worksheets.length;
  }
}

/**
 * Excelファイルを読み取る
 */
export async function read(source: Buffer | string): Promise<WorkbookReader> {
  const workbook = new ExcelJS.Workbook();

  if (isBuffer(source)) {
    // Bufferから読み取り
    // @ts-expect-error Node.js Buffer<ArrayBufferLike>とExcelJSのBuffer型に互換性問題
    await workbook.xlsx.load(source);
  } else {
    // ファイルパスから読み取り
    await workbook.xlsx.readFile(source);
  }

  return new WorkbookReader(workbook);
}
