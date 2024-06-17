'use client';
import { useRouter } from 'next/navigation';
import { PetsContext } from '@/context/PetsContext';
import { Pet } from '@/types/PetsTypes';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface PetRegisterContextProps {
  step: number;
  newPet: Pet['Insert'];
  nextStep: () => void;
  previousStep: () => void;
  setMaxStep: Dispatch<SetStateAction<number>>;
  incrementPetNewsValues: (pet: Pet['Insert']) => void;
}

export const PetRegisterContext = createContext({} as PetRegisterContextProps);

export function PetRegisterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { pets } = useContext(PetsContext);
  const [step, setStep] = useState(0);
  const [maxStep, setMaxStep] = useState(4);
  const [firstPet, setFirstPet] = useState(false);
  const [newPet, setNewPet] = useState<Pet['Insert']>({
    petName: '',
    size: '',
    gender: '',
    specieName: '',
    breedName: '',
    castrated: false,
  });

  function nextStep() {
    if (step >= maxStep) return;
    setStep((state) => state + 1);
  }

  function previousStep() {
    const firstPage = firstPet ? 0 : 1;
    if (step <= firstPage) {
      if (firstPet) {
        router.push('/');
        return;
      }
      router.push('/pets');
      return;
    }
    setStep((state) => state - 1);
  }

  function incrementPetNewsValues(pet: Pet['Insert']) {
    setNewPet((state) => ({
      ...state,
      pet,
    }));
  }

  useEffect(() => {
    if (pets) {
      setFirstPet(false);
      setStep(1);
      return;
    }
    setStep(0);
    setFirstPet(true);
  }, [pets]);

  return (
    <PetRegisterContext.Provider
      value={{
        newPet,
        step,
        nextStep,
        previousStep,
        setMaxStep,
        incrementPetNewsValues,
      }}
    >
      {children}
    </PetRegisterContext.Provider>
  );
}
