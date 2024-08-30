'use client';
import { Logo } from '@/components/Logo';
import { useContext, useEffect } from 'react';
import { PetRegisterContext } from '../context/PetRegisterContext';
import { DateBirth } from './DateBirth';
import { DefaultScreen } from './DefaultScren';
import { NameAndGender } from './NameAndGender';
import { SizeAndBreed } from './SizeAndBreed';
import { Specie } from './Specie';

export function PetRegister() {
  const { step, setMaxStep } = useContext(PetRegisterContext);
  const stepsPage = [
    DefaultScreen,
    Specie,
    NameAndGender,
    SizeAndBreed,
    DateBirth,
  ];

  const SelectedPage = stepsPage[step];

  useEffect(() => {
    setMaxStep(stepsPage.length - 1);
  }, [stepsPage, setMaxStep]);

  return (
    <div className='bg-gray-100 px-4 pt-6 absolute inset-0 w-full h-fit min-h-screen'>
      <div className='fixed inset-0 h-fit w-full p-4 bg-gray-100 shadow flex justify-center items-center'>
        <Logo />
      </div>
      <section className='h-fit min-h-[90vh] pt-14 pb-16 flex flex-col items-center gap-8'>
        <SelectedPage />
      </section>
    </div>
  );
}
