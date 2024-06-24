'use client';
import { useContext, useEffect, useState } from 'react';
import { PetRegisterContext } from '../context/PetRegisterContext';
import { Pet } from '@/types/PetsTypes';
import { UserContext } from '@/context/UserContext';
import { submitPet } from '@/services/submitPet';
import { PetsContext } from '@/context/PetsContext';

export function usePetRegisterSteps() {
  const {
    nextStep,
    previousStep,
    newPet,
    incrementPetNewsValues,
    resetPetNewsValues,
  } = useContext(PetRegisterContext);
  const { user } = useContext(UserContext);
  const { submitNewPet } = useContext(PetsContext);
  const [error, setError] = useState(false);
  const [pet, setPet] = useState<Pet['Insert']>(newPet);

  function clickNextStep(pet: Pet['Insert'] | null) {
    setError(false);
    if (!pet) {
      setError(true);
      return;
    }
    incrementPetNewsValues({
      ...newPet,
      ...pet,
    });
    setError(false);
    nextStep();
  }

  function clickPreviousStep() {
    setError(false);
    previousStep();
  }

  async function sendNewPet(pet: Pet['Insert'] | null) {
    setError(false);
    if (!pet) {
      setError(true);
      return;
    }

    incrementPetNewsValues({
      ...newPet,
      ...pet,
    });

    const { data, error } = await submitPet(pet);

    if (error) {
      console.log('sendNewPet', error);
      return;
    }

    if (!data) {
      return;
    }

    submitNewPet(data);

    resetPetNewsValues();

    return true;
  }

  useEffect(() => {
    setPet(newPet);
  }, [newPet]);

  return {
    user,
    error,
    setError,
    pet,
    setPet,
    clickNextStep,
    clickPreviousStep,
    sendNewPet,
  };
}
