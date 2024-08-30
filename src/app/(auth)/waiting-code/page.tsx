import { WaitingCodeForm } from './components/WaitingCodeForm';
import { Suspense } from 'react';
import { Logo } from '@/components/Logo';

export default function WaitingCodePage() {
  return (
    <>
      <Logo scale='md' />
      <div className='flex flex-col justify-center gap-6 mt-10'>
        <h1 className='font-medium text-xl text-center'>
          Acabamos de enviar um código para seu e-mail
        </h1>
        <p className='text-[15px] text-center'>
          Insira no campo abaixo o código de verificação de 6 digitos enviado
          para o seu email.
        </p>
      </div>
      <div className='w-full max-w-sm m-auto'>
        <Suspense>
          <WaitingCodeForm />
        </Suspense>
      </div>
    </>
  );
}
