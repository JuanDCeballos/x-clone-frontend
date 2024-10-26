import { PostReducerTypes } from './Types/index.js';
import { useReducer } from 'react';
import { PostsReducer } from './Reducers/index.js';
import { PostsContext } from './PostsContext.jsx';
import { GetAllPosts } from '../Controller/index.js';

const InialState = {
  posts: [],
  LastPostInfo: {
    _id: undefined,
    createdAt: undefined,
  },
  ModalIsOpen: false,
};

export const PostsProvider = ({ children }) => {
  const [PostsState, dispatch] = useReducer(PostsReducer, InialState);

  function UpdateLastPostInfo(_id, CreatedAt) {
    const payload = { _id, CreatedAt };
    const action = { type: PostReducerTypes.UpdateLastPostInfo, payload };
    dispatch(action);
  }

  function InsertCreatedPost(Post) {
    const payload = Post;
    const action = { type: PostReducerTypes.InsertCreatedPost, payload };
    dispatch(action);
  }

  async function GetPosts(Token) {
    const RequestResult = await GetAllPosts(
      Token,
      PostsState?.LastPostInfo?._id,
      PostsState?.LastPostInfo?.createdAt
    );
    if (!RequestResult.ok) return false;
    const payload = RequestResult.response.data?.posts;
    const action = { type: PostReducerTypes.LoadPosts, payload };
    dispatch(action);
    UpdateLastPostInfo(
      RequestResult.response.data?.lastPostInfo?.id,
      RequestResult.response.data?.lastPostInfo?.CreatedDateTime
    );
    return true;
  }

  function CloseModal() {
    dispatch({ type: PostReducerTypes.CloseTweetModal });
  }

  function OpenModal() {
    dispatch({ type: PostReducerTypes.OpenTweetModal });
  }

  return (
    <PostsContext.Provider
      value={{
        ...PostsState,
        InsertCreatedPost,
        GetPosts,
        CloseModal,
        OpenModal,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
