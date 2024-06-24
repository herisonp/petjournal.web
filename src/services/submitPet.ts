'use server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { api } from './api';
import { Pet } from '@/types/PetsTypes';

export async function submitPet(pet: Pet['Insert']) {
  try {
    const res = await api('/pet', {
      body: JSON.stringify(pet),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data = await res.json();
    const error = data.error || null;
    if (error) throw new Error(error);
    const petData: Pet['View'] = data;
    revalidatePath('/pets');
    revalidateTag('pets');
    return {
      data: petData,
    };
  } catch (err) {
    const error = err as Error;
    console.log('submitRegister', error);
    return {
      error: error.message,
    };
  }
}
