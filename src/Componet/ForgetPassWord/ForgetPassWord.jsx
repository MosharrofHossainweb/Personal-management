import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgetPassWord = () => {
  const [inputData, setInputData] = useState('');

  const handelReset = () => {
    if (!inputData) {
      toast.warn('  Please Enter Your Email!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    } else {
      sendPasswordResetEmail(auth, inputData)
        .then(() => {
            toast.warn('  Password reset email has sent!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
              });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };
  // =====================firebase variable========================
  const auth = getAuth();
  // =====================firebase variable========================
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 transform transition-all hover:scale-105 duration-300">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
            Reset Your Password
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Enter your email address, and we’ll send you a link to reset your
            password.
          </p>
          <form className="space-y-6">
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                onChange={(e) => setInputData(e.target.value)}
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter your email"
                required
              />

              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m0 0l4-4m-4 4l4 4"
                  />
                </svg>
              </div>
            </div>
          </form>
          <button
            onClick={handelReset}
            type="submit"
            className="w-full bg-gradient-to-r mt-3 from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transform transition-transform duration-300 hover:scale-105"
          >
            Send Reset Link
          </button>
          <div className="text-center mt-6">
            <Link
              to="/login"
              className="text-indigo-500 hover:underline text-sm transform transition-colors duration-300 hover:text-indigo-700"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassWord;
