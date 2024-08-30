import { z } from 'zod';

export const ForgetPasswordSchema = z.object({
  email: z.string().email({ message: 'Email inválido.' }),
});

export type ForgetPasswordProps = z.infer<typeof ForgetPasswordSchema>;
