'use server';
import { getToken } from './getToken';

export async function api(
  endPoint: RequestInfo | URL,
  options?: RequestInit | undefined,
) {
  const BASE_URL = 'https://petjournal-api-z9gs.onrender.com/api';
  const accessToken = getToken();
  const fetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  if (accessToken) {
    fetchOptions.headers = {
      Authorization: 'Bearer ' + accessToken,
      ...fetchOptions.headers,
    };
  }

  return await fetch(`${BASE_URL}${endPoint}`, fetchOptions);
}
