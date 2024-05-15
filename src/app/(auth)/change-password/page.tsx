import Image from 'next/image';
import { ChangePasswordForm } from './components/ChangePasswordForm';

export default function ChangePasswordPage() {
  return (
    <>
      <Image
        src="/images/logo.svg"
        alt="Pet Journal Logo"
        width={158}
        height={158}
      />
      <h1 className="font-medium text-2xl">Criar uma nova senha?</h1>
      <div className="w-full max-w-sm mt-8">
        <ChangePasswordForm />
      </div>
    </>
  );
}
