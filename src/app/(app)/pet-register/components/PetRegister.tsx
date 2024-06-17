'use client';
import { useContext, useEffect, useState } from 'react';
import { DefaultScreen } from './DefaultScren';
import { Specie } from './Specie';
import { NameAndGender } from './NameAndGender';
import { SizeAndBreed } from './SizeAndBreed';
import { DateBirth } from './DateBirth';
import { PetRegisterContext } from '../context/PetRegisterContext';

export function PetRegister() {
  const { step, setMaxStep } = useContext(PetRegisterContext);
  const [steps, setSteps] = useState([
    DefaultScreen,
    Specie,
    NameAndGender,
    SizeAndBreed,
    DateBirth,
  ]);

  const SelectedPage = steps[step];

  useEffect(() => {
    setMaxStep(steps.length - 1);
  }, [steps, setMaxStep]);

  return (
    <div className="bg-gray-100 fixed inset-0 z-20 pb-16 w-full min-h-screen overflow-y-auto">
      <div className="fixed w-full p-4 bg-gray-100 shadow">
        <h2 className="text-base text-custom-purple text-center">
          Cadastro Pet
        </h2>
      </div>

      <section className="h-full pt-20 px-5 flex flex-col gap-8">
        <SelectedPage />
      </section>
    </div>
  );
}
