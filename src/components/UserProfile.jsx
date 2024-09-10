import { FaArrowLeft, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const UserProfile = () => {
  const user = {
    name: "Pedro el escamoso",
    username: "Pedro010003",
    joinDate: "June 2023",
    postsCount: 1,
    following: 10,
    followers: 0,
    profileImage:
      "https://community-lens.storage.googleapis.com/preview-media/thumbnail_poster/b501ad7e-e56b-4895-ad80-8abb5320510d.jpg",
    verified: true,
  };

  return (
    <div className=" bg-black text-white w-[6000px] ">
      <div className="flex items-center p-4 border-b border-gray-800">
        <FaArrowLeft className="mr-8 cursor-pointer" />
        <div>
          <h2 className="font-bold text-xl">{user.name}</h2>
          <p className="text-gray-500 text-sm">{user.postsCount} post</p>
        </div>
      </div>

      <div className="h-48 bg-gray-800 relative">
        <img
          src={user.profileImage}
          alt={`${user.name}'s profile`}
          className="absolute bottom-0 left-4 transform translate-y-1/2 w-32 h-32 rounded-full border-4 border-black"
        />
      </div>

      <div className="flex justify-end p-4">
        <button className="border border-gray-600 text-white px-4 py-2 rounded-full font-bold hover:bg-gray-800">
          Edit profile
        </button>
      </div>

      <div className="p-4">
        <h1 className="font-bold text-xl flex items-center">
          {user.name}
          {user.verified && <FaCheckCircle className="text-blue-400 ml-1" />}
        </h1>
        <p className="text-gray-500">@{user.username}</p>
        <div className="flex items-center mt-2 text-gray-500">
          <FaCalendarAlt className="mr-2" />
          <span>Joined {user.joinDate}</span>
        </div>
        <div className="flex mt-2">
          <span className="mr-4">
            <strong>{user.following}</strong> Following
          </span>
          <span>
            <strong>{user.followers}</strong> Followers
          </span>
        </div>
      </div>

      <div className="flex border-b border-gray-800">
        {["Posts", "Replies", "Highlights", "Articles", "Media", "Likes"].map(
          (tab, index) => (
            <button
              key={index}
              className={`flex-1 py-4 hover:bg-gray-800 ${
                index === 0
                  ? "border-b-2 border-blue-400 font-bold"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      <div className="p-4">
        <h2 className="font-bold text-xl">Who to follow</h2>
      </div>
    </div>
  );
};

export default UserProfile;
