'use client'

import { Pet } from "@/types/PetsTypes";
import { PetsContext } from '@/context/PetsContext';

import iconClose from '@/assets/svg/close.svg';
import { IconArrow } from '@/components/icons/IconArrow';
import Image from "next/image";
import { useContext } from "react";

type CardPetType = {
  pet: Pet['View']
}

export function CardPet({ pet }: CardPetType) {
  const { submitDeletePet } = useContext(PetsContext)

  function handleDateOfBirth(dateOfBirth: string | Date) {
    const datePet = new Date(dateOfBirth);
    const dateNow = new Date();
  
    const timeDiff = Math.abs(dateNow.getTime() - datePet.getTime());
    
    const dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));

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
    <li 
      key={pet.id}
      className={`border-[1.5px] rounded-2xl rounded-br-none flex items-center gap-3 h-24 mx-2 px-2 ${pet.gender === 'M' ? 'border-blue-300' : 'border-pink-300'}`}
    >
      {/* <Image className='rounded-full w-16 h-16 object-cover' src={Dog} alt='dog' /> */}
      <div className={`rounded-full w-16 h-16 object-cover ${pet.gender === 'M' ? 'bg-blue-300' : 'bg-pink-300'}`} />
      
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
        <Image src={iconClose} alt="alt" onClick={() => submitDeletePet(pet)}/>
        <IconArrow size={14} />
      </div>
    </li>
  )
}