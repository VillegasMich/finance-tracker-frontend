import { z } from "zod";

export const LoginUser = z.object({
  emailOrUsername: z.string(),
  password: z.string(),
});

