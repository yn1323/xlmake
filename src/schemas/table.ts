import { z } from "zod";
import { columnsSchema } from "./column";
import { borderStyleSchema, tableStyleSchema } from "./style";

// TablePreset
const tablePresetSchema = z.enum(["basic", "minimal", "striped"]);

// AutoWidthOption
const autoWidthOptionSchema = z.union([z.enum(["all", "body"]), z.literal(false)]);

// TableOptions（ジェネリック型を外す）
export const tableOptionsSchema = z
  .object({
    preset: tablePresetSchema.optional(),
    columns: columnsSchema,
    data: z.array(z.record(z.string(), z.any())),
    autoWidth: autoWidthOptionSchema.optional(),
    mergeSameValues: z.boolean().optional(),
    style: tableStyleSchema.optional(),
    border: borderStyleSchema.optional(),
  })
  .strict();
