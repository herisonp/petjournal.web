'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DefaultScreen } from './DefaultScren';
import { Specie } from './Specie';
import { NameAndGender } from './NameAndGender';
import { SizeAndBreed } from './SizeAndBreed';
import { DateBirth } from './DateBirth';

export function PetRegister({ firstPet }: { firstPet?: boolean }) {
  const { back } = useRouter();
  const [page, setPage] = useState(firstPet ? 0 : 1);
  const [newPet, setNewPet] = useState<{
    specieName?: string;
    petName?: string;
    gender?: 'M' | 'F';
    breedName?: string;
    size?: string;
    castrated?: boolean;
  }>({});

  const pages = [DefaultScreen, Specie, NameAndGender, SizeAndBreed, DateBirth];
  const SelectedPage = pages[page];

  function handleClickNextPage() {
    const lastPage = pages.length - 1;
    if (page >= lastPage) {
      return;
    }
    setPage((state) => state + 1);
  }

  function handleClickPreviousPage() {
    const firstPage = firstPet ? 0 : 1;
    if (page <= firstPage) {
      back();
      return;
    }
    setPage((state) => state - 1);
  }

  useEffect(() => {
    function setInitialPage() {
      if (firstPet) {
        setPage(0);
        return;
      }
      setPage(1);
    }

    setInitialPage();
  }, [firstPet]);

  return (
    <div className="bg-white fixed inset-0 z-20 pb-16 w-full min-h-screen overflow-y-auto">
      <div className="fixed w-full p-4 bg-white shadow">
        <h2 className="text-base text-custom-purple text-center">
          Cadastro Pet
        </h2>
      </div>

      <section className="h-full pt-20 px-5 flex flex-col gap-8 items-center justify-center">
        <SelectedPage />

        <div className="mt-auto w-full flex justify-around">
          <button
            className={`flex self-center font-medium items-center justify-center  rounded-[45px] px-11 py-3 border border-custom-purple text-custom-purple`}
            onClick={handleClickPreviousPage}
          >
            voltar
          </button>
          <button
            className={`flex self-center font-medium items-center justify-center  rounded-[45px] px-11 py-3 bg-custom-purple text-white`}
            onClick={handleClickNextPage}
          >
            Continuar
          </button>
        </div>
      </section>
    </div>
  );
}
