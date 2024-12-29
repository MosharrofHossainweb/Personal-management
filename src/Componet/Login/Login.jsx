import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 text-white rounded-xl shadow-lg w-full max-w-md p-6">
          <div className="text-center mb-6">
            <div className="w-12 h-12 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-2">
              <img src="/path-to-icon.png" alt="Icon" />
            </div>
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-gray-400">You are welcome!</p>
          </div>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500"
            />
           
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-4 py-3 font-bold"
            >
              Login
            </button>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="text-gray-400 text-sm">
                I agree with terms & conditions
              </label>
            </div>
           
          </form>

          <p className="text-center text-gray-400 text-sm mt-4">
            Don't have an account?{' '}
            <Link
              onClick={() => navigate('/register')}
              className="text-purple-500 hover:underline"
            >
              Register{' '}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
