import Link from 'next/link';
import { RegisterForm } from './components/RegisterForm';
import { Logo } from '@/components/Logo';

export default function RegisterPage() {
  return (
    <>
      <Logo scale='default' />
      <h1 className="font-medium text-2xl mt-10">Inscreva-se</h1>
      <div className="w-full max-w-sm mt-10">
        <RegisterForm />
        <p className="text-center text-xs font-medium mt-6">
          Já tem uma conta?{' '}
          <Link href="/login">
            Faça login aqui.
          </Link>
        </p>
      </div>
    </>
  );
}
