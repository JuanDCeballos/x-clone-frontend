import { LogInContextTypes } from '../Types';

export const LogInReducer = (state = {}, action) => {
  switch (action.type) {
    case LogInContextTypes.LogIn:
      return {
        ...state,
        logged: true,
        User: action.payload,
      };

    case LogInContextTypes.LogOut:
      return {
        ...state,
        logged: false,
        User: undefined,
      };
  }
};
