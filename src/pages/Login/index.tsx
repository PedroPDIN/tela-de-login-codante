import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginLandscape from "../../assets/image-login.png"
import FormLogin from "../../components";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onClickEvent = (e: React.FormEvent<HTMLButtonElement>): void => {
    // eslint-disable-next-line no-useless-escape
    const rgxEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,15}$/g;
    const rgxSenha = /[\w\d]{5,8}/g;
    const validEmail = rgxEmail.test(email);
    const validSenha = rgxSenha.test(senha);

    setLoading(true);

    if (!validEmail || !validSenha) {
      setTimeout(() => {
        alert("Email ou senha estão no formato incorreto");
        setLoading(false)
      }, 3000)
    } else {
      setTimeout(() => {
        navigate("/welcome")
        setLoading(false)
      }, 3000)
    }

    e.preventDefault();
  }
  
  return (
    <section className="bg-[#070709] rounded-[34px] z-0 h-[654px] flex">
      <div className="ml-[60px] mt-[79px]">
        <div className="flex">
          <h1 className="text-white text-5xl font-bold leading-[64px] whitespace-nowrap mb-[60px]">Faça seu login</h1>
          <div className="ml-2 h-12 flex items-end">
            <div className="w-4 h-4 rounded-lg bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] items-end"></div>
          </div>
        </div>

        <FormLogin
          email={ email }
          setEmail={ setEmail }
          senha={ senha }
          setSenha={ setSenha }
          onClickEvent={ onClickEvent }
          loading={ loading }
        />
      </div>

      <div>
        <img src={LoginLandscape} alt="paisagem"  className="w-full h-full"/>
      </div>
    </section>
  );
}

export default Login;