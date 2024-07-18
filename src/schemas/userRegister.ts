import { z } from 'zod';

export const userRegisterSchema = z.object({
  firstName: z
    .string()
    .min(2, 'O nome deve conter, no mínimo, dois caracteres'),
  lastName: z.string().min(2, 'O nome deve conter, no mínimo, dois caracteres'),
  email: z.string().email('Email inválido'),
  password: z
    .string()
    .min(8, 'A senha deve ter, no mínimo, 8 caracteres')
    .regex(/[a-z]/, 'Deve conter pelo menos uma letra minúscula')
    .regex(/[A-Z]/, 'Deve conter pelo menos uma letra maiúscula')
    .regex(/[0-9]/, 'Deve conter pelo menos um número')
    .regex(/[@$!%*?&#]/, {
      message:
        'A senha deve conter pelo menos um símbolo especial (@, $, !, %, *, ?, &, #).',
    })
    .trim(),
  passwordConfirmation: z
    .string()
    .min(8, 'A senha deve ter, no mínimo, 8 caracteres')
    .regex(/[a-z]/, 'Deve conter pelo menos uma letra minúscula')
    .regex(/[A-Z]/, 'Deve conter pelo menos uma letra maiúscula')
    .regex(/[0-9]/, 'Deve conter pelo menos um número')
    .regex(/[@$!%*?&#]/, {
      message:
        'A senha deve conter pelo menos um símbolo especial (@, $, !, %, *, ?, &, #).',
    })
    .trim(),
  phone: z
    .string()
    .min(10, 'Número de telefone deve ter no mínimo 10 dígitos.')
    .max(11, 'Número de telefone deve ter no máximo 11 dígitos.')
    .regex(
      /^\d{10,11}$/,
      'Número de telefone inválido. Deve conter apenas dígitos e ter 10 ou 11 números.',
    ),
    isPrivacyPolicyAccepted: z.boolean().refine(val => val === true, {
      message: "Você deve aceitar a política de privacidade.",
    }),
});

export type UserRegisterProps = z.infer<typeof userRegisterSchema>;
