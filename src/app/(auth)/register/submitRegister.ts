'use server';
import { api } from '@/services/api';

interface submitRegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  isPrivacyPolicyAccepted: boolean;
}

export async function submitRegister(user: submitRegisterProps) {
  try {
    const res = await api('/signup', {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data = await res.json();
    const error = data.error || null;
    if (error) throw error;
    return {
      data,
    };
  } catch (error) {
    console.log(error);
    return {
      error,
    };
  }
}
