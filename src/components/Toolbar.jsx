import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaList,
  FaUser,
  FaEllipsisH,
  FaFeather,
} from "react-icons/fa";

const SidebarIcon = ({ Icon, text }) => (
  <div className="flex items-center space-x-4 p-2 hover:bg-gray-800 rounded-full cursor-pointer group">
    <Icon className="h-7 w-7 text-white group-hover:text-blue-400" />
    <span className="hidden xl:inline text-white group-hover:text-blue-400">
      {text}
    </span>
  </div>
);

const Toolbar = () => {
  return (
    <div className="h-screen-full p-2 bg-black">
      <div className="p-2 hover:bg-gray-800 rounded-full cursor-pointer mb-4">
        <FaTwitter className="h-8 w-8 text-blue-400" />
      </div>

      <SidebarIcon Icon={FaHome} text="Home" />
      <SidebarIcon Icon={FaHashtag} text="Explore" />
      <SidebarIcon Icon={FaBell} text="Notifications" />
      <SidebarIcon Icon={FaEnvelope} text="Messages" />
      <SidebarIcon Icon={FaBookmark} text="Bookmarks" />
      <SidebarIcon Icon={FaList} text="Lists" />
      <SidebarIcon Icon={FaUser} text="Profile" />
      <SidebarIcon Icon={FaEllipsisH} text="More" />

      <button className="bg-blue-400 text-white rounded-full text-lg font-bold shadow-lg hover:bg-blue-500 transition duration-200 mt-4 p-2">
        <FaFeather className="h-6 w-6" />
        <span className="hidden xl:inline">Tweet</span>
      </button>
    </div>
  );
};

export default Toolbar;
