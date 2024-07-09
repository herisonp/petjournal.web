'use client';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { PetsContext } from '@/context/PetsContext';

import PetIcon from '@/assets/svg/petIcon.svg';
import MyPets from '@/assets/svg/MyPets.svg';
import Close from '@/assets/svg/close-icon.svg';
import Arrow from '@/assets/svg/arrow-icon.svg';

import Image from 'next/image';
import { AddPet } from './components/AddPet';

export default function PetsPage() {
  const { pets } = useContext(PetsContext);
  const router = useRouter();

  useEffect(() => {
    if (!pets || pets.length < 1) {
      router.push('/pet-register');
    }
  }, [pets])

              
  function handleDateOfBirth(dateOfBirth: string | Date) {
    const datePet = new Date(dateOfBirth);
    const dateNow = new Date();
  
    // Convertendo as datas para milissegundos desde 1970
    const timeDiff = Math.abs(dateNow.getTime() - datePet.getTime());
    
    // Convertendo a diferença para dias
    const dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // Convertendo para anos, meses e dias
    const years = Math.floor(dayDifference / 365);
    const months = Math.floor((dayDifference % 365) / 30);    
    const days = dayDifference % 30;
  
    let dateFormat: string = "";

    if (years > 0) {
      dateFormat = `${years} ${years > 1 ? 'anos' : 'ano'}`;
      return dateFormat
    }
  
    if (months > 0) {
      dateFormat = `${months} ${months > 1 ? 'meses' : 'mês'}`;
      return dateFormat
    }

    if (days > 0) {
      dateFormat = `${days} ${days > 1 ? 'dias' : 'dia'}`;
      return dateFormat
    }
  }

  return (
    <div>
      <div className='flex justify-center items-center w-full h-14 bg-[#FAFAFA] shadow-md'>
        <Image src={PetIcon} alt='Logo do Pet Journal' />
      </div>

      <Image className='m-6 w-20' src={MyPets} alt='Ícone demonstrando a aba com seus pets' />
    
      <ul className="flex flex-col">
          {pets && 
            pets.map((pet) => (
              <li 
                key={pet.id}
                className={`border rounded-2xl rounded-br-none flex items-center gap-3 h-24 mx-2 px-2 ${pet.gender === 'M' ? 'border-blue-300' : 'border-pink-300'}`}
              >
                {/* <Image className='rounded-full w-16 h-16 object-cover' src={Dog} alt='dog' /> */}
                <div className='rounded-full w-16 h-16 object-cover bg-gray-200' />
                
                <div className='flex flex-col'>
                  <h3 className={`text-lg font-normal ${pet.gender === 'M' ? 'text-[#5888ED]' : 'text-[#9A0963]'}`}>
                    {pet.petName}
                  </h3>

                  <span className="text-xs text-[#2E2E2E] font-normal">
                    {pet.breed.name}
                  </span>
                  
                  <span className="text-xs text-[#2E2E2E] font-normal">
                    {handleDateOfBirth(pet.dateOfBirth)}
                  </span>
                </div>

                <div className='ml-auto mr-2 flex flex-col mt-4 gap-4'>
                  <Image src={Close} alt='Ícone para remover o animal de estimação' />
                  <Image src={Arrow} alt='Ícone para inspecionar o animal de estimação' />
                </div>
              </li>
          ))}
      </ul>

      <AddPet href='/pet-register' />
    </div>
  );
}
