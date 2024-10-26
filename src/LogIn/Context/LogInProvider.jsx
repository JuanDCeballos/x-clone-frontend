import { useReducer } from 'react';
import { LogInReducer } from './Reducers';
import { LogInContext } from './LogInContext';
import { LogInContextTypes } from './Types';

const initialState = { logged: false };

const init = () => {
  const User = JSON.parse(localStorage.getItem('User'));
  return {
    logged: !!User,
    User: User._id,
    Photo: User.Photo,
  };
};

export const LogInProvider = ({ children }) => {
  const [LogInState, dispatch] = useReducer(LogInReducer, initialState, init);

  function LogIn(token, photo) {
    const payload = { _id: token, Photo: photo };
    const action = { type: LogInContextTypes.LogIn, payload };
    localStorage.setItem('User', JSON.stringify(payload));
    dispatch(action);
    console.log(LogInState);
  }

  function LogOut() {
    localStorage.removeItem('User');
    dispatch({ type: LogInContextTypes.LogOut });
  }

  return (
    <LogInContext.Provider value={{ ...LogInState, LogIn, LogOut }}>
      {children}
    </LogInContext.Provider>
  );
};
