import { api } from '@/services/api';
import { PetRegister } from './components/PetRegister/PetRegister';

export default async function PetsPage() {
  const res = await api('/pet', {
    next: {
      revalidate: 60,
    },
  });
  const pets = await res.json();

  if (pets.length <= 0) {
    return <PetRegister firstPet />;
  }
  return <div>Lista dos pets</div>;
}
