import { z } from 'zod';

export const ChangePasswordSchema = z.object({
  password: z.string()
    .min(8, {message: 'Senha inválida.'})
    .regex(/[a-z]/, 'Senha inválida')
    .regex(/[A-Z]/, 'Senha inválida')
    .regex(/[0-9]/, 'Senha inválida')
    .regex(/[@$!%*?&#]/, 'Senha inválida')
    .trim(),
  passwordConfirmation: z.string()
    .min(6, {message: 'Senha inválida.'})
    .regex(/[a-z]/, 'Senha inválida')
    .regex(/[A-Z]/, 'Senha inválida')
    .regex(/[0-9]/, 'Senha inválida')
    .regex(/[@$!%*?&#]/, 'Senha inválida')
    .trim(),
  confirmationAction: z.boolean().refine(confirmation => confirmation === true, {
    message: 'Você deve marcar esta opção para continuar.',
  }),
}).refine(data => data.password === data.passwordConfirmation, {
  message: "As senhas estão diferentes, verifique!",
  path: ["passwordConfirmation"],
});

export type ChangePasswordProps = z.infer<typeof ChangePasswordSchema>;
