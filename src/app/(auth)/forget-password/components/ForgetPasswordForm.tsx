'use client';
import { Button } from '@/components/Button';
import { Input } from '@/components/Fields/Input';
import { InputControl } from '@/components/Fields/InputControl';
import { Label } from '@/components/Label';
import { submitForgetPassword } from '@/services/submitForgetPassword';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export function ForgetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmitForgetPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.currentTarget);
      const email = formData.get('email') as string;      
      const { error } = await submitForgetPassword({ email });
      if (error) throw error;
      router.push(`/waiting-code?email=${email}`);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmitForgetPassword} className="flex flex-col">
      <InputControl>
        <Label variant='primary'>Qual seu email de cadastro?</Label>
        <Input variant='primary' placeholder='Digite seu e-mail' type='email' name='email' id='email' className='text-sm h-12'/>
      </InputControl>

      <div className="flex flex-col gap-3 mt-24">
        <Button
          variant='default'
          type="submit"
          className='w-40'
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </Button>
        <Button
          variant='outline'
          type="button"
          className='w-40'
          onClick={() => {
            router.push('/login');
          }}
          disabled={isLoading}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
}
