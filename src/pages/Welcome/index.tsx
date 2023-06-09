import { useNavigate } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Welcome() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#070709] rounded-[34px] h-[480px] w-[800px] max-sm:w-[440px] sm:max-md:w-[470px] md:max-lg:w-[700px]">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-white font-normal text-[60px] text-center flex items-center justify-center w-full max-sm:text-[48px] sm:max-md:text-[50px]">
          Seja bem vindo<p className="text-transparent bg-clip-text bg-gradient-to-b from-[#4158D0] via-[#C850C0] to-[#FFCC70] font-normal text-[70px] max-sm:text-[48px] sm:max-md:[50px]">
            !
          </p>
        </h1>

        <BsFillCheckCircleFill className="text-[#070709] text-[100px] bg-gradient-to-t from-[#4158D0] via-[#C850C0] to-[#FFCC70] rounded-full w-[120px] animate-bounce my-10 max-sm:text-[70px] max-sm:w-[90px] sm:max-md:text-[80px] sm:max-md:w-[100px] md:max-lg:text-[90px] md:max-lg:w-[110px]" />

        <button
          onClick={ (): void => navigate("/") }
          className="text-white font-normal text-[23px] leading-[30px] bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] w-[150px] h-[53px] rounded-2xl mt-6 max-sm:h-[42px] sm:max-md:h-[50px]"
        >
          Sair
        </button>
      </div>
    </section>
  );
}

export default Welcome;