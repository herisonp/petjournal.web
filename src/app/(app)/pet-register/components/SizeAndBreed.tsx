'use client';
import { Button } from '@/components/Button';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { PetRegisterContext } from '../context/PetRegisterContext';
import { usePetRegisterSteps } from './usePetRegisterSteps';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select';
import { ScrollArea } from '@/components/ScrollArea';

export function SizeAndBreed() {
  const { newPet, breeds, sizes } = useContext(PetRegisterContext);
  const { error, clickNextStep, clickPreviousStep, setError, pet, setPet } =
    usePetRegisterSteps();

  function handleClickNextStep() {
    if (!pet.size || !pet.breedName) {
      clickNextStep(null);
      return;
    }
    clickNextStep({
      ...newPet,
      size: pet.size,
      breedName: pet.breedName,
    });
  }

  function handleClickPreviousStep() {
    setError(false);
    clickPreviousStep();
  }

  function handleOnChangeSize(evt: ChangeEvent<HTMLSelectElement>) {
    setError(false);
    const { value } = evt.target;

    setPet((state) => ({
      ...state,
      size: value,
    }));
  }

  function handleOnChangeBreed(evt: ChangeEvent<HTMLSelectElement>) {
    setError(false);
    const { value } = evt.target;

    setPet((state) => ({
      ...state,
      breedName: value,
    }));
  }

  return (
    <>
      <h3 className="text-xl font-medium text-left text-studio-600 w-full">
        <span className="block">Nos conte mais!</span>
        <span className="block">Qual a raça de {pet.petName}?</span>
      </h3>

      {breeds && sizes && (
        <div className="w-full flex flex-col gap-8">
          <label className="flex flex-col gap-1">
            <span>Porte</span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Porte do seu pet" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <ScrollArea className="h-[150px] mr-1">
                    {sizes.map((size) => (
                      <SelectItem key={size.id} value={size.name}>
                        {size.name}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectGroup>
              </SelectContent>
            </Select>
          </label>

          <label className="flex flex-col gap-1">
            <span>Raça</span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Porte do seu pet" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <ScrollArea className="h-[150px] mr-1">
                    {breeds.map((breed) => (
                      <SelectItem key={breed.id} value={breed.name}>
                        {breed.name}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectGroup>
              </SelectContent>
            </Select>
          </label>
        </div>
      )}

      {!pet.specieName && (
        <div>
          Você não tem uma espécie definida. Volte para definir uma espécie de
          seu Pet.
        </div>
      )}

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
