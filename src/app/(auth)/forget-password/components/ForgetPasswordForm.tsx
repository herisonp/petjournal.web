export function ForgetPasswordForm() {
  return (
    <form className="flex flex-col gap-8">
      <label>
        <div className="text-custom-purple text-sm font-medium">
          Qual seu email de cadastro?
        </div>
        <div className="border border-[#1b1b1b] rounded-[5px] py-2 px-1">
          <input
            type="email"
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            placeholder="Digite seu e-mail"
          />
        </div>
        {/* {errors.email && (
          <span className="text-red-600 text-xs">{errors.email.message}</span>
        )} */}
      </label>

      <div className="flex justify-between">
        <button
          className={`flex self-center font-medium items-center justify-center rounded-[45px] px-11 py-3 bg-custom-purple text-white`}
          // ${
          //   isButtonDisabled
          //     ? 'bg-transparent border-2 border-[#B2B2B2] text-[#B2B2B2]'
          //     : 'bg-custom-purple text-white'
          // }`}
          type="submit"
          // disabled={isButtonDisabled}
        >
          Enviar
        </button>
        <button
          className={`flex self-center font-medium items-center justify-center rounded-[45px] px-11 py-3 bg-transparent border border-red-600 text-red-600`}
          type="button"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
