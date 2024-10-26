import { Tweet, Post } from '../../Tweets/Components';
import { useContext, useEffect, useState } from 'react';
import { PostsContext } from '../../Tweets/Context/index.js';
import { LogInContext } from '../../LogIn/Context/index.js';


export const Feed = () => {
  const { GetPosts, posts } = useContext(PostsContext);
  const { User } = useContext(LogInContext);

  useEffect(() => {
    GetPosts(User)
  }, []);

  return (
    <>
      <div className="w-[634px]">
        <div className="border-l-2 border-r-2 flex text-center h-11  items-center justify-center">
          <div className="flex-1 cursor-pointer">
            <span>For you</span>
          </div>
          <div className="border-2 min-h-full rounded-b-full rounded-t-full border-gray-400"></div>
          <div className="flex-1 cursor-pointer">
            <span>Following</span>
          </div>
        </div>
        <Tweet/>
        {
          posts.map((post) => (
            <Post key={post._id} PostInfo={post}/>
          ))
        }
      </div>
    </>
  );
};
