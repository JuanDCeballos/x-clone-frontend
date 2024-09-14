export const LogOutComponent = () => {
  return (
    <>
      <div className="min-h-screen bg-[rgb(65,65,66)] flex items-center justify-center">
        <div className="w-1/5 bg-black rounded-3xl  flex flex-col items-center justify-center">
          <img src="mainLogo.svg" className="size-20 mb-2 mt-4" />
          <div className="border-2 border-b-white rounded-full w-2/4 mb-4"></div>
          <div className="flex- flex-col items-start ">
            <p className="text-white font-semibold text-xl mt-2 mb-4 ml-6">
              ¿Salir de X?
            </p>
            <p className="text-gray-400 text-base mb-4 ml-6 mr-6">
              Siempre puedes volver. Si solamente quieres cambiar de cuenta,
              puedes hacerlo añadiendo la cuenta existente.
            </p>
          </div>
          <button className="bg-white mt-2 rounded-full w-3/4 h-8 font-semibold hover:bg-gray-200">
            Salir
          </button>
          <button className="bg-black mt-4 mb-6 rounded-full w-3/4 h-8 border-solid border-2 border-gray-500 font-semibold hover:bg-gray-900 text-white">
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};
