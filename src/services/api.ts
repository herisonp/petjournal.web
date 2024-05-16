'use server';

export async function api(
  endPoint: RequestInfo | URL,
  options: RequestInit | undefined,
) {
  const BASE_URL = 'https://petjournal-api-z9gs.onrender.com/api';
  return await fetch(`${BASE_URL}${endPoint}`, options);
}
