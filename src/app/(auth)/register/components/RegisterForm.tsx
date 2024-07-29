'use client';
import { FormEvent, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitLogin } from '@/services/submitLogin';
import { submitRegister } from '@/services/submitRegister';
import { Button } from '@/components/Button';
import { getSession } from '@/services/getSession';
import { UserContext } from '@/context/UserContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/Fields/Input';
import { UserRegisterProps, userRegisterSchema } from '@/schemas/userRegister';
import { InputControl } from '@/components/Fields/InputControl';
import { Label } from '@/components/Label';
import { InputMessage } from '@/components/Fields/InputMessage';

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserRegisterProps>({
    resolver: zodResolver(userRegisterSchema),
    criteriaMode: 'firstError',
    reValidateMode: 'onChange',
    mode: 'onBlur',
  });

  async function handleSubmitRegister({
    email,
    firstName,
    lastName,
    password,
    passwordConfirmation,
    phone,
  }: UserRegisterProps) {
    setIsLoading(true);
    try {
      const newUser = {
        firstName,
        lastName,
        email,
        password,
        passwordConfirmation,
        phone,
        isPrivacyPolicyAccepted: remember,
      };

      const { error: errorRegister, data } = await submitRegister(newUser);
      if (errorRegister) throw new Error(errorRegister);

      const { error: errorLogin } = await submitLogin({
        email: data.email,
        password: newUser.password,
      });
      if (errorLogin) throw errorLogin;

      const { session } = await getSession();
      if (!session) {
        throw new Error('Usuário não autenticado...');
      }

      const { user } = session;

      setUser(user);

      router.push('/');
    } catch (error) {
      setIsLoading(false);
      const err = error as Error;
      alert(err.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitRegister)}
      className="flex flex-col gap-y-4"
    >
      <InputControl>
        <Label htmlFor="name">Nome</Label>
        <Input
          type="text"
          id="name"
          placeholder="Digite seu primeiro nome"
          {...register('firstName')}
          error={errors.firstName ? true : false}
        />
        {errors.firstName && (
          <InputMessage variant="error" message={errors.firstName?.message} />
        )}
      </InputControl>
      <InputControl>
        <Label htmlFor="lastname">Sobrenome</Label>
        <Input
          type="text"
          id="lastname"
          placeholder="Digite seu sobrenome"
          {...register('lastName')}
          error={errors.lastName ? true : false}
        />
        {errors.lastName && (
          <InputMessage variant="error" message={errors.lastName?.message} />
        )}
      </InputControl>
      <InputControl>
        <Label htmlFor="email">Login</Label>
        <Input
          type="email"
          id="email"
          placeholder="E-mail"
          {...register('email')}
          error={errors.email ? true : false}
        />
        {errors.email && (
          <InputMessage variant="error" message={errors.email?.message} />
        )}
      </InputControl>
      <InputControl>
        <Label htmlFor="phone">Telefone</Label>
        <Input
          type="text"
          id="phone"
          placeholder="Telefone"
          {...register('phone')}
          error={errors.phone ? true : false}
        />
        {errors.phone && (
          <InputMessage variant="error" message={errors.phone?.message} />
        )}
      </InputControl>
      <InputControl>
        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          placeholder="Senha"
          {...register('password')}
        />
        {errors.password && (
          <InputMessage variant="error" message={errors.password?.message} />
        )}
      </InputControl>
      <InputControl>
        <Label htmlFor="password-confirm">Confirmar senha</Label>
        <Input
          type="password"
          id="password-confirm"
          placeholder="Confirmar senha"
          {...register('passwordConfirmation')}
        />
        {errors.passwordConfirmation && (
          <InputMessage
            variant="error"
            message={errors.passwordConfirmation?.message}
          />
        )}
      </InputControl>
      <label className="flex items-center relative">
        <input
          className="appearance-none w-5 h-5 rounded-full border-2 border-custom-purple mr-1"
          type="checkbox"
          checked={remember}
          {...register('isPrivacyPolicyAccepted', {
            onChange(event) {
              setRemember(event.target.checked);
            },
          })}
        />
        {remember && (
          <div className="absolute w-2 h-2 bg-custom-purple rounded-full left-[0.375rem]"></div>
        )}
        <span>Eu concordo com a politica de privacidade</span>
      </label>
      {errors.isPrivacyPolicyAccepted && (
        <span className="text-red-500 text-xs">
          {errors.isPrivacyPolicyAccepted.message}
        </span>
      )}
      <Button className="mt-16" type="submit" disabled={!!isLoading}>
        {isLoading ? 'Enviando...' : 'Continuar'}
      </Button>
    </form>
  );
}
