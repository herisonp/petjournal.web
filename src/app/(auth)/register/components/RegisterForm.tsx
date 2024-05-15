export function RegisterForm() {
  return (
    <form className="flex flex-col gap-y-4">
      <label>
        <div className="text-custom-purple text-sm font-medium">Nome</div>
        <div className="border border-[#1b1b1b] rounded-[5px] py-2 px-1">
          <input
            type="text"
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            name="name"
            id="name"
            placeholder="Digite seu primeiro nome"
          />
        </div>
      </label>
      <label>
        <div className="text-custom-purple text-sm font-medium">Sobrenome</div>
        <div className="border border-[#1b1b1b] rounded-[5px] py-2 px-1">
          <input
            type="text"
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            name="lastname"
            id="lastname"
            placeholder="Digite seu sobrenome"
          />
        </div>
      </label>
      <label>
        <div className="text-custom-purple text-sm font-medium">Email</div>
        <div className="border border-[#1b1b1b] rounded-[5px] py-2 px-1">
          <input
            type="email"
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            name="email"
            id="email"
            placeholder="E-mail"
          />
        </div>
      </label>
      <label>
        <div className="text-custom-purple text-sm font-medium">Telefone</div>
        <div className="border border-[#1b1b1b] rounded-[5px] py-2 px-1">
          <input
            type="text"
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            name="phone"
            id="phone"
            placeholder="Telefone"
          />
        </div>
      </label>
      <label>
        <div className="text-custom-purple text-sm font-medium">Senha</div>
        <div className="border border-[#1b1b1b] rounded-[5px] py-2 px-1">
          <input
            type="password"
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            name="password"
            id="password"
            placeholder="Senha"
          />
        </div>
      </label>
      <label>
        <div className="text-custom-purple text-sm font-medium">
          Confirmar senha
        </div>
        <div className="border border-[#1b1b1b] rounded-[5px] py-2 px-1">
          <input
            type="password"
            className="w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF]"
            name="password-confirm"
            id="password-confirm"
            placeholder="Confirmar senha"
          />
        </div>
      </label>
      <label className="flex items-center justify-center relative mt-4">
        <input
          className="appearance-none w-5 h-5 rounded-full border-2 border-custom-purple mr-1"
          type="checkbox"
          // checked={remember}
          // onChange={(event) => setRemember(event.target.checked)}
        />
        <span>Eu concordo com a política de privacidade</span>
        {/* {remember && (
            <div className="absolute w-2 h-2 bg-custom-purple rounded-full left-[0.375rem]"></div>
          )} */}
      </label>
      <button
        className={`flex self-center font-medium items-center justify-center  rounded-[45px] px-11 py-3 mt-4 bg-custom-purple text-white`}
        // ${
        //   isButtonDisabled
        //     ? 'bg-transparent border-2 border-[#B2B2B2] text-[#B2B2B2]'
        //     : 'bg-custom-purple text-white'
        // }`}
        type="submit"
        // disabled={isButtonDisabled}
      >
        {'Continuar'}
      </button>
    </form>
  );
}
