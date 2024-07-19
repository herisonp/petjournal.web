'use client';
import { Button } from '@/components/Button';
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
      setIsLoading(false);
      alert(error);
    }
  }

  return (
    <form onSubmit={handleSubmitForgetPassword} className="flex flex-col gap-8">
      <label>
        <div className="text-custom-purple text-sm font-medium">
          Qual seu email de cadastro?
        </div>
        <div className="border border-[#1b1b1b] rounded-[5px] py-2 px-1">
          <input
            type="email"
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            placeholder="Digite seu e-mail"
            name="email"
            id="email"
          />
        </div>
        {/* {errors.email && (
          <span className="text-red-600 text-xs">{errors.email.message}</span>
        )} */}
      </label>

      <div className="flex justify-between">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar'}
        </Button>
        <Button
          variant="outline"
          type="button"
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
