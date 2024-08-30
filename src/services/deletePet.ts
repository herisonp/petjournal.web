'use server';
import { api } from './api';

export async function deletePet(petId: string) {
  try {
    const res = await api(`/pet/${petId}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    const error = data.error || null;
    if (error || !data)
      throw new Error(
        error || 'Ocorreu um erro ao deletar o pet. Tente novamente',
      );
    return {
      data,
    };
  } catch (error) {
    const err = error as Error;
    console.log('deletePet', error);
    return {
      error: err.message,
    };
  }
}
