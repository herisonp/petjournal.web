'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitLogin } from '@/services/submitLogin';
import { submitRegister } from '@/services/submitRegister';
import { Button } from '@/components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/Fields/Input';
import { UserRegisterProps, userRegisterSchema } from '@/schemas/userRegister';

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [remember, setRemember] = useState(false);
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

      router.push('/');
    } catch (error) {
      const err = error as Error;
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitRegister)}
      className="flex flex-col gap-y-4"
    >
      <label>
        <div className="text-custom-purple text-sm font-medium">Nome</div>
        <Input
          type="text"
          id="name"
          placeholder="Digite seu primeiro nome"
          {...register('firstName')}
        />
        {errors.firstName && (
          <span className="text-red-500 text-xs">
            {errors.firstName.message}
          </span>
        )}
      </label>
      <label>
        <div className="text-custom-purple text-sm font-medium">Sobrenome</div>
        <Input
          type="text"
          id="lastname"
          placeholder="Digite seu sobrenome"
          {...register('lastName')}
        />
        {errors.lastName && (
          <span className="text-red-500 text-xs">
            {errors.lastName.message}
          </span>
        )}
      </label>
      <label>
        <div className="text-custom-purple text-sm font-medium">Email</div>
        <Input
          type="email"
          id="email"
          placeholder="E-mail"
          {...register('email')}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </label>
      <label>
        <div className="text-custom-purple text-sm font-medium">Telefone</div>
        <Input
          type="text"
          className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
          id="phone"
          placeholder="Telefone"
          {...register('phone')}
        />
        {errors.phone && (
          <span className="text-red-500 text-xs">{errors.phone.message}</span>
        )}
      </label>
      <label>
        <div className="text-custom-purple text-sm font-medium">Senha</div>
        <Input
          type="password"
          className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
          id="password"
          placeholder="Senha"
          {...register('password')}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
      </label>
      <label>
        <div className="text-custom-purple text-sm font-medium">
          Confirmar senha
        </div>
        <Input
          type="password"
          className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
          id="password-confirm"
          placeholder="Confirmar senha"
          {...register('passwordConfirmation')}
        />
        {errors.passwordConfirmation && (
          <span className="text-red-500 text-xs">
            {errors.passwordConfirmation.message}
          </span>
        )}
      </label>
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
