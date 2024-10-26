import { PostReducerTypes } from '../Types';

export const PostsReducer = (state = {}, action) => {
  switch (action.type) {
    case PostReducerTypes.UpdateLastPostInfo:
      return {
        ...state,
        LastPostInfo: {
          _id: action.payload._id,
          createdAt: action.payload.CreatedAt,
        },
      };

    case PostReducerTypes.LoadPosts:
      return {
        ...state,
        posts: [...(state.posts || []), ...action.payload],
      };

    case PostReducerTypes.InsertCreatedPost:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
  }
};
