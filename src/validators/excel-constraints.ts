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
    throw new Error("Sheet name must be 31 characters or less");
  }

  // 禁止文字チェック
  for (const char of EXCEL_LIMITS.SHEET_NAME_INVALID_CHARS) {
    if (name.includes(char)) {
      throw new Error(`Sheet name contains invalid character: ${char}`);
    }
  }

  // 空白のみチェック
  if (name.trim().length === 0) {
    throw new Error("Sheet name cannot be only whitespace");
  }
}

/**
 * データサイズのバリデーション
 */
export function validateDataSize(rowCount: number, columnCount: number): void {
  if (rowCount > EXCEL_LIMITS.MAX_ROWS) {
    throw new Error("Row count exceeds Excel limit (1,048,576 rows)");
  }

  if (columnCount > EXCEL_LIMITS.MAX_COLUMNS) {
    throw new Error("Column count exceeds Excel limit (16,384 columns)");
  }
}
