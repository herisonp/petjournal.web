'use client';
import { Button } from '@/components/Button';
import { InputMessage } from '@/components/Fields/InputMessage';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/Fields/InputOPT';
import { WaitingCodeProps, WaitingCodeSchema } from '@/schemas/WaitingCode';
import { submitForgetPassword } from '@/services/submitForgetPassword';
import { submitWaitingCode } from '@/services/submitWaitingCode';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function WaitingCodeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isResendCode, setIsResendCode] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get('email');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitingCodeProps>({
    resolver: zodResolver(WaitingCodeSchema),
    criteriaMode: 'firstError',
    reValidateMode: 'onChange',
    defaultValues: { verificationToken: '' },
    mode: 'onBlur',
  });

  async function handleSubmitCode({ verificationToken }: WaitingCodeProps) {
    try {
      setIsLoading(true);
      if (!email) throw new Error('Um email é requerido');
      const { error } = await submitWaitingCode({
        email,
        code: verificationToken,
      });
      if (error) throw new Error(error);
      router.push('/change-password');
    } catch (error) {
      const err = error as Error;
      setErrorMessage(err.message);
      setIsLoading(false);
    }
  }

  async function handleResendCode() {
    try {
      setIsLoading(true);
      if (!email) return;
      const { error } = await submitForgetPassword({ email });
      if (error) throw new Error(error);
      setIsResendCode(true);

      setTimeout(() => {
        setIsResendCode(false);
      }, 10000);
    } catch (error) {
      const err = error as Error;
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  console.log(errors.verificationToken);

  return (
    <form
      onSubmit={handleSubmit(handleSubmitCode)}
      className='flex flex-col gap-4'
    >
      <div className='flex flex-col'>
        <Controller
          name='verificationToken'
          control={control}
          render={({ field }) => (
            <InputOTP
              minLength={6}
              maxLength={6}
              value={field.value}
              onChange={field.onChange}
            >
              <InputOTPGroup className='flex justify-center w-full gap-2'>
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

        <div className='text-center mt-1'>
          {errors.verificationToken && (
            <InputMessage
              variant='error'
              message={errors.verificationToken.message}
            />
          )}
          {errorMessage && !errors.verificationToken && (
            <InputMessage variant='error' message={errorMessage} />
          )}
          {isResendCode && (
            <InputMessage
              variant='warning'
              message={`Novo código enviado ao ${email}`}
            />
          )}
        </div>

        <Button
          onClick={handleResendCode}
          variant='ghost'
          className='underline self-start text-xs mt-1'
          type='button'
          disabled={isLoading}
        >
          Reenviar código?
        </Button>
      </div>

      <Button className='mt-4' type='submit' disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar'}
      </Button>
      <p className='text-center'>
        Dica: Caso não encontre o e-mail na sua caixa de entrada, verifique a
        pasta de Spam!
      </p>
    </form>
  );
}
