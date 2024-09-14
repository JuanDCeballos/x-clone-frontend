import {
  GoHomeFill,
  GoSearch,
  GoBell,
  GoMail,
  GoBookmark,
  GoPerson,
} from 'react-icons/go';
import { BsSlashSquare, BsFeather } from 'react-icons/bs';
import { PiDotsThreeCircleLight } from 'react-icons/pi';
import {} from 'react-icons/bs';

import { FaXTwitter } from 'react-icons/fa6';

import { SidebarIcon } from './../../Common/Components';

export const Toolbar = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-center w-16 h-screen p-2 bg-black">
        <div className="p-2 hover:bg-gray-800 rounded-full cursor-pointer mb-4">
          <FaXTwitter className="h-8 w-8 text-white" />
        </div>

        <div className="space-y-2">
          <SidebarIcon Icon={GoHomeFill} />
          <SidebarIcon Icon={GoSearch} />
          <SidebarIcon Icon={GoBell} />
          <SidebarIcon Icon={GoMail} />
          <SidebarIcon Icon={GoBookmark} />
          <SidebarIcon Icon={BsSlashSquare} />
          <SidebarIcon Icon={GoPerson} />
          <SidebarIcon Icon={PiDotsThreeCircleLight} />
        </div>

        <button className="w-10 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-500 transition duration-200 mt-4 p-2">
          <BsFeather className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};
