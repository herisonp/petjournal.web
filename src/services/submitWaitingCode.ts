'use server';
import { api } from './api';
import { setToken } from './setToken';

export async function submitWaitingCode({
  email,
  code,
}: {
  email: string;
  code: string;
}) {
  try {
    const res = await api('/waiting-code', {
      body: JSON.stringify({
        email,
        verificationToken: code,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (!res) throw new Error('Erro ao fazer a requisição...');
    const { accessToken, error } = await res.json();
    if (error) throw new Error(error);

    await setToken({
      token: accessToken,
      remember: false
    });

    return {
      accessToken,
    };
  } catch (err) {
    const error = err as Error;
    console.error('submitWaitingCode', error);
    return {
      error: error.message,
    };
  }
}
