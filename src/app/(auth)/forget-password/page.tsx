import { ForgetPasswordForm } from './components/ForgetPasswordForm';
import { Logo } from '@/components/Logo';

export default function ForgetPasswordPage() {
  return (
    <>
      <Logo scale="lg" />
      <div className="flex flex-col justify-center">
        <h1 className="font-medium text-2xl text-center">Esqueceu a senha?</h1>
        <p className="text-center">Redefina a senha em duas etapas</p>
      </div>
      <div className="w-full max-w-sm mt-8">
        <ForgetPasswordForm />
      </div>
    </>
  );
}
