import type { Column, LeafColumn } from "../types/column";
import { isLeafColumn } from "../types/column";

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
