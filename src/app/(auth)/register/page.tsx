import Link from 'next/link';
import { RegisterForm } from './components/RegisterForm';
import { Logo } from '@/components/Logo';

export default function RegisterPage() {
  return (
    <>
      <Logo scale='md' />
      <h1 className="font-medium text-2xl mt-3">Inscreva-se</h1>
      <div className="w-full max-w-sm mt-10">
        <RegisterForm />
        <p className="text-center text-sm font-medium mt-6">
          Já tem uma conta?{' '}
          <Link href="/login" className="underline">
            Faça login aqui.
          </Link>
        </p>
      </div>
    </>
  );
}
