'use server';
import { api } from './api';

export async function submitChangePassword({
  password,
  passwordConfirmation,
}: {
  password: string;
  passwordConfirmation: string;
}) {
  try {
    if (password !== passwordConfirmation) {
      throw new Error('Senhas digitadas não coincidem');
    }
    const res = await api('/guardian/change-password', {
      body: JSON.stringify({
        password,
        passwordConfirmation,
      }),
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (!res) throw new Error('Erro ao fazer a requisição...');
    const { message, error } = await res.json();
    if (error) throw new Error('Houve um erro com a mudança de senha!');
    return {
      message,
    };
  } catch (err) {
    const error = err as Error;
    console.error('submitChangePassword', error);
    return {
      error: error.message,
    };
  }
}
