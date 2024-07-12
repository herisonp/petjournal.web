'use client';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { PetsContext } from '@/context/PetsContext';

import PetIcon from '@/assets/svg/petIcon.svg';
import MyPets from '@/assets/svg/MyPets.svg';

import Image from 'next/image';
import { AddPet } from './components/AddPet';
import { CardPet } from './components/CardPet';

export default function PetsPage() {
  const { pets } = useContext(PetsContext);
  const router = useRouter();

  useEffect(() => {
    if (!pets || pets.length <= 0) {
      router.push('/pet-register');
    }
  }, [pets, router])

              
  return (
    <div>
      <div className='flex justify-center items-center w-full h-14 bg-[#FAFAFA] shadow-md'>
        <Image src={PetIcon} alt='Logo do Pet Journal' />
      </div>

      <Image className='m-6 w-20' src={MyPets} alt='Ícone demonstrando a aba com seus pets' />
    
      <ul className="flex flex-col gap-3 pb-16">
        {pets && 
          pets.map((pet) => (
            <CardPet key={pet.id} pet={pet} />
        ))}
      </ul>

      <AddPet href='/pet-register' />
    </div>
  );
}
