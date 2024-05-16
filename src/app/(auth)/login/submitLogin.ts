'use server';
import { api } from '@/services/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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

    const { error, accessToken } = await res.json();

    if (error) throw error;

    const shortDaysToExpire = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
    const longDaysToExpire = shortDaysToExpire * 10; // 30 days in milliseconds
    const daysToExpire = rembered ? longDaysToExpire : shortDaysToExpire;

    cookies().set('@petjournal/accessToken', accessToken, {
      expires: Date.now() + daysToExpire,
    });

    return { accessToken };
  } catch (error) {
    console.log('submitLogin error', error);
    return { error };
  }
}
