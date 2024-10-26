import { useContext, useEffect, useState } from 'react';
import { LogInContext } from '../../LogIn/Context';
import { GetFollowers } from '../Controller';
import { LoadingComponent } from '../../Common/Components';

export const FollowersUsersComponent = () => {
  const { User } = useContext(LogInContext);
  const [IsGettingData, SetIsGettingData] = useState(true);
  const [Users, SetUsers] = useState([]);

  useEffect(() => {
    SetIsGettingData(true);
    GetFollowers(User)
      .then((result) => {
        SetUsers(result.data);
      })
      .finally(() => {
        SetIsGettingData(false);
      });
  }, []);

  return (
    <div className="max-w-lg bg-black text-white">
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
