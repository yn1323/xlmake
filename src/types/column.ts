import type { CellStyle } from "./style";

// リーフカラム（末端のカラム、実際のデータを持つ）
export type LeafColumn<T> = {
  key: keyof T & string;
  label: string;
  style?: CellStyle;
  mergeSameValues?: boolean; // 同じ値を縦マージするか
};

// 親カラム（子カラムを持つ、マルチヘッダー用）
export type ParentColumn<T> = {
  label: string;
  children: Column<T>[]; // 再帰的な定義
};

// カラム型（Union型）
export type Column<T> = LeafColumn<T> | ParentColumn<T>;

// 型ガード関数
export function isLeafColumn<T>(column: Column<T>): column is LeafColumn<T> {
  return "key" in column;
}

export function isParentColumn<T>(column: Column<T>): column is ParentColumn<T> {
  return "children" in column;
}
