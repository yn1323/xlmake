// 基本的な型エイリアス
export type AlignType = "left" | "center" | "right";
export type FormatType = "string" | "number" | "date";

// セルのスタイル
export type CellStyle = {
  // フォント関連
  fontFamily?: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;

  // 色
  color?: string; // テキスト色 "#RRGGBB"
  fill?: string; // 背景色 "#RRGGBB"

  // 配置
  align?: AlignType;

  // フォーマット
  format?: FormatType;
  decimalPlaces?: number;
  thousandsSeparator?: boolean;
};

// 罫線スタイル
export type BorderStyle = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  horizontal?: boolean; // 内部の水平線
  vertical?: boolean; // 内部の垂直線
  color?: string; // 罫線色 "#RRGGBB"
  style?: "thin" | "medium" | "thick" | "dotted" | "dashed";
};

// テーブル全体のスタイル
export type TableStyle = {
  header?: CellStyle;
  body?: CellStyle;
};
