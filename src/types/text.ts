import type { CellStyle } from "./style";

// スタイル付きセル
export type StyledCell = {
  value: string | number | boolean;
  style?: CellStyle;
};

// テキスト入力（文字列 or スタイル付きセル）
export type TextInput = string | StyledCell;

// 型ガード関数
export function isStyledCell(input: TextInput): input is StyledCell {
  return typeof input === "object" && "value" in input;
}
