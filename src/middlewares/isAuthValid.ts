'use server';
import { getSession } from '@/services/getSession';

export async function isAuthvalid() {
  const { session, error } = await getSession();
  if (error) {
    return false;
  }
  return !!session;
}
