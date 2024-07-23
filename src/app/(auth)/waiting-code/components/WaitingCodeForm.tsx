'use client';
import { Button } from '@/components/Button';
import { InputMessage } from '@/components/Fields/InputMessage';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/Fields/InputOPT';
import { WaitingCodeSchema, WaitingCodeProps } from '@/schemas/WaitingCode';
import { submitForgetPassword } from '@/services/submitForgetPassword';
import { submitWaitingCode } from '@/services/submitWaitingCode';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

export function WaitingCodeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isResendCode, setIsResendCode] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get('email');
  const { control, register, handleSubmit, formState: { errors } } = useForm<WaitingCodeProps>({
    resolver: zodResolver(WaitingCodeSchema),
    criteriaMode: 'firstError',
    reValidateMode: 'onChange',
    mode: 'onBlur',
  });

  async function handleSubmitCode({ verificationToken }: WaitingCodeProps) {
    try {
      setIsLoading(true);
      if (!email) throw 'Um email é requerido';
      const { error } = await submitWaitingCode({
        email,
        code: verificationToken,
      });
      if (error) throw new Error(error);
      router.push('/change-password');
    } catch (error) {
      const err = error as Error
      setErrorMessage(err.message);
      setIsLoading(false);
    }
  }

  async function handleResendCode() {
    try {
      setIsLoading(true);
      if (!email) return
      const { error } = await submitForgetPassword({ email });
      if (error) throw error;
      setIsResendCode(true);

      setTimeout(() => {
        setIsResendCode(false);
      }, 10000);
    } catch (error: any) {
      setErrorMessage(error)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitCode)} className="flex flex-col gap-4">
      <div className="flex justify-center overflow-hidden">
        <Controller
          name="verificationToken"
          control={control}
          render={({ field }) => (
            <InputOTP
              maxLength={6}
              value={field.value}
              onChange={field.onChange}
              className="flex items-center justify-center"
            >
              <InputOTPGroup className="flex justify-between gap-2">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          )}
        />
      </div>

      {errors.verificationToken && <InputMessage className='text-center' variant='error' message={errors.verificationToken.message} />}
      {errorMessage && !errors.verificationToken && <InputMessage className='text-center' variant='error' message={errorMessage} />}
      {isResendCode && <InputMessage className='text-center' variant='warning' message={`Novo código enviado ao ${email}`}/>}

      <Button
        onClick={handleResendCode}
        variant="ghost"
        className="underline self-start"
        type="button"
        disabled={isLoading}
      >
        Reenviar código?
      </Button>


      <Button className="mt-4" type="submit" disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar'}
      </Button>
      <p className="text-center">
        Dica: Caso não encontre o e-mail na sua caixa de entrada, verifique a
        pasta de spam!
      </p>
    </form>
  );
}
