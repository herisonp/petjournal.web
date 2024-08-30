import { ForgetPasswordForm } from './components/ForgetPasswordForm';
import { Logo } from '@/components/Logo';

export default function ForgetPasswordPage() {
  return (
    <>
      <Logo scale='md' />
      <div className='flex flex-col items-center mt-10'>
        <h1 className='font-medium text-2xl'>Esqueceu a senha?</h1>
        <p className='font-light'>Redefina a senha em duas etapas</p>
      </div>
      <div className='w-full max-w-sm m-auto'>
        <ForgetPasswordForm />
      </div>
    </>
  );
}
