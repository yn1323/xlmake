import type { ImageOptions } from "./image";
import type { TableOptions } from "./table";
import type { TextInput } from "./text";

// ブロックの種類
export type BlockType = "table" | "text" | "image" | "space";

// ブロック（Union型）
export type Block =
  | { type: "table"; options: TableOptions<Record<string, unknown>> }
  | { type: "text"; input: TextInput }
  | { type: "image"; options: ImageOptions }
  | { type: "space"; lines: number };

// シートの状態
export type SheetState = {
  name: string;
  blocks: Block[];
};

// ワークブック全体の状態
export type WorkbookState = {
  sheets: SheetState[];
};

// 型ガード関数
export function isTableBlock(block: Block): block is { type: "table"; options: TableOptions<Record<string, unknown>> } {
  return block.type === "table";
}

export function isTextBlock(block: Block): block is { type: "text"; input: TextInput } {
  return block.type === "text";
}

export function isImageBlock(block: Block): block is { type: "image"; options: ImageOptions } {
  return block.type === "image";
}

export function isSpaceBlock(block: Block): block is { type: "space"; lines: number } {
  return block.type === "space";
}
