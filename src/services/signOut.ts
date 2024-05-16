'use server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';

export async function signOut() {
  try {
    const cookie = cookies().get('@petjournal/accessToken');
    const accessToken = cookie?.value;

    if (!accessToken) {
      throw 'Nenhum usuário autenticado...';
    }

    cookies().delete('@petjournal/accessToken');

    revalidatePath('/');

    redirect('/login', RedirectType.push);
  } catch (error) {
    return {
      error,
    };
  }
}
