import LoginLandscape from "../../assets/image-login.png"
import FormLogin from "../../components";

function Login() {
  return (
    <section className="bg-[#070709] rounded-[34px] z-0 h-[654px] flex">
      <div className="ml-[60px] mt-[79px]">
        <div className="flex">
          <h1 className="text-white text-5xl font-bold leading-[64px] whitespace-nowrap mb-[60px]">Faça seu login</h1>
          <div className="ml-2 h-12 flex items-end">
            <div className="w-4 h-4 rounded-lg bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] items-end"></div>
          </div>
        </div>

        <FormLogin />
      </div>

      <div>
        <img src={LoginLandscape} alt="paisagem"  className="w-full h-full"/>
      </div>
    </section>
  );
}

export default Login;