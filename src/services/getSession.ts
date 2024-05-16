'use server';

import { cookies } from 'next/headers';
import { api } from './api';

export async function getSession() {
  try {
    const cookie = cookies().get('@petjournal/accessToken');
    const accessToken = cookie?.value;

    if (!accessToken) {
      throw 'Nenhum usuário autenticado...';
    }

    const res = await api('/guardian/name', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
      cache: 'no-store',
    });

    const { error, firstName, lastName } = await res.json();
    if (error) throw 'Token de acesso expirado ou inválido...';
    const session = {
      accessToken,
      user: {
        firstName,
        lastName,
      },
    };
    return {
      session,
    };
  } catch (error) {
    console.log('getSession', error);
    return {
      error,
    };
  }
}
