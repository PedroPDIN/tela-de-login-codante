import { BsFillCheckCircleFill } from "react-icons/bs";

function Welcome() {
  return (
    <section className="bg-[#070709] rounded-[34px] h-[654px] w-[1080px]">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-white font-normal text-[80px] text-center flex items-center justify-center w-full">
          Seja bem vindo<p className="text-transparent bg-clip-text bg-gradient-to-b from-[#4158D0] via-[#C850C0] to-[#FFCC70] font-normal text-[100px]">
            !
          </p>
        </h1>

        <BsFillCheckCircleFill className="text-[#070709] text-[100px] bg-gradient-to-t from-[#4158D0] via-[#C850C0] to-[#FFCC70] rounded-full w-[120px] animate-bounce my-10" />

        <button className="text-white font-normal text-[23px] leading-[30px] bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] w-[150px] h-[53px] rounded-2xl mt-10">Sair</button>
      </div>
    </section>
  );
}

export default Welcome;