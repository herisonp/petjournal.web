'use client';
import { getPets } from '@/services/getPets';
import { Pet } from '@/types/PetsTypes';
import { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import { deletePet } from '@/services/deletePet';

interface PetsContextProps {
  pets: Pet['View'][] | null;
  submitNewPet: (pet: Pet['View']) => void;
  submitUpdatePet: (pet: Pet['View']) => void;
  submitDeletePet: (pet: Pet['View']) => void;
}

export const PetsContext = createContext({} as PetsContextProps);

export function PetsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pets, setPets] = useState<Pet['View'][] | null>(null);
  const { user } = useContext(UserContext);

  function submitNewPet(pet: Pet['View']) {
    setPets((state) => {
      if (!state) return [pet];
      return [...state, pet];
    });
  }

  function submitUpdatePet(pet: Pet['View']) {
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

  async function submitDeletePet(pet: Pet['View']) {
    const deletedPet = await deletePet(pet.id);
    if (!deletedPet) return null
    setPets((state) => {
      if (!state) return null;
      return state.filter((item) => item.id !== pet.id);
    });
  }

  useEffect(() => {
    (async () => {
      const data = await getPets();
      if (!user || !data) {
        setPets(null);
        return;
      }
      setPets(data);
    })();
  }, [user]);

  return (
    <PetsContext.Provider
      value={{
        pets,
        submitNewPet,
        submitUpdatePet,
        submitDeletePet
      }}
    >
      {children}
    </PetsContext.Provider>
  );
}
