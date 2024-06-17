import { api } from '@/services/api';
import { redirect } from 'next/navigation';

export default async function PetsPage() {
  const res = await api('/pet', {
    next: {
      revalidate: 60,
    },
  });
  const pets = await res.json();

  if (pets.length <= 0) {
    redirect('/pet-register');
  }
  return <div>Lista dos pets</div>;
}
