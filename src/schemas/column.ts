import { z } from "zod";
import { cellStyleSchema } from "./style";

// LeafColumn（ジェネリック型パラメータを外す）
const leafColumnSchema = z
  .object({
    key: z.string(),
    label: z.string(),
    style: cellStyleSchema.optional(),
    mergeSameValues: z.boolean().optional(),
  })
  .strict();

// 再帰型の定義
export type ColumnShape = {
  key?: string;
  label: string;
  children?: ColumnShape[];
};

// ParentColumn（再帰的な定義）
const parentColumnSchema: z.ZodType<{
  label: string;
  children: ColumnShape[];
}> = z.lazy(() =>
  z
    .object({
      label: z.string(),
      children: z.array(columnSchema).nonempty(),
    })
    .strict(),
);

// Column（Union型）
export const columnSchema = z.union([leafColumnSchema, parentColumnSchema]);

// 配列のバリデーション
export const columnsSchema = z.array(columnSchema).nonempty();
