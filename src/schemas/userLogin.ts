import { z } from 'zod';

export const userLoginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z
    .string()
    .min(8, 'Senha inválida')
    .regex(/[a-z]/, 'Senha inválida')
    .regex(/[A-Z]/, 'Senha inválida')
    .regex(/[0-9]/, 'Senha inválida')
    .regex(/[@$!%*?&#]/, 'Senha inválida')
    .trim(),
});

export type UserLoginProps = z.infer<typeof userLoginSchema>;
