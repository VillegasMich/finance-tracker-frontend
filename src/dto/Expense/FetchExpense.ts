import z from "zod";

export const FetchExpense = z.object({
  id: z.number(),
  amount: z.number(),
  description: z.string(),
  category: z.string().nullable(),
  createdAt: z.string(),
})

export const FetchExpenses = z.array(FetchExpense);
