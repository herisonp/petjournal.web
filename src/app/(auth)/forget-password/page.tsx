import Image from 'next/image';
import { ForgetPasswordForm } from './components/ForgetPasswordForm';

export default function ForgetPasswordPage() {
  return (
    <>
      <Image
        src="/images/logo.svg"
        alt="Pet Journal Logo"
        width={158}
        height={158}
      />
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
