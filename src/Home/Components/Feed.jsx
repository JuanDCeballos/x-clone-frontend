import Post from './Post';

const Feed = () => {
  return (
    <>
      <h1>Feed component</h1>
      <div className="border-2 border-red-600 w-[634px]">
        <div className="flex text-center">
          <div className="flex-1 cursor-pointer">
            <span>For you</span>
            <div className="border-b-4 rounded-b-full rounded-t-full border-sky-500"></div>
          </div>
          <div className="flex-1 cursor-pointer">
            <span>Following</span>
            <div className="border-b-4 rounded-b-full rounded-t-full border-sky-500"></div>
          </div>
        </div>
        <Post />
      </div>
    </>
  );
};

export default Feed;
