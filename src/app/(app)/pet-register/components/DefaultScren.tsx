import { Button } from '@/components/Button';
import Image from 'next/image';
import { useContext } from 'react';
import { PetRegisterContext } from '../context/PetRegisterContext';

export function DefaultScreen() {
  const { nextStep, previousStep } = useContext(PetRegisterContext);

  function handleClickNextStep() {
    nextStep();
  }
  function handleClickPreviousStep() {
    previousStep();
  }

  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-center text-custom-purple">
          Olá, {'{Usuário}'}!
        </h3>
        <p className="text-lg text-center text-custom-purple">
          Sabemos o quanto o seu pet é especial, e estamos muito animados em
          recebê-los, venha se juntar a nossa comunidade de amantes de Pets,
          para melhor aproveitar a nossa plataforma.
        </p>
      </div>

      <Image
        src="images/pets-illustration.svg"
        alt="Pets ilustração"
        width={540}
        height={540}
        className="w-3/4 h-auto object-cover"
      />

      <div className="mt-auto w-full flex justify-around">
        <Button
          variant="outline"
          className="border-custom-purple text-custom-purple"
          onClick={handleClickPreviousStep}
        >
          Voltar
        </Button>
        <Button onClick={handleClickNextStep}>Continuar</Button>
      </div>
    </div>
  );
}
