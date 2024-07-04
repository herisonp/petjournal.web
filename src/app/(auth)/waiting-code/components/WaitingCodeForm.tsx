'use client';
import { Button } from '@/components/Button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/Fields/InputOPT';
import { submitWaitingCode } from '@/services/submitWaitingCode';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useMemo, useState } from 'react';

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
      <Link href="/forget-password" className="underline">
        Reenviar código?
      </Link>

      <Button
        className="mt-4"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Enviando...' : 'Enviar'}
      </Button>
      <p className="text-center">
        Dica: Caso não encontre o e-mail na sua caixa de entrada, verifique a
        pasta de spam!
      </p>
    </form>
  );
}
