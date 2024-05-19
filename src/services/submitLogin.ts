'use server';
import { api } from '@/services/api';
import { cookies } from 'next/headers';

interface submitLoginProps {
  email: string;
  password: string;
  rembered?: boolean;
}

export async function submitLogin({
  email,
  password,
  rembered,
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

    const shortDaysToExpire = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
    const longDaysToExpire = shortDaysToExpire * 10; // 30 days in milliseconds
    const daysToExpire = rembered ? longDaysToExpire : shortDaysToExpire;

    cookies().set('@petjournal/accessToken', accessToken, {
      expires: Date.now() + daysToExpire,
    });

    return { accessToken };
  } catch (err) {
    const error = err as Error;
    console.log('submitLogin error', error);
    return { error: error.message };
  }
}
