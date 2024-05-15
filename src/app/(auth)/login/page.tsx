import Image from 'next/image';
import Link from 'next/link';
import { LoginForm } from './components/LoginForm';

export default function LoginPage() {
  return (
    <>
      <Image
        src="/images/logo.svg"
        alt="Pet Journal Logo"
        width={158}
        height={158}
      />
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
