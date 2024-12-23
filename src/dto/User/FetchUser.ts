import { z } from "zod";
import { FetchIncomes } from "../Income/FetchIncome";
import { FetchExpenses } from "../Expense/FetchExpense";

export const FetchUser = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.string(),
  expenses: FetchExpenses,
  incomes: FetchIncomes,
})

export const FetchUsers = z.array(FetchUser);
