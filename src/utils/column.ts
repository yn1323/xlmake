import type { Column, LeafColumn } from "../types/column";
import { isLeafColumn } from "../types/column";
import type { CellStyle } from "../types/style";

/**
 * ヘッダーセルの情報（マージ情報を含む）
 */
export type HeaderCell = {
  label: string;
  colSpan: number; // 水平マージ
  rowSpan: number; // 垂直マージ
  style?: CellStyle;
};

/**
 * カラムツリーをフラット化（リーフカラムのみ抽出）
 */
export function flattenColumns<T>(columns: Column<T>[]): LeafColumn<T>[] {
  const result: LeafColumn<T>[] = [];

  for (const col of columns) {
    if (isLeafColumn(col)) {
      result.push(col);
    } else {
      result.push(...flattenColumns(col.children));
    }
  }

  return result;
}

/**
 * カラムの水平スパン（リーフ数）を計算
 */
export function getColumnSpan<T>(column: Column<T>): number {
  if (isLeafColumn(column)) {
    return 1;
  }
  return column.children.reduce((sum, child) => sum + getColumnSpan(child), 0);
}

/**
 * ヘッダーの深さを計算
 */
export function getHeaderDepth<T>(columns: Column<T>[]): number {
  let maxDepth = 1;
  for (const col of columns) {
    if (!isLeafColumn(col)) {
      const childDepth = getHeaderDepth(col.children);
      maxDepth = Math.max(maxDepth, childDepth + 1);
    }
  }
  return maxDepth;
}

/**
 * ヘッダー行ごとのセル情報を構築
 * @param columns カラム定義
 * @param totalDepth ヘッダーの総深さ
 * @returns 行ごとのHeaderCell配列
 */
export function buildHeaderRows<T>(columns: Column<T>[], totalDepth: number): HeaderCell[][] {
  const rows: HeaderCell[][] = Array.from({ length: totalDepth }, () => []);

  function processColumn(col: Column<T>, currentDepth: number): void {
    if (isLeafColumn(col)) {
      // リーフカラム: 残りの深さ分だけ縦にマージ
      const rowSpan = totalDepth - currentDepth;
      rows[currentDepth].push({
        label: col.label,
        colSpan: 1,
        rowSpan,
        style: col.style,
      });
    } else {
      // 親カラム: 子の数だけ横にマージ
      const colSpan = getColumnSpan(col);
      rows[currentDepth].push({
        label: col.label,
        colSpan,
        rowSpan: 1,
        style: undefined, // ParentColumnにはstyleがない
      });
      // 子カラムを次の深さで処理
      for (const child of col.children) {
        processColumn(child, currentDepth + 1);
      }
    }
  }

  for (const col of columns) {
    processColumn(col, 0);
  }

  return rows;
}
