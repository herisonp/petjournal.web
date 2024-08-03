'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { submitChangePassword } from '@/services/submitChangePassword';
import { InputControl } from '@/components/Fields/InputControl';
import { Label } from '@/components/Label';
import { Input } from '@/components/Fields/Input';
import { InputMessage } from '@/components/Fields/InputMessage';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangePasswordSchema, ChangePasswordProps } from '@/schemas/ChangePassword';

export function ChangePasswordForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ChangePasswordProps>({
    resolver: zodResolver(ChangePasswordSchema),
    criteriaMode: 'firstError',
    reValidateMode: 'onChange',
    mode: 'onBlur',
  })

  async function handleNewPasswordSubmit({ password, passwordConfirmation }: ChangePasswordProps) {
    try {
      setLoading(true);
      const { error } = await submitChangePassword({ password, passwordConfirmation });

      if (error) throw error;

      router.push('/');
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleNewPasswordSubmit)}
      className="max-w-lg flex flex-col gap-6"
    >
      <InputControl>
        <Label htmlFor='password' variant='primary'>Nova senha</Label>
        <Input
          type='password'
          id='password'
          placeholder='Digite a sua nova senha'
          className='h-12'
          {...register('password')}
          error={errors.password ? true : false}
        />
        {errors.password && <InputMessage variant='error' message={errors.password.message} />}
      </InputControl>

      <InputControl>
        <Label variant='primary'>Confirmar senha</Label>
        <Input
          type='password'
          id='passwordConfirm'
          placeholder='Confirme sua senha'
          className='h-12'
          {...register('passwordConfirmation')}
          error={errors.passwordConfirmation ? true : false}
        />
        {errors.passwordConfirmation && <InputMessage variant='error' message={errors.passwordConfirmation.message} />}
      </InputControl>

      <div className="flex flex-col">
        <div className='flex'>
          <input
            type="checkbox"
            id="check"
            {...register('confirmationAction')}
            />
          <label htmlFor="check" className="ml-2 font-normal text-xs">
            É necessário que todos os dispositivos acessem sua conta com a nova
            senha?
          </label>
        </div>
        {errors.confirmationAction && <InputMessage variant='error' message={errors.confirmationAction.message} className='mt-1'/>}
      </div>

      <Button type="submit" disabled={!!loading} className='mt-10'>
        Redefinir senha
      </Button>
    </form>
  );
}
