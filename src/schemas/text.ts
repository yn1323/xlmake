import { z } from "zod";
import { cellStyleSchema } from "./style";

// StyledCell
const styledCellSchema = z
  .object({
    value: z.union([z.string(), z.number(), z.boolean()]),
    style: cellStyleSchema.optional(),
  })
  .strict();

// TextInput（Union型）
export const textInputSchema = z.union([z.string(), styledCellSchema]);
