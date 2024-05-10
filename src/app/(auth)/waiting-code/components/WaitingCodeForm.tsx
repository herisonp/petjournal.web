'use client';

import Link from 'next/link';

export function WaitingCodeForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex justify-between">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              pattern="\d*"
              className="w-12 h-16 text-center border-2 rounded-md mt-8 border-custom-purple focus:ring-4 focus:ring-custom-purple focus:border-transparent focus:outline-none"
              // className={clsx(
              //   'w-12 h-16 text-center border-2 rounded-md mt-8',
              //   inputValues[index]
              //     ? 'border-custom-purple focus:ring-4 focus:ring-custom-purple focus:border-transparent focus:outline-none'
              //     : 'border-gray-300 focus:ring-4 focus:ring-custom-purple focus:border-transparent focus:outline-none',
              // )}
            />
          ))}
      </div>
      <Link href="/forget-password" className="underline">
        Reenviar código?
      </Link>

      <button
        className={`flex self-center font-medium items-center justify-center rounded-[45px] mt-4 px-11 py-3 bg-custom-purple text-white`}
        type="submit"
      >
        Enviar
      </button>
      <p className="text-center">
        Dica: Caso não encontre o e-mail na sua caixa de entrada, verifique a
        pasta de spam!
      </p>
    </form>
  );
}
