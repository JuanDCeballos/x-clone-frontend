import { IoSearch } from "react-icons/io5";

export const SearchBarComponent = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row justify-start items-center bg-[rgb(47,50,53)] w-11/12 rounded-2xl">
          <IoSearch className="text-white text-xl cursor-pointer ml-4" />
          <input
            className="border border-[rgb(47,50,53)] bg-[rgb(47,50,53)] w-10/12 focus:outline-none text-white pl-4 h-8 font-semibold"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};
