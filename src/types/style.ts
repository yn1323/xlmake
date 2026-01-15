// AlignType: 後方互換性を保ちつつ拡張
// - "left", "center", "right": 水平方向のみ（垂直は middle）
// - "top-left", "bottom-center" など: 垂直・水平両方指定
export type AlignType =
  | "left"
  | "center"
  | "right"
  | "top-left"
  | "top-center"
  | "top-right"
  | "middle-left"
  | "middle-center"
  | "middle-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";
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

// 罫線のスタイル
export type LineStyle = "thin" | "medium" | "thick" | "dotted" | "dashed" | "double";

// 罫線スタイル（テーブル構造ベース）
export type BorderStyle = {
  outline?: LineStyle; // 外枠（テーブル全体の外周）
  headerBody?: LineStyle; // ヘッダーとボディの境目
  headerInner?: LineStyle; // ヘッダー内部の罫線
  bodyInner?: LineStyle; // ボディ内部の罫線
  borderColor?: string; // 罫線色 "#RRGGBB"
};

// テーブル全体のスタイル
export type TableStyle = {
  header?: CellStyle;
  body?: CellStyle;
};
