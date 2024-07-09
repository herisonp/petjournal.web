'use client';
import { useRouter } from 'next/navigation';
import { species } from '@/utils/species';
import { useContext } from 'react';
import { PetsContext } from '@/context/PetsContext';
import Image from 'next/image';
import PetIcon from '@/assets/svg/petIcon.svg';
import MyPets from '@/assets/svg/MyPets.svg';
import { AddPet } from './components/AddPet';
import Close from '@/assets/svg/close-icon.svg';
import Arrow from '@/assets/svg/arrow-icon.svg';

export default function PetsPage() {
  const { pets } = useContext(PetsContext);
  const router = useRouter();

  // if (pets && pets.length <= 0) {
  //   router.push('/pet-register');
  // }

              
  function handleDateOfBirth(dateOfBirth: string) {
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
  
    if (years > 1) {
      return `${years} anos`;
    }
  
    if (years === 1) {
      return '1 ano';
    }
  
    if (months > 1) {
      return `${months} meses`;
    }
  
    if (months === 1 && days >= 11) {
      return '1 mês';
    }
  
    if (days > 11) {
      return `${days} dias`;
    }
  
    return `${days} dia`;
  }
  

  return (
    <div>
      <div className='flex justify-center items-center w-full h-14 bg-[#FAFAFA] shadow-md'>
        <Image src={PetIcon} alt='alternativo' />
      </div>

      <Image className='m-6' src={MyPets} alt='alternativo' />
    
      <ul className="mt-8 flex flex-col gap-4">
          {pets && 
            pets.map((pet) => {
              return (
                <li 
                  key={pet.id}
                  className={`border rounded-2xl rounded-br-none flex items-center gap-3 h-24 p-2 m-2 ${pet.gender === 'M' ? 'border-blue-300' : 'border-pink-300'}`}
                >
                  {/* <Image className='rounded-full w-16 h-16 object-cover' src={Dog} alt='dog' /> */}
                  <div className='rounded-full w-16 h-16 object-cover bg-gray-200'/>
                  
                  <div className='flex flex-col'>
                    <h3 className="text-lg text-[#5888ED] font-normal">
                      {pet.petName}
                    </h3>
                    <span className="text-xs text-[#2E2E2E] font-normal">
                      {pet.breed.name}
                    </span>
                    <span className="text-xs text-[#2E2E2E] font-normal">
                      {handleDateOfBirth("2024/06/27")}
                    </span>
                  </div>

                  <div className='ml-auto mr-2 flex flex-col mt-4 gap-4'>
                    <Image src={Close} alt='alt' />
                    <Image src={Arrow} alt='alt' />
                  </div>
              </li>
            );  
        })}
      </ul>

      <AddPet href='/pet-register' />
    </div>
  );
}
