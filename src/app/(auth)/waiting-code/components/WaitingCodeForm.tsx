'use client';
import { Button } from '@/components/Button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/Fields/InputOPT';
import { submitForgetPassword } from '@/services/submitForgetPassword';
import { submitWaitingCode } from '@/services/submitWaitingCode';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

export function WaitingCodeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('');
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get('email');

  async function handleSubmitCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const isEmpty = code.length >= 6;
      if (!isEmpty) throw 'Preencha todos os campos!';
      if (!email) throw 'Um email é requerido';
      const { error } = await submitWaitingCode({
        email,
        code,
      });
      if (error) throw error;
      router.push('/change-password');
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleResendCode() {
    try {
      setIsLoading(true);
      if (!email) {
        return;
      }
      const { error } = await submitForgetPassword({ email });
      if (error) throw error;
      alert(`Novo código enviado ao ${email}`);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmitCode} className="flex flex-col gap-4">
      <div className="flex justify-center overflow-hidden">
        <InputOTP
          maxLength={6}
          value={code}
          onChange={setCode}
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
      </div>
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
