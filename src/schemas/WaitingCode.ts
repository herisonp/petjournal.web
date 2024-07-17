import { z } from 'zod';

export const WaitingCodeSchema = z.object({
  verificationToken: z.string().min(6, {message: 'Preencha todos os campos'})
})

export type WaitingCodeType = z.infer<typeof WaitingCodeSchema>;
