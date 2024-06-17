import { Button } from '@/components/Button';
import { useContext } from 'react';
import { PetRegisterContext } from '../context/PetRegisterContext';

export function SizeAndBreed() {
  const { nextStep, previousStep } = useContext(PetRegisterContext);

  function handleClickNextStep() {
    nextStep();
  }
  function handleClickPreviousStep() {
    previousStep();
  }

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-medium text-left text-studio-600">
        <span className="block">Nos conte mais!</span>
        <span className="block">Qual a raça de {'{nome_pet}'}?</span>
      </h3>
      <div>content...</div>

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
