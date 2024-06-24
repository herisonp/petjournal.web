'use server';
import { Size } from '@/types/PetsTypes';
import { api } from './api';

export async function getSizes(specie: string) {
  try {
    const res = await api(`/sizes/${specie}`, {
      next: {
        revalidate: 60 * 60 * 24, // 1 day in seconds
      },
    });
    const sizes: Size[] = await res.json();
    if (!sizes) return null;
    if (sizes.length <= 0) return null;
    return sizes;
  } catch (error) {
    console.log('getSizes', error);
  }
}
