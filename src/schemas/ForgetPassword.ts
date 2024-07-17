import { z } from 'zod';

export const ForgetPasswordSchema = z.object({
  email: z.string().email({ message: 'Email precisa ser válido.' })
})

export type ForgetPasswordType = z.infer<typeof ForgetPasswordSchema>;
