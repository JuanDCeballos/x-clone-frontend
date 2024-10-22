import React from 'react';

export const UserFollowing = () => {
  const users = [
    {
      username: "John Doe",
      handle: "@johndoe",
      description: "Generic user description for all users.",
      verified: false,
      avatar: "/api/placeholder/32/32"
    },
    {
      username: "John Doe",
      handle: "@johndoe",
      description: "Generic user description for all users.",
      verified: false,
      avatar: "/api/placeholder/32/32"
    },
    {
        username: "John Doe",
        handle: "@johndoe",
        description: "Generic user description for all users.",
        verified: false,
        avatar: "/api/placeholder/32/32"
      },
      {
        username: "John Doe",
        handle: "@johndoe",
        description: "Generic user description for all users.",
        verified: false,
        avatar: "/api/placeholder/32/32"
      },
    {
      username: "John Doe",
      handle: "@johndoe",
      description: "Generic user description for all users.",
      verified: false,
      avatar: "/api/placeholder/32/32"
    },
    {
      username: "John Doe",
      handle: "@johndoe",
      description: "Generic user description for all users.",
      verified: false,
      avatar: "/api/placeholder/32/32"
    },
    {
      username: "John Doe",
      handle: "@johndoe",
      description: "Generic user description for all users.",
      verified: false,
      avatar: "/api/placeholder/32/32"
    }
  ];

  return (
    <div className="max-w-lg bg-black text-white">
      {users.map((user, index) => (
        <div key={index} className="flex items-start p-4 hover:bg-gray-900 border-b border-gray-800">
          <img
            src={user.avatar}
            alt={`${user.username} avatar`}
            className="w-12 h-12 rounded-full mr-3"
          />
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-bold hover:underline">{user.username}</span>
              </div>
              <button className="px-4 py-1 text-sm font-bold text-black bg-white rounded-full transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                Following
              </button>
            </div>
            <div className="text-gray-500">{user.handle}</div>
            <p className="mt-1 text-sm">{user.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
