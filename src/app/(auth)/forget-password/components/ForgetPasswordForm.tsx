'use client';
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
      router.push('/waiting-code');
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
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
        <button
          className={`flex self-center font-medium items-center justify-center rounded-[45px] px-11 py-3 bg-custom-purple text-white disabled:bg-transparent border-2 border-transparent disabled:border-[#B2B2B2] disabled:text-[#B2B2B2]`}
          // ${
          //   isButtonDisabled
          //     ? 'bg-transparent border-2 border-[#B2B2B2] text-[#B2B2B2]'
          //     : 'bg-custom-purple text-white'
          // }`}
          type="submit"
          disabled={isLoading}
        >
          Enviar
        </button>
        <button
          className={`flex self-center font-medium items-center justify-center rounded-[45px] px-11 py-3 bg-transparent border-2 border-red-600 text-red-600 disabled:opacity-45`}
          type="button"
          onClick={() => {
            router.push('/login');
          }}
          disabled={isLoading}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
