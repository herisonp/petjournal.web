'use client';

import { api } from '@/services/api';
import { getPets } from '@/services/getPets';
import { Pet } from '@/types/PetsTypes';
import { createContext, useEffect, useState } from 'react';

interface PetsContextProps {
  pets: Pet['View'][] | null;
  submitNewPet: (pet: Pet['View']) => void;
  submitUpdatePet: (pet: Pet['View']) => void;
}

export const PetsContext = createContext({} as PetsContextProps);

export function PetsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pets, setPets] = useState<Pet['View'][] | null>(null);

  function submitNewPet(pet: Pet['View']) {
    console.log(pet);
    setPets((state) => {
      if (!state) return [pet];
      return [pet, ...state];
    });
  }

  function submitUpdatePet(pet: Pet['View']) {
    console.log(pet);
    setPets((state) => {
      if (!state) return null;
      return state.map((item) => {
        if (item.id === pet.id) {
          return pet;
        }
        return item;
      });
    });
  }

  useEffect(() => {
    (async () => {
      const data = await getPets();
      if (!data) return;
      setPets(data);
    })();
  }, []);

  return (
    <PetsContext.Provider
      value={{
        pets,
        submitNewPet,
        submitUpdatePet,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
}
