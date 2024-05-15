import Image from 'next/image';
import { WaitingCodeForm } from './components/WaitingCodeForm';

export default function WaitingCodePage() {
  return (
    <>
      <Image
        src="/images/logo.svg"
        alt="Pet Journal Logo"
        width={158}
        height={158}
      />
      <div className="flex flex-col justify-center gap-4">
        <h1 className="font-medium text-2xl text-center">
          Acabamos de enviar um código para seu e-mail
        </h1>
        <p className="text-center">
          Insira no campo abaixo o código de verificação de 6 digitos enviado
          para o seu email.
        </p>
      </div>
      <div className="w-full max-w-sm mt-8">
        <WaitingCodeForm />
      </div>
    </>
  );
}
