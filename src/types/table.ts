import type { Column } from "./column";
import type { BorderStyle, CellStyle, TableStyle } from "./style";

// テーブルプリセット
export type TablePreset = "basic" | "minimal" | "striped";

// 列幅自動調整オプション
export type AutoWidthOption = "all" | "body" | false;

// テーブルオプション
export type TableOptions<T> = {
  // プリセット
  preset?: TablePreset;

  // カラム定義
  columns: Column<T>[];

  // データ
  data: (T & {
    _style?: Partial<Record<keyof T, CellStyle>>;
    _rowStyle?: CellStyle;
  })[];

  // 列幅
  autoWidth?: AutoWidthOption;

  // 全体のマージ設定
  mergeSameValues?: boolean;

  // スタイル
  style?: TableStyle;
  border?: BorderStyle;
};
