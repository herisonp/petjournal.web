'use server';
import { api } from './api';

export async function deletePet(petId: string) {
  try {
    const res = await api(`/pet/${petId}`, {
      method: 'DELETE',
    });
    if (!res.ok) return null
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('deletePet', error);
  }
}
