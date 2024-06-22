'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { species } from '@/utils/species';
import { useContext } from 'react';
import { PetsContext } from '@/context/PetsContext';

export default function PetsPage() {
  const { pets } = useContext(PetsContext);
  const router = useRouter();

  if (pets && pets.length <= 0) {
    router.push('/pet-register');
  }

  return (
    <div>
      <Link
        href="/pet-register"
        className="bg-green-600 text-white p-4 block w-fit rounded-md"
      >
        Adicionar Pet
      </Link>
      <ul className="mt-8 flex flex-col gap-4">
        {pets &&
          pets.map((pet, index) => (
            <li
              key={pet.id}
              className="bg-studio-500 p-4 rounded-lg text-white flex flex-col gap-1"
            >
              <span className="text-lg">
                {index + 1} - {pet.petName}
              </span>
              <span className="text-sm text-white/70">
                {species[pet.specieAlias as keyof typeof species]}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}
