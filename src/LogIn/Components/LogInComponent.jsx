import { FaApple, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const LogInComponent = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center bg-black min-h-screen">
        <div className="md:w-1/3 w-full flex justify-center mb-8 md:mb-0">
          <img className="w-48" src="mainLogo.svg" alt="Main Logo" />
        </div>
        <div className="md:w-1/3 w-full px-4">
          <div className="w-full text-center md:text-left">
            <h3 className="font-extrabold text-white text-5xl">
              Happening now
            </h3>
            <p className="mt-8 font-extrabold text-white text-2xl">
              Join today.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex flex-col w-full text-white gap-4">
              <label htmlFor="email-userName" className="text-sm">
                Email or user name
              </label>
              <input
                type="text"
                name="email"
                id="email-userName"
                placeholder="Email or user name"
                className="border border-[rgb(29,155,240)] bg-black h-12 pl-4 focus:outline-none rounded-md"
              />
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="border border-[rgb(29,155,240)] bg-black h-12 pl-4 focus:outline-none rounded-md"
              />
            </div>
            <button className="bg-[rgb(29,155,240)] mt-6 rounded-full w-full h-12 flex items-center justify-center font-semibold text-white hover:bg-[rgb(27,137,211)] transition-colors duration-300">
              Sign in
            </button>
          </div>
          <div className="mt-6 border-t-2 border-gray-600 w-full"></div>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="bg-white rounded-full w-full h-12 flex items-center justify-center font-semibold hover:bg-gray-200 transition-colors duration-300">
              <FaGoogle className="text-xl mr-4" />
              Sign in with Google
            </button>
            <button className="bg-white rounded-full w-full h-12 flex items-center justify-center font-semibold hover:bg-gray-200 transition-colors duration-300">
              <FaApple className="text-xl mr-4" />
              Sign in with Apple
            </button>
          </div>
          <Link
            to="/register"
            className="bg-[rgb(29,155,240)] mt-6 rounded-full w-full h-12 flex items-center justify-center font-semibold text-white hover:bg-[rgb(27,137,211)] transition-colors duration-300"
          >
            Create account
          </Link>
        </div>
      </div>
    </>
  );
};
