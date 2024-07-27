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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserLoginProps, userLoginSchema } from '@/schemas/userLogin';
import { Input } from '@/components/Fields/Input';
import { InputControl } from '@/components/Fields/InputControl';
import { Label } from '@/components/Label';
import { InputMessage } from '@/components/Fields/InputMessage';

export function LoginForm() {
  const router = useRouter();
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  const isButtonDisabled = !!loading;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserLoginProps>({
    resolver: zodResolver(userLoginSchema),
    criteriaMode: 'firstError',
    reValidateMode: 'onChange',
    mode: 'onBlur',
  });

  async function handleSubmitLogin({ email, password }: UserLoginProps) {
    try {
      setLoading(true);
      const loginData = {
        email,
        password,
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
      const err = error as Error;
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitLogin)}
      className="flex flex-col gap-y-4"
    >
      <InputControl>
        <Label htmlFor='email'>Login</Label>
        <Input
          type="email"
          id='email'
          placeholder="E-mail"
          {...register('email')}
          error={errors.email ? true : false}
        />
        {errors.email && (
          <InputMessage variant="error" message={errors.email?.message} />
        )}
      </InputControl>
      <InputControl>
        <Label htmlFor='password'>Senha</Label>
        <Input
          type={showPassword ? 'text' : 'password'}
          id='password'
          placeholder="Senha"
          {...register('password')}
        />
         {errors.password && (
          <InputMessage variant="error" message={errors.password?.message} />
        )}
      </InputControl>
      <div className="flex justify-between px-1">
        <label className="flex items-center justify-center relative">
          <input
            className="appearance-none w-5 h-5 rounded-full border-2 border-custom-purple mr-1"
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
          />
          <span>Lembrar</span>
          {remember && (
            <div className="absolute w-2 h-2 bg-custom-purple rounded-full left-[0.375rem]"></div>
          )}
        </label>
        <Link className="underline" href="/forget-password">
          Esqueci minha senha
        </Link>
      </div>

      <Button className="mt-16" type="submit" disabled={isButtonDisabled}>
        {loading ? 'Enviando...' : 'Continuar'}
      </Button>
    </form>
  );
}
