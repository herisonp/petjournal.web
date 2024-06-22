'use client';
import { Button } from '@/components/Button';
import Image from 'next/image';
import { useContext } from 'react';
import { PetRegisterContext } from '../context/PetRegisterContext';
import { usePetRegisterSteps } from './usePetRegisterSteps';

export function DefaultScreen() {
  const { nextStep, previousStep, resetPetNewsValues } =
    useContext(PetRegisterContext);
  const { user } = usePetRegisterSteps();

  function handleClickNextStep() {
    nextStep();
  }
  function handleClickPreviousStep() {
    resetPetNewsValues();
    previousStep();
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-center text-studio-600 w-full">
          Olá, {user?.firstName}!
        </h3>
        <p className="text-lg text-center text-studio-600 w-full">
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
        priority
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
    </>
  );
}
