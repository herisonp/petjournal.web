'use server';
import { Pet } from '@/types/PetsTypes';
import { api } from './api';

export async function getPets() {
  try {
    const res = await api('/pet', {
      next: {
        revalidate: 60 * 60 * 24, // 1 day in seconds
      },
    });
    const petData: Pet['View'][] = await res.json();
    if (!petData) return null;
    if (petData.length <= 0) return null;
    return petData;
  } catch (error) {
    console.log('getPets', error);
  }
}
