// xlkit - Declarative Excel generation library

export { xlkit } from "./core/workbook-builder";
export type { Column, LeafColumn, ParentColumn } from "./types/column";
export type { ImageOptions, ImageSource } from "./types/image";
// 型定義をエクスポート（ユーザーが使用できるように）
export type { AlignType, BorderStyle, CellStyle, FormatType, TableStyle } from "./types/style";
export type { AutoWidthOption, TableOptions, TablePreset } from "./types/table";
export type { StyledCell, TextInput } from "./types/text";
export type { Block, BlockType, SheetState, WorkbookState } from "./types/workbook";
