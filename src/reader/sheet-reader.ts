import type { Worksheet } from "exceljs";
import { CellReader } from "./cell-reader";

/**
 * シートの読み取り
 */
export class SheetReader {
  constructor(private worksheet: Worksheet) {}

  /**
   * シート名を取得
   */
  get name(): string {
    return this.worksheet.name;
  }

  /**
   * セルを取得（A1形式）
   */
  cell(address: string): CellReader {
    const cell = this.worksheet.getCell(address);
    return new CellReader(cell);
  }

  /**
   * セルを取得（行・列番号）
   */
  cellAt(row: number, col: number): CellReader {
    const cell = this.worksheet.getCell(row, col);
    return new CellReader(cell);
  }

  /**
   * マージされたセル範囲を取得
   */
  get mergedCells(): string[] {
    // ExcelJSは "A1:B2" 形式の配列を返す
    const model = (this.worksheet as any).model;
    return model?.merges || [];
  }

  /**
   * 行数を取得
   */
  get rowCount(): number {
    return this.worksheet.rowCount;
  }

  /**
   * 列数を取得
   */
  get columnCount(): number {
    return this.worksheet.columnCount;
  }
}
