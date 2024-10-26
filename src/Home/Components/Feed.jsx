import { Tweet, Post } from '../../Posts/Components';
import { useContext, useEffect, useState } from 'react';
import { PostsContext } from '../../Posts/Context/index.js';
import { LogInContext } from '../../LogIn/Context/index.js';
import { LoadingComponent } from '../../Common/Components';

export const Feed = () => {
  const { GetPosts, posts } = useContext(PostsContext);
  const { User } = useContext(LogInContext);
  const [IsGettingData, SetIsGettingData] = useState(true);

  useEffect(() => {
    SetIsGettingData(true);
    GetPosts(User).finally(() => {
      SetIsGettingData(false);
    });
  }, []);

  return (
    <>
      <div className="w-[634px]">
        {IsGettingData ? (
          <LoadingComponent />
        ) : (
          <>
            <div className="border-l-2 border-r-2 flex text-center h-11  items-center justify-center">
              <div className="flex-1 cursor-pointer">
                <span>For you</span>
              </div>
              <div className="border-2 min-h-full rounded-b-full rounded-t-full border-gray-400"></div>
              <div className="flex-1 cursor-pointer">
                <span>Following</span>
              </div>
            </div>
            <Tweet />
            {posts.map((post) => (
              <Post key={post._id} PostInfo={post} />
            ))}
          </>
        )}
      </div>
    </>
  );
};
