import { LogInContextTypes } from '../Types';

export const LogInReducer = (state = {}, action) => {
  switch (action.type) {
    case LogInContextTypes.LogIn:
      console.log(action.payload);
      return {
        ...state,
        logged: true,
        User: action.payload._id,
        Photo: action.payload.Photo,
      };

    case LogInContextTypes.LogOut:
      return {
        ...state,
        logged: false,
        User: undefined,
        Photo: undefined,
      };
  }
};
