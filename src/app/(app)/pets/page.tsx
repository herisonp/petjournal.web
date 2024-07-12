'use client';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { PetsContext } from '@/context/PetsContext';

import PetIcon from '@/assets/svg/petIcon.svg';
import MyPets from '@/assets/svg/MyPets.svg';

import Image from 'next/image';
import { AddPet } from './components/AddPet';
import { CardPet } from './components/CardPet';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/Breadcrump';
import { Logo } from '@/components/Logo';

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
      <div className="inset-0 h-fit w-full p-4 shadow flex justify-center items-center">
        <Logo />
      </div>

      <Breadcrumb className='m-6'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <div className="flex items-center gap-2">
                <Image src="/images/home-active.svg" height={15} width={13} alt='Home Icon' /> 
                <span>Meus Pets</span>
              </div>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    
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
