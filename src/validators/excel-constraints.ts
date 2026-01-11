// Excel制約の定数
export const EXCEL_LIMITS = {
  SHEET_NAME_MAX_LENGTH: 31,
  SHEET_NAME_INVALID_CHARS: [":", "\\", "/", "?", "*", "[", "]"],
  MAX_ROWS: 1_048_576,
  MAX_COLUMNS: 16_384,
} as const;

/**
 * シート名のバリデーション
 */
export function validateSheetName(name: string): void {
  // 文字数チェック
  if (name.length > EXCEL_LIMITS.SHEET_NAME_MAX_LENGTH) {
    throw new Error("シート名は31文字以内である必要があります");
  }

  // 禁止文字チェック
  for (const char of EXCEL_LIMITS.SHEET_NAME_INVALID_CHARS) {
    if (name.includes(char)) {
      throw new Error(`シート名に使用できない文字が含まれています: ${char}`);
    }
  }

  // 空白のみチェック
  if (name.trim().length === 0) {
    throw new Error("シート名を空白のみにすることはできません");
  }
}

/**
 * データサイズのバリデーション
 */
export function validateDataSize(rowCount: number, columnCount: number): void {
  if (rowCount > EXCEL_LIMITS.MAX_ROWS) {
    throw new Error("データ行数がExcelの上限(1,048,576行)を超えています");
  }

  if (columnCount > EXCEL_LIMITS.MAX_COLUMNS) {
    throw new Error("列数がExcelの上限(16,384列)を超えています");
  }
}
