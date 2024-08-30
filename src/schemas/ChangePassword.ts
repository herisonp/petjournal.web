import { z } from 'zod';

export const ChangePasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'A senha deve ter, no mínimo, 8 caracteres')
      .regex(/[a-z]/, 'Deve conter pelo menos uma letra minúscula')
      .regex(/[A-Z]/, 'Deve conter pelo menos uma letra maiúscula')
      .regex(/[0-9]/, 'Deve conter pelo menos um número')
      .regex(
        /[@$!%*?&#]/,
        'A senha deve conter pelo menos um símbolo especial (@, $, !, %, *, ?, &, #).',
      )
      .trim(),
    passwordConfirmation: z
      .string()
      .min(8, 'A senha deve ter, no mínimo, 8 caracteres')
      .regex(/[a-z]/, 'Deve conter pelo menos uma letra minúscula')
      .regex(/[A-Z]/, 'Deve conter pelo menos uma letra maiúscula')
      .regex(/[0-9]/, 'Deve conter pelo menos um número')
      .regex(
        /[@$!%*?&#]/,
        'A senha deve conter pelo menos um símbolo especial (@, $, !, %, *, ?, &, #).',
      )
      .trim(),
    confirmationAction: z
      .boolean()
      .refine(confirmation => confirmation === true, {
        message: 'Você deve marcar esta opção para continuar.',
      }),
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: 'As senhas estão diferentes, verifique!',
    path: ['passwordConfirmation'],
  });

export type ChangePasswordProps = z.infer<typeof ChangePasswordSchema>;
