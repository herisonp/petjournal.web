'use server';
import { Breed } from '@/types/PetsTypes';
import { api } from './api';

export async function getBreeds(specie: string) {
  try {
    const res = await api(`/breeds/${specie}`, {
      next: {
        revalidate: 60 * 60 * 24, // 1 day in seconds
      },
    });
    const breeds: Breed[] = await res.json();
    if (!breeds) return null;
    if (breeds.length <= 0) return null;
    return breeds;
  } catch (error) {
    console.log('getBreeds', error);
  }
}
