export const UnderConstructionComponent = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-[rgb(65,65,66)]">
        <div className="w-1/5 bg-black rounded-3xl  flex flex-col items-center justify-center">
          <img src="UnderConstruction.png" className="size-72" />
          <div className="border-2 border-b-white rounded-full w-3/4 mb-4"></div>
          <p className="text-white font-extrabold text-xl">
            This site is not available
          </p>
          <p className="text-white mb-8 text-lg font-bold">
            We are working on it!
          </p>
        </div>
      </div>
    </>
  );
};
