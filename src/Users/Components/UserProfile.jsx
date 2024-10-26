import { FaArrowLeft, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { GetUserDataByUID } from '../Controller';
import { LogInContext } from '../../LogIn/Context';
import { LoadingComponent } from '../../Common/Components';
import { FollowersUsersComponent, FollowedUsersComponent } from './';

const TabsDictionary = {
  Posts: 'My Posts',
  Followers: 'Followers',
  Following: 'Following',
};

export const UserProfile = () => {
  const { User } = useContext(LogInContext);
  const [CurrentUser, SetCurrentUser] = useState();
  const [IsGettingData, SetIsGettingData] = useState(true);
  const [CurrentTabSelected, SetCurrentTabSelected] = useState(
    TabsDictionary.Posts
  );

  useEffect(() => {
    SetIsGettingData(true);
    GetUserDataByUID(User)
      .then((response) => {
        SetCurrentUser(response.data.data);
      })
      .finally(() => {
        SetIsGettingData(false);
      });
  }, []);

  function GetCurrentViewByTab(SelectedTab) {
    switch (SelectedTab) {
      case TabsDictionary.Posts:
        break;

      case TabsDictionary.Following:
        return <FollowedUsersComponent />;

      case TabsDictionary.Followers:
        return <FollowersUsersComponent />;
    }
  }

  return (
    <div className=" bg-black text-white w-[634px]">
      {IsGettingData ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="flex items-center p-4 border-b border-gray-800">
            <FaArrowLeft className="mr-8 cursor-pointer" />
            <div>
              <h2 className="font-bold text-xl">{CurrentUser?.Name}</h2>
              <p className="text-gray-500 text-sm">
                {CurrentUser?.postsCount} post
              </p>
            </div>
          </div>

          <div className="h-48 bg-gray-800 relative">
            <img
              src={CurrentUser?.photo}
              alt={`${CurrentUser?.Name}'s profile`}
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
              {CurrentUser?.Name}
              {CurrentUser?.verified && (
                <FaCheckCircle className="text-blue-400 ml-1" />
              )}
            </h1>
            <p className="text-gray-500">@{CurrentUser?.userName}</p>
            <div className="flex items-center mt-2 text-gray-500">
              <FaCalendarAlt className="mr-2" />
              <span>Joined {CurrentUser?.CreatedAt}</span>
            </div>
            <div className="flex mt-2">
              <span className="mr-4">
                <strong>{CurrentUser?.followed}</strong> Following
              </span>
              <span>
                <strong>{CurrentUser?.followers}</strong> Followers
              </span>
            </div>
          </div>

          <div className="flex border-b border-gray-800">
            {[
              TabsDictionary.Posts,
              TabsDictionary.Following,
              TabsDictionary.Followers,
            ].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-4 hover:bg-gray-800 ${
                  CurrentTabSelected === tab
                    ? 'border-b-2 border-blue-400 font-bold'
                    : 'text-gray-500'
                }`}
                onClick={() => {
                  SetCurrentTabSelected(tab);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          {GetCurrentViewByTab(CurrentTabSelected)}
        </>
      )}
    </div>
  );
};
