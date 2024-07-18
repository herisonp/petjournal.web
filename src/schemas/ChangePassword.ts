import { z } from 'zod';

export const ChangePasswordSchema = z.object({
  password: z.string()
    .min(6, {message: 'A senha deve conter no mínimo 6 caracteres.'})
    .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número.' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'A senha deve conter pelo menos um caractere especial.' }),
  passwordConfirmation: z.string()
    .min(6, {message: 'A senha deve conter no mínimo 6 caracteres.'})
    .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número.' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'A senha deve conter pelo menos um caractere especial.' }),
  confirmationAction: z.boolean().refine(confirmation => confirmation === true, {
    message: 'Você deve marcar esta opção para continuar.',
  }),
}).refine(data => data.password === data.passwordConfirmation, {
  message: "As senhas estão diferentes, verifique!",
  path: ["passwordConfirmation"],
});

export type ChangePasswordType = z.infer<typeof ChangePasswordSchema>;
