'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toggleShowPassword from '/public/images/show-password.svg';
import Image from 'next/image';

export function ChangePasswordForm() {
  const [accountAccess, setAccountAccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { push } = useRouter();

  return (
    <form className="max-w-lg flex flex-col gap-6">
      <label>
        <div className="text-custom-purple text-sm font-medium">Nova senha</div>
        <div className="border border-[#1b1b1b] rounded-[5px] flex py-2 px-1">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            placeholder="Digite sua nova senha"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
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
            type={showPassword ? 'text' : 'password'}
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            placeholder="Confirme sua senha"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
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

      <button
        type="submit"
        className={`bg-gray-300 py-2 w-full rounded-full`}
        // ${
        //   isButtonDisabled && 'text-gray-400 bg-gray-200'
        // }`}
        // disabled={isButtonDisabled}
      >
        Redefinir senha
      </button>
    </form>
  );
}
