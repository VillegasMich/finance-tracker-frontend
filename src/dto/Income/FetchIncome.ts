import z from "zod";

export const FetchIncome = z.object({
  id: z.number(),
  amount: z.number(),
  description: z.string(),
  category: z.string().nullable(),
  createdAt: z.string(),
})

export const FetchIncomes = z.array(FetchIncome);
