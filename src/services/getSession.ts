'use server';
import { api } from './api';
import { User } from '@/types/userType';
import { getToken } from './getToken';

export async function getSession() {
  try {
    const accessToken = getToken();

    if (!accessToken) {
      throw 'Nenhum usuário autenticado...';
    }

    const res = await api('/guardian/name', {
      cache: 'no-store',
    });

    const { error, firstName, lastName } = await res.json();
    if (error) throw 'Token de acesso expirado ou inválido...';
    const user: User = {
      firstName,
      lastName,
    };
    const session = {
      accessToken,
      user,
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
