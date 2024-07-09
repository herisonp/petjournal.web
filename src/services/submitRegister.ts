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
    if (error || !data)
      throw new Error(
        error || 'Ocorreu um erro ao fazer o registro. Tente novamente',
      );
    return {
      data,
    };
  } catch (err) {
    const error = err as Error;
    console.log('submitRegister', error);
    return {
      error: error.message,
    };
  }
}
