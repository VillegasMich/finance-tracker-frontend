import z from "zod";

export const ExpenseModel = z.object({
  id: z.number(),
  description: z.string(),
  amount: z.number(),
  category: z.string().nullable(),
  createdAt: z.string(),
})

export const ExpenseModels = z.array(ExpenseModel);

