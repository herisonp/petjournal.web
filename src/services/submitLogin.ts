'use server';
import { api } from '@/services/api';
import { setToken } from './setToken';

interface submitLoginProps {
  email: string;
  password: string;
  remember?: boolean;
}

export async function submitLogin({
  email,
  password,
  remember,
}: submitLoginProps) {
  try {
    const res = await api('/login', {
      body: JSON.stringify({
        email,
        password,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!res) throw new Error('Server error');

    const { error, accessToken } = await res.json();

    if (error) throw new Error(error);

    await setToken({
      token: accessToken,
      remember: remember || false,
    });

    return { accessToken: accessToken as string };
  } catch (err) {
    const error = err as Error;
    console.log('submitLogin error', error);
    return { error: error.message };
  }
}
