import { Button } from '@/components/Button';
import { useContext } from 'react';
import { PetRegisterContext } from '../context/PetRegisterContext';

export function DateBirth() {
  const { nextStep, previousStep } = useContext(PetRegisterContext);

  function handleClickNextStep() {
    nextStep();
  }
  function handleClickPreviousStep() {
    previousStep();
  }

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-bold text-center text-custom-purple">
        Olá, {'{Usuário}'}, gostaríamos de saber qual a espécie do seu Pet:
      </h3>
      <p className="text-lg text-center text-custom-purple">DateBirth</p>

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
