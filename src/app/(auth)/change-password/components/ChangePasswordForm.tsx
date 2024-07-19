'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import toggleShowPassword from '/public/images/show-password.svg';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { submitChangePassword } from '@/services/submitChangePassword';

export function ChangePasswordForm() {
  const router = useRouter();
  const [accountAccess, setAccountAccess] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({
    password: false,
    passwordConfirmation: false,
  });

  async function handleNewPasswordSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(event.currentTarget);

      // TODO: validar dados do formulário
      const newPasswordData = {
        password: formData.get('password') as string,
        passwordConfirmation: formData.get('passwordConfirmation') as string,
      };

      const { error } = await submitChangePassword(newPasswordData);

      if (error) throw error;

      router.push('/');
    } catch (error) {
      // TODO: criar mensagens de erro
      setLoading(false);
      alert(error);
    }
  }

  return (
    <form
      onSubmit={handleNewPasswordSubmit}
      className="max-w-lg flex flex-col gap-6"
    >
      <label>
        <div className="text-custom-purple text-sm font-medium">Nova senha</div>
        <div className="border border-[#1b1b1b] rounded-[5px] flex py-2 px-1">
          <input
            type={showPassword.password ? 'text' : 'password'}
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            placeholder="Digite sua nova senha"
            name="password"
          />
          <button
            type="button"
            onClick={() =>
              setShowPassword({
                ...showPassword,
                password: !showPassword.password,
              })
            }
            className="px-1"
          >
            <Image
              src={toggleShowPassword}
              alt="Ícone de olho para mostrar e esconder a senha"
            />
          </button>
        </div>
        {/* {errors.password && (
          <span className="text-red-600 text-xs">
            {errors.password.message}
          </span>
        )} */}
      </label>

      <label>
        <div className="text-custom-purple text-sm font-medium">
          Confirmar senha
        </div>
        <div className="border border-[#1b1b1b] rounded-[5px] flex py-2 px-1">
          <input
            type={showPassword.passwordConfirmation ? 'text' : 'password'}
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            placeholder="Confirme sua senha"
            name="passwordConfirmation"
          />
          <button
            type="button"
            onClick={() =>
              setShowPassword({
                ...showPassword,
                passwordConfirmation: !showPassword.passwordConfirmation,
              })
            }
            className="px-1"
          >
            <Image
              src={toggleShowPassword}
              alt="Ícone de olho para mostrar e esconder a senha"
            />
          </button>
        </div>
        {/* {errors.password && (
          <span className="text-red-600 text-xs">
            {errors.password.message}
          </span>
        )} */}
      </label>

      <div className="flex">
        <input
          type="checkbox"
          id="check"
          checked={accountAccess}
          onChange={(event) => setAccountAccess(event.target.checked)}
        />
        <label htmlFor="check" className="pl-2 leading-5">
          É necessário que todos os dispositivos acessem sua conta com a nova
          senha?
        </label>
      </div>

      <Button type="submit" className={`w-full`} disabled={!!loading}>
        Redefinir senha
      </Button>
    </form>
  );
}
