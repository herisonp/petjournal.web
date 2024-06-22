import Image from 'next/image';
import Link from 'next/link';
import { FormEvent } from 'react';
import { RegisterForm } from './components/RegisterForm';
import { Logo } from '@/components/Logo';

export default function RegisterPage() {
  function submitRegister(form: FormEvent<HTMLFormElement>) {}

  return (
    <>
      <Logo scale='md' />
      <h1 className="font-medium text-2xl">Inscreva-se</h1>
      <div className="w-full max-w-sm">
        <RegisterForm />
        <p className="text-center mt-6">
          Já tem uma conta?{' '}
          <Link href="/login" className="underline">
            Faça login aqui.
          </Link>
        </p>
      </div>
    </>
  );
}
