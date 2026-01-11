// xlkit - Declarative Excel generation library

export { xlkit } from "./core/workbook-builder";
export type { CellBorder, CellReader } from "./reader/cell-reader";
export type { SheetReader } from "./reader/sheet-reader";
// 読み取りAPI用の型
export type { WorkbookReader } from "./reader/workbook-reader";
export { read } from "./reader/workbook-reader";
export type { Column, LeafColumn, ParentColumn } from "./types/column";
export type { ImageOptions, ImageSource } from "./types/image";
// 型定義をエクスポート（ユーザーが使用できるように）
export type { AlignType, BorderStyle, CellStyle, FormatType, LineStyle, TableStyle } from "./types/style";
export type { AutoWidthOption, TableOptions, TablePreset } from "./types/table";
export type { StyledCell, TextInput } from "./types/text";
export type { Block, BlockType, SheetState, WorkbookState } from "./types/workbook";
