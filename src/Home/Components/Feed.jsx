import { Tweet, Post } from '../../Tweets/Components';

export const Feed = () => {
  return (
    <>
      <div className="w-[634px]">
        <div className="border-l-2 border-r-2 border-b-2 flex text-center h-11  items-center justify-center">
          <div className="flex-1 cursor-pointer">
            <span>For you</span>
          </div>
          <div className="border-2 min-h-full rounded-b-full rounded-t-full border-gray-400"></div>
          <div className="flex-1 cursor-pointer">
            <span>Following</span>
          </div>
        </div>
        <Tweet />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};
