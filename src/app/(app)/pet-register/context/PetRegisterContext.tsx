'use client';
import { useRouter } from 'next/navigation';
import { PetsContext } from '@/context/PetsContext';
import { Breed, Pet, Size } from '@/types/PetsTypes';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getBreeds } from '@/services/getBreeds';
import { getSizes } from '@/services/getSizes';

interface PetRegisterContextProps {
  step: number;
  newPet: Pet['Insert'];
  nextStep: () => void;
  previousStep: () => void;
  setMaxStep: Dispatch<SetStateAction<number>>;
  incrementPetNewsValues: (pet: Pet['Insert']) => void;
  resetPetNewsValues: () => void;
  breeds: Breed[] | null;
  sizes: Size[] | null;
}

export const PetRegisterContext = createContext({} as PetRegisterContextProps);

export function PetRegisterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { pets } = useContext(PetsContext);
  const [breeds, setBreeds] = useState<Breed[] | null>(null);
  const [sizes, setSizes] = useState<Size[] | null>(null);
  const [step, setStep] = useState(pets && pets.length > 0 ? 1 : 0);
  const [firstPet, setFirstPet] = useState(
    pets && pets.length > 0 ? false : true,
  );
  const [maxStep, setMaxStep] = useState(4);
  const [newPet, setNewPet] = useState<Pet['Insert']>({
    petName: '',
    size: '',
    gender: '',
    specieName: '',
    breedName: '',
    dateOfBirth: '',
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
      ...pet,
    }));
  }

  function resetPetNewsValues() {
    setNewPet({
      petName: '',
      size: '',
      gender: '',
      specieName: '',
      breedName: '',
      dateOfBirth: '',
      castrated: false,
    });
  }

  useEffect(() => {
    (async () => {
      if (!newPet.specieName) {
        return;
      }
      const breedsData = await getBreeds(newPet.specieName);
      const sizesData = await getSizes(newPet.specieName);
      if (!breedsData || !sizesData) {
        setBreeds(null);
        setSizes(null);
        return;
      }
      setBreeds(breedsData);
      setSizes(sizesData);
    })();
  }, [newPet.specieName]);

  return (
    <PetRegisterContext.Provider
      value={{
        newPet,
        step,
        nextStep,
        previousStep,
        setMaxStep,
        incrementPetNewsValues,
        resetPetNewsValues,
        breeds,
        sizes,
      }}
    >
      {children}
    </PetRegisterContext.Provider>
  );
}
