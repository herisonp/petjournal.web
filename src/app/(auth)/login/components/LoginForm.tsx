'use client';
import { FormEvent, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import toggleShowPassword from '/public/images/show-password.svg';
import { submitLogin } from '@/services/submitLogin';
import { Button } from '@/components/Button';
import { getSession } from '@/services/getSession';
import { UserContext } from '@/context/UserContext';

export function LoginForm() {
  const router = useRouter();
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  const isButtonDisabled = !!loading;

  async function handleSubmitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(event.currentTarget);

      // TODO: validar dados do formulário
      const loginData = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        remember: remember,
      };

      const { error } = await submitLogin(loginData);
      if (error) throw new Error(error);

      const { session } = await getSession();
      if (!session) {
        throw new Error('Usuário não autenticado...');
      }

      const { user } = session;

      setUser(user);

      router.push('/');
    } catch (error) {
      setLoading(false);
      const err = error as Error;
      alert(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmitLogin} className="flex flex-col gap-y-4">
      <label>
        <div className="text-custom-purple text-sm font-medium">Login</div>
        <div className="border border-[#1b1b1b] rounded-[5px] py-2 px-1">
          <input
            type="email"
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            placeholder="E-mail"
            name="email"
          />
        </div>
        {/* {errors.email && (
          <span className="text-red-600 text-xs">{errors.email.message}</span>
        )} */}
      </label>
      <label>
        <div className="text-custom-purple text-sm font-medium">Senha</div>
        <div className="border border-[#1b1b1b] rounded-[5px] flex py-2 px-1">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            placeholder="Senha"
            name="password"
          />
          <Button
            variant="ghost"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="px-1"
          >
            <Image
              src={toggleShowPassword}
              alt="Ícone de olho para mostrar e esconder a senha"
            />
          </Button>
        </div>
        {/* {errors.password && (
          <span className="text-red-600 text-xs">
            {errors.password.message}
          </span>
        )} */}
      </label>
      <div className="flex justify-between px-1">
        <label className="flex items-center justify-center relative">
          <input
            className="appearance-none w-4 h-4 rounded-full border-2 border-[#7C54A7] mr-1"
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
          />
          <span className='text-sm font-medium'>Lembrar</span>
          {remember && (
            <div className="absolute w-[6px] h-[6px] bg-[#7C54A7] rounded-full left-[0.3rem]"></div>
          )}
        </label>
        <Link className="text-sm font-medium" href="/forget-password">
          Esqueci minha senha
        </Link>
      </div>

      <Button className="mt-16" type="submit" variant='default' disabled={isButtonDisabled}>
        {loading ? 'Enviando...' : 'Continuar'}
      </Button>
    </form>
  );
}
