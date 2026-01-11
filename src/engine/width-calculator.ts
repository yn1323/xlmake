/**
 * テキストの幅を計算（文字数ベース）
 * 全角文字: 2幅、半角文字: 1幅
 */
export function calculateTextWidth(text: string): number {
  let width = 0;

  for (const char of text) {
    const code = char.charCodeAt(0);

    // 全角文字の判定
    const isFullWidth =
      (code >= 0x3000 && code <= 0x9fff) || // CJK統合漢字、ひらがな、カタカナ
      (code >= 0xff00 && code <= 0xffef); // 全角英数字

    width += isFullWidth ? 2 : 1;
  }

  return width;
}

/**
 * 値から表示幅を計算（ExcelJS単位）
 */
export function calculateCellWidth(value: unknown): number {
  // null, undefined
  if (value == null) return 0;

  // 文字列
  if (typeof value === "string") {
    const textWidth = calculateTextWidth(value);
    // ExcelJSの列幅単位に変換（1文字 ≒ 1.2単位 + パディング）
    return textWidth * 1.2 + 2;
  }

  // 数値
  if (typeof value === "number") {
    const str = value.toString();
    return calculateTextWidth(str) * 1.2 + 2;
  }

  // 真偽値
  if (typeof value === "boolean") {
    return 6; // "TRUE" or "FALSE"
  }

  // その他
  return 10; // デフォルト幅
}

/**
 * 列ごとの最大幅を計算
 * @param columnCount 列数
 * @param rows 行データ配列
 */
export function calculateColumnWidths(columnCount: number, rows: unknown[][]): number[] {
  const widths = new Array(columnCount).fill(0);

  for (const row of rows) {
    for (let col = 0; col < columnCount; col++) {
      const cellValue = row[col];
      const width = calculateCellWidth(cellValue);

      // 最大幅を保持
      if (width > widths[col]) {
        widths[col] = width;
      }
    }
  }

  // 最小幅と最大幅を設定
  return widths.map((w) => Math.max(8, Math.min(w, 60)));
}
