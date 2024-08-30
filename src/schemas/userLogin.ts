import { z } from 'zod';

export const userLoginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Senha inválida').trim(),
});

export type UserLoginProps = z.infer<typeof userLoginSchema>;
