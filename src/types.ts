import { type Alignment, type Border, type Fill, type Font, Style } from "exceljs";

export type HexColor = string; // #RRGGBB

export interface XLStyle {
  font?: Partial<Font> & { color?: HexColor | { argb: string } };
  fill?: Partial<Fill> & { color?: HexColor };
  alignment?: Partial<Alignment>;
  border?: Partial<Border> | "all" | "outer" | "header-body" | "none";
}

// セル値の型（プリミティブまたはスタイル付き）
export type CellValue =
  | any
  | {
      value: any;
      style?: XLStyle;
    };

// ヘッダーラベルのセル（複数行ヘッダー用）
export interface HeaderLabelCell {
  value: string;
  style?: XLStyle;
}

// ヘッダーラベルの型
// - string: 単一行ヘッダー
// - { value, style }: 単一行ヘッダー（スタイル付き）
// - (string | HeaderLabelCell)[]: 複数行ヘッダー（同値で自動結合）
export type HeaderLabel = string | { value: string; style?: XLStyle } | (string | HeaderLabelCell)[];

export interface HeaderDef {
  key: string;
  label: HeaderLabel;
  width?: number | "auto";
  merge?: "vertical";
  style?: XLStyle | ((val: any, row: any, index: number) => XLStyle);
  format?: string | ((val: any) => string);
}

export interface TitleConfig {
  label: string | string[];
  style?: XLStyle;
}

export interface StylesConfig {
  all?: XLStyle; // 全体のデフォルト
  header?: XLStyle; // ヘッダー行全体
  body?: XLStyle; // ボディ全体
  row?: (data: any, index: number) => XLStyle; // 行全体（動的）
  column?: { [key: string]: XLStyle }; // 列全体
}

export interface SheetConfig {
  name: string;
  headers: HeaderDef[];
  rows: any[]; // CellValue を含むデータオブジェクトの配列
  title?: TitleConfig;
  styles?: StylesConfig; // 全体スタイル設定
  borders?: "all" | "outer" | "header-body" | "none";
  autoWidth?:
    | boolean
    | {
        enabled?: boolean;
        padding?: number;
        headerIncluded?: boolean;
        charWidthConstant?: number;
      };
}
