import type { CellStyle } from "../types/style";

/**
 * スタイルをマージする（後のスタイルが優先）
 */
export function mergeStyles(...styles: (CellStyle | undefined)[]): CellStyle {
  const merged: CellStyle = {};

  for (const style of styles) {
    if (!style) continue;

    // すべてのプロパティをマージ
    Object.assign(merged, style);
  }

  return merged;
}

/**
 * スタイル配列をディープコピー
 */
export function cloneStyle(style: CellStyle | undefined): CellStyle | undefined {
  if (!style) return undefined;
  return { ...style };
}

/**
 * 空のスタイルかチェック
 */
export function isEmptyStyle(style: CellStyle | undefined): boolean {
  if (!style) return true;
  return Object.keys(style).length === 0;
}
