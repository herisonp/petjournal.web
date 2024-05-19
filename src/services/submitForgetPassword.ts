'use server';
import { api } from './api';

export async function submitForgetPassword({ email }: { email: string }) {
  try {
    const res = await api('/forget-password', {
      body: JSON.stringify({
        email,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (!res) throw new Error('Erro ao fazer a requisição...');
    const { message, error } = await res.json();
    if (error) throw new Error('Email não encontrado!');
    return {
      message,
    };
  } catch (err) {
    const error = err as Error;
    console.error('submitForgetPassword', error);
    return {
      error: error.message,
    };
  }
}
