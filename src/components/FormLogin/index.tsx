function FormLogin() {
  return (
    <form>
      <div className="flex flex-col">
        <div className="flex flex-col z-10">
          <label className="text-gray-400 flex flex-col font-normal text-[14px] leading-5">
            Email
            <div className="hover:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] hover:p-px rounded-2xl h-15 flex items-center w-full mt-[8px]">
              <input type="email" className="rounded-2xl w-full h-[53px] bg-[#111112] text-[22px] text-white pl-1 pr-1" />
            </div>
          </label>

          <label className="text-gray-400 flex flex-col font-normal text-[14px] leading-5 mt-7">
            Senha
            <div className="hover:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] hover:p-px rounded-2xl h-15 flex items-center w-full mt-[8px] z-10">
              <input type="password" className="rounded-2xl w-full h-[53px] bg-[#111112] text-[22px] text-white pl-1 pr-1" />
            </div>
          </label>
        </div>

        <a href="sem redirecionamento" className="text-gray-400 not-italic font-normal text-[13px] leading-[18px] flex justify-end pr-3 pt-6 pb-10 underline">Esqueci minha senha</a>

        <button className="text-white font-normal text-[23px] leading-[30px] bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] h-[53px] rounded-2xl">Entrar</button>

        <a href="sem redirecionamento" className="text-gray-400 font-normal text-[13px] leading-[18px] mt-[35px] flex justify-center underline">Ainda não tenho uma conta</a>
      </div>
    </form>
  );
}

export default FormLogin;