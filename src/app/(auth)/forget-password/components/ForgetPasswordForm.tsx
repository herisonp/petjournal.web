'use client';
import { Button } from '@/components/Button';
import { Input } from '@/components/Fields/Input';
import { InputControl } from '@/components/Fields/InputControl';
import { InputMessage } from '@/components/Fields/InputMessage';
import { Label } from '@/components/Label';
import { ForgetPasswordSchema, ForgetPasswordType } from '@/schemas/ForgetPassword';
import { submitForgetPassword } from '@/services/submitForgetPassword';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form'

export function ForgetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<ForgetPasswordType>({
    resolver: zodResolver(ForgetPasswordSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  });

  async function handleSubmitForgetPassword(data: ForgetPasswordType) {
    setIsLoading(true);
    try {
      const { error } = await submitForgetPassword(data);
      if (error) throw error;
      router.push(`/waiting-code?email=${data.email}`);
    } catch (error: any) {
      setErrorMessage(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForgetPassword)} className="flex flex-col">
      <InputControl>
        <Label variant='primary'>Qual seu email de cadastro?</Label>
        <Input variant='primary' placeholder='Digite seu e-mail' type='email' id='email' className='text-sm h-12' {...register('email')} />
        {errors.email && <InputMessage variant='error' message={errors.email?.message} />}
      </InputControl>

      {errorMessage && !errors.email && <InputMessage message={errorMessage} />}

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
