'use client';
import { Button } from '@/components/Button';
import { ChangeEvent, useContext } from 'react';
import { PetRegisterContext } from '../context/PetRegisterContext';
import { usePetRegisterSteps } from './usePetRegisterSteps';

export function DateBirth() {
  const { newPet } = useContext(PetRegisterContext);
  const { error, clickPreviousStep, setError, pet, setPet, sendNewPet } =
    usePetRegisterSteps();

  async function handleClickNextStep() {
    setError(false);
    if (!pet.dateOfBirth) {
      sendNewPet(null);
      return;
    }
    await sendNewPet({
      ...newPet,
      dateOfBirth: new Date(pet.dateOfBirth),
    });
  }

  function handleClickPreviousStep() {
    setError(false);
    clickPreviousStep();
  }

  function handleOnChangeDateOfBirth(evt: ChangeEvent<HTMLInputElement>) {
    setError(false);
    const { value } = evt.target;

    setPet((state) => ({
      ...state,
      dateOfBirth: value,
    }));
  }

  return (
    <>
      <h3 className="text-xl font-medium text-left text-studio-600 w-full">
        Qual a data de nascimento de {pet.petName}?
      </h3>

      <p className="flex flex-col gap-4 text-zinc-800">
        <span className="block">
          Caso {pet.petName} tenha sido adotado, e você não saiba a data certa,
          não se preocupe!
        </span>

        <span className="block">
          Você pode adicionar apenas a data aproximada que você se lembra!
        </span>
      </p>

      <div className="w-full">
        <label className="flex flex-col gap-2">
          <span>Data de nascimento</span>
          <input
            type="date"
            name="dateOfBirth"
            defaultValue={pet.dateOfBirth as string}
            onChange={handleOnChangeDateOfBirth}
          />
        </label>
      </div>

      {error && (
        <span className="text-red-400 text-sm text-center">
          Selecione e preencha todas as informações
        </span>
      )}

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
