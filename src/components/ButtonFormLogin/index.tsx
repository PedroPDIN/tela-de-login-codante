import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface Props {
  onClickEvent: (e: React.FormEvent<HTMLButtonElement>) => void,
  loading: boolean;
}

function ButtonFormLogin({ onClickEvent, loading}: Props) {
  return (
    <>
      {loading
        ?
        <button
          onClick={onClickEvent}
          className="text-white font-normal text-[23px] leading-[30px] bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] h-[53px] rounded-2xl"
        >
          <AiOutlineLoading3Quarters className="animate-spin text-[30px] w-full" />
        </button>
        :
        <button
          onClick={onClickEvent}
          className="text-white font-normal text-[23px] leading-[30px] bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] h-[53px] rounded-2xl"
        >
          Entrar
        </button>
      }
    </>
  );
}

export default ButtonFormLogin;