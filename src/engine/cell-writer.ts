import type { Cell, Row, Worksheet } from "exceljs";
import { convertToExcelJSStyle } from "../styles/converter";
import type { CellStyle } from "../types/style";

/**
 * セルに値とスタイルを設定
 */
export function writeCell(cell: Cell, value: unknown, style?: CellStyle): void {
  // 値を設定
  cell.value = value as any;

  // スタイルを適用
  if (style) {
    const excelStyle = convertToExcelJSStyle(style);
    cell.style = excelStyle as any;
  }
}

/**
 * セル範囲をマージ
 * @param worksheet ワークシート
 * @param startRow 開始行（1-indexed）
 * @param startCol 開始列（1-indexed）
 * @param endRow 終了行（1-indexed）
 * @param endCol 終了列（1-indexed）
 */
export function mergeCells(
  worksheet: Worksheet,
  startRow: number,
  startCol: number,
  endRow: number,
  endCol: number,
): void {
  worksheet.mergeCells(startRow, startCol, endRow, endCol);
}

/**
 * 行を作成して返す（存在する場合は既存の行を返す）
 */
export function getOrCreateRow(worksheet: Worksheet, rowNumber: number): Row {
  const row = worksheet.getRow(rowNumber);
  return row;
}

/**
 * セル参照（A1形式）を取得
 */
export function getCellAddress(row: number, col: number): string {
  const colLetter = numberToColumnLetter(col);
  return `${colLetter}${row}`;
}

/**
 * 列番号をA1形式の列名に変換（1 → A, 2 → B, ...）
 */
function numberToColumnLetter(num: number): string {
  let letter = "";
  let n = num;

  while (n > 0) {
    const remainder = (n - 1) % 26;
    letter = String.fromCharCode(65 + remainder) + letter;
    n = Math.floor((n - 1) / 26);
  }

  return letter;
}
