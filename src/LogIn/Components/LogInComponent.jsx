import { useContext, useState } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { LogInWithUserName, LogInWithEmail } from '../Controller';
import { LogInContext } from '../Context/LogInContext';

export const LogInComponent = () => {
  const [PassWord, SetPassWord] = useState('');
  const [User, SetUser] = useState('');
  const { LogIn } = useContext(LogInContext);
  const navigate = useNavigate();

  async function OnLogIn() {
    let result;
    if (User.includes('@')) {
      result = await LogInWithEmail(User, PassWord);
    } else {
      result = await LogInWithUserName(User, PassWord);
    }

    if (result.ok) {
      LogIn(result.Token);
      navigate('/feed', { replace: true });
    }
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center bg-black min-h-screen">
        <div className="w-1/3">
          <img className="size-auto" src="mainLogo.svg" />
        </div>
        <div className="w-2/4">
          <div className="w-full">
            <h3 className="font-extrabold text-white text-6xl">
              Happening now
            </h3>
            <p className="mt-16 font-extrabold text-white text-3xl">
              Join today.
            </p>
          </div>
          <div>
            <div className="flex flex-col w-2/4 text-white gap-2 pt-2">
              <label htmlFor="email-userName">Email or user name</label>
              <input
                type="text"
                name="email"
                id="email-userName"
                placeholder="Email or user name"
                className="border border-[rgb(29,155,240)] bg-black h-11 pl-2 focus:outline-none rounded"
                onChange={(e) => {
                  SetUser(e.target.value);
                }}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="border border-[rgb(29,155,240)] bg-black h-11 pl-2 focus:outline-none rounded"
                onChange={(e) => {
                  SetPassWord(e.target.value);
                }}
              />
            </div>
            <button
              className="bg-[rgb(29,155,240)]  mt-6 rounded-full w-2/4 h-11 flex flex-row items-center justify-center font-semibold text-white hover:bg-[rgb(27,137,211)]"
              onClick={OnLogIn}
            >
              Sign in
            </button>
          </div>
          <div className="mt-6 border-2 border-b-white rounded-full w-2/4"></div>
          <div className="flex gap-1">
            <button className="bg-white mt-6 rounded-full w-60 h-11 flex flex-row items-center justify-center font-semibold hover:bg-gray-200">
              <FaGoogle className="text-2xl mr-4" />
            </button>
            <button className="bg-white mt-6 rounded-full w-60 h-11 flex flex-row items-center justify-center font-semibold hover:bg-gray-200">
              <FaApple className="text-3xl mr-5" />
            </button>
          </div>
          <Link
            to="/register"
            className="bg-[rgb(29,155,240)]  mt-6 rounded-full w-2/4 h-11 flex flex-row items-center justify-center font-semibold text-white hover:bg-[rgb(27,137,211)]"
          >
            Create account
          </Link>
        </div>
      </div>
    </>
  );
};
