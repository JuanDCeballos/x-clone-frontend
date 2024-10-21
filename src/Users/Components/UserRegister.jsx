import {
  FaTimes,
  FaUser,
  FaAt,
  FaLock,
  FaFileAlt,
  FaCamera,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const UserRegister = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://about.x.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png')",
        }}
      ></div>
      <div className="bg-black bg-opacity-80 rounded-lg w-full max-w-xl relative z-10 overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Create an account</h2>
            <button className="text-gray-400 hover:text-white">
              <Link
                to="/login"
                href="#"
                className="hover:text-blue-400 text-sm"
              >
                <FaTimes size={20} />
              </Link>
            </button>
          </div>
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-6 pb-6">
          <form className="space-y-4">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 rounded-md p-2 pl-10 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <FaAt className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="UserName"
                className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 rounded-md p-2 pl-10 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <FaAt className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 rounded-md p-2 pl-10 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 rounded-md p-2 pl-10 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <FaFileAlt className="absolute top-3 left-3 text-gray-400" />
              <textarea
                placeholder="Description"
                className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 rounded-md p-2 pl-10 focus:outline-none focus:border-blue-500"
                rows="3"
              ></textarea>
            </div>
            <div className="relative">
              <FaCamera className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Photo"
                className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 rounded-md p-2 pl-10 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-200"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/login" href="#" className="text-blue-400 text-sm">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
