import { z } from "zod";
import { IncomeModels } from "../Income/IncomeModel";
import { ExpenseModels } from "../Expense/ExpenseModel";

export const UserModel = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.string(),
  incomes: IncomeModels,
  expenses: ExpenseModels,
})

export const UserModels = z.array(UserModel);

