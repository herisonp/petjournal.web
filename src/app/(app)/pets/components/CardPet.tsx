'use client'

import { Pet } from "@/types/PetsTypes";

import Image from "next/image";
import iconClose from '@/assets/svg/close.svg';
import { IconArrow } from '@/components/icons/IconArrow';

import { PetsContext } from '@/context/PetsContext';
import { useContext } from "react";
import { handlePetAge } from "@/utils/handlePetAge";

type CardPetType = {
  pet: Pet['View']
}

export function CardPet({ pet }: CardPetType) {
  const { submitDeletePet } = useContext(PetsContext)

  return (
    <li
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
          {handlePetAge(pet.dateOfBirth)}
        </span>
      </div>

      <div className='ml-auto mr-2 flex flex-col mt-4 gap-4'>
        <button type="button" aria-label="Excluir Pet">
          <Image src={iconClose} alt="Ícone de X" onClick={() => submitDeletePet(pet)}/>
        </button>
        <IconArrow size={14} />
      </div>
    </li>
  )
}