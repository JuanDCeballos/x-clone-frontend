import { useContext, useEffect, useState } from 'react';
import { LogInContext } from '../../LogIn/Context';
import { GetFollowed } from '../Controller';
import { LoadingComponent } from '../../Common/Components';
import { toast } from 'sonner';
import { UnfollowUser } from '../Controller';

export const FollowedUsersComponent = () => {
  const { User } = useContext(LogInContext);
  const [IsGettingData, SetIsGettingData] = useState(true);
  const [Users, SetUsers] = useState([]);

  useEffect(() => {
    SetIsGettingData(true);
    GetFollowed(User)
      .then((result) => {
        SetUsers(result.data);
      })
      .finally(() => {
        SetIsGettingData(false);
      });
  }, []);

  const UnFollowUser = async (FollowerUID) => {
    const result = await UnfollowUser(User, FollowerUID);

    if (result.ok) {
      SetUsers(Users.filter((User) => User.uid != FollowerUID));
      toast.success('User unfollowed!');
    } else {
      toast.error('Unfollow user failed.');
    }
  };

  return (
    <div className="min-w-lg bg-black text-white">
      {IsGettingData ? (
        <LoadingComponent />
      ) : (
        <>
          {Users.map((user, index) => (
            <div
              key={index}
              className="flex items-start p-4 hover:bg-gray-900 border-b border-gray-800"
            >
              <img
                src={user.photo}
                alt={`${user.userName} avatar`}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-bold hover:underline">
                      {user.name}
                    </span>
                  </div>
                  <button
                    className="px-4 py-1 text-sm font-bold text-black bg-white rounded-full transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                    onClick={() => {
                      UnFollowUser(user.uid);
                    }}
                  >
                    Unfollow
                  </button>
                </div>
                <div className="text-gray-500">@{user.userName}</div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
