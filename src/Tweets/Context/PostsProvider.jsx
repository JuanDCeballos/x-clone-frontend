import { PostReducerTypes } from './Types'
import { useReducer } from 'react';
import { PostsReducer } from './Reducers/index.js';
import { PostsContext } from './PostsContext.jsx';
import { GetAllPosts } from '../Controller/index.js';

const InialState = {
  posts: [],
  LastPostInfo:{
    _id: undefined,
    createdAt: undefined,
  }
}

export const PostsProvider = ({ children }) => {

  const [PostsState, dispatch] = useReducer(PostsReducer, InialState, );

  function UpdateLastPostInfo(_id, CreatedAt){
    const payload = { _id, CreatedAt };
    const action = {type: PostReducerTypes.UpdateLastPostInfo, payload };
    dispatch(action);
  }

  async function GetPosts(Token){
    const RequestResult = await GetAllPosts(Token, PostsState?.LastPostInfo?._id, PostsState?.LastPostInfo?.createdAt);
    if(!RequestResult.ok) return false;
    const payload = RequestResult.response.data?.posts;
    const action = {type: PostReducerTypes.LoadPosts, payload };
    dispatch(action);
    UpdateLastPostInfo(RequestResult.response.data?.lastPostInfo?.id, RequestResult.response.data?.lastPostInfo?.CreatedDateTime);
    return true;
  }

  return (
    <PostsContext.Provider value={{
      ...PostsState,
      GetPosts
    }}>
      {children}
    </PostsContext.Provider>
  )
}