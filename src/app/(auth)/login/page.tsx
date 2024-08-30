import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { LoginForm } from './components/LoginForm';

export default function LoginPage() {
  return (
    <>
      <Logo scale='md' />
      <h1 className='font-medium text-2xl mt-10'>Acessar conta</h1>
      <div className='w-full max-w-sm m-auto'>
        <LoginForm />
        <p className='text-center text-xs font-medium mt-6'>
          Não tem uma conta? <Link href='/register'>Inscrever-se</Link>
        </p>
      </div>
    </>
  );
}
