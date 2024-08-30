'use server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function signOut() {
  try {
    const cookie = cookies().get('@petjournal/accessToken');
    const accessToken = cookie?.value;

    if (!accessToken) {
      throw new Error('Nenhum usuário autenticado...');
    }

    cookies().delete('@petjournal/accessToken');

    revalidatePath('/');

    return {};
  } catch (err) {
    const error = err as Error;
    console.log('signOut', error);
    return {
      error: error.message,
    };
  }
}
