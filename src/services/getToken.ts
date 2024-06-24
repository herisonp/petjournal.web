import { cookies } from 'next/headers';

export function getToken() {
  const cookie = cookies().get('@petjournal/accessToken');
  const accessToken = cookie?.value;
  return accessToken || null;
}
