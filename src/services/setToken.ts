'use server';
import { cookies } from 'next/headers';

export async function setToken({
  token,
  remind,
}: {
  token: string;
  remind: boolean;
}) {
  const shortDaysToExpire = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
  const longDaysToExpire = shortDaysToExpire * 10; // 30 days in milliseconds
  const daysToExpire = remind ? longDaysToExpire : shortDaysToExpire;

  cookies().set('@petjournal/accessToken', token, {
    expires: Date.now() + daysToExpire,
  });
}
