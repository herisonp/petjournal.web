import Link from 'next/link';
import { LoginForm } from './components/LoginForm';
import { Logo } from '@/components/Logo';

export default function LoginPage() {
  return (
    <>
      <Logo scale='lg' />
      <h1 className="font-medium text-2xl">Acessar conta</h1>
      <div className="w-full max-w-sm m-auto">
        <LoginForm />
        <p className="text-center mt-6">
          Não tem uma conta?{' '}
          <Link href="/register" className="underline">
            Inscreva-se
          </Link>
        </p>
      </div>
    </>
  );
}
