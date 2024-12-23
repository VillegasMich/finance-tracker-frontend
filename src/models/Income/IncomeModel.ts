import { z } from "zod";

export const IncomeModel = z.object({
  id: z.number(),
  description: z.string(),
  amount: z.number(),
  category: z.string().nullable(),
  createdAt: z.string(),
})

export const IncomeModels = z.array(IncomeModel);

