import { FaApple, FaGoogle } from "react-icons/fa";

export const LogInComponent = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center bg-black min-h-screen">
        <div className="w-1/3">
          <img className="size-auto" src="mainLogo.svg" />
        </div>
        <div className="w-2/4">
          <div className="w-full">
            <h3 className="font-extrabold text-white text-6xl">
              Lo que está pasando ahora
            </h3>
            <p className="mt-16 font-extrabold text-white text-3xl">
              Únete hoy
            </p>
          </div>
          <div>
            <button className="bg-white mt-6 rounded-full w-2/4 h-11 flex flex-row items-center justify-center font-semibold hover:bg-gray-200">
              <FaGoogle className="text-2xl mr-4" />
              Regístrate con Google
            </button>
            <button className="bg-white mt-6 rounded-full w-2/4 h-11 flex flex-row items-center justify-center font-semibold hover:bg-gray-200">
              <FaApple className="text-3xl mr-5" />
              Regístrate con Apple
            </button>
          </div>
          <div className="mt-6 border-2 border-b-white rounded-full w-2/4"></div>
          <button className="bg-[rgb(29,155,240)]  mt-6 rounded-full w-2/4 h-11 flex flex-row items-center justify-center font-semibold text-white hover:bg-[rgb(27,137,211)]">
            Crear cuenta
          </button>
          <p className="mt-16 font-medium text-white text-lg cursor-pointer hover:text-gray-200">
            ¿Ya tienes una cuenta?
          </p>
        </div>
      </div>
    </>
  );
};
