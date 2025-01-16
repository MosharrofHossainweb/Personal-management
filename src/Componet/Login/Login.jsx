import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Slide, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userData } from '../../Slice/UserSlice';
const Login = () => {
  // ====================firebase Authentication====================
  const auth = getAuth();
  // ====================firebase Authentication====================
  // ===========================state============================
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  // ===========================state============================
  // ==========================Redux variable===========================
  const dispatch = useDispatch();
  // ==========================Redux variable===========================
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Enter your E-mail');
    }
    if (!password) {
      setPasswordError('Enter Your Password');
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.emailVerified === false) {
            toast.warn('Email is not varified!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
              transition: Slide,
            });
          } else {
            navigate('/profile');
            // ============Set data to Redux============

            dispatch(userData(userCredential.user));
            // ============Set data to Redux============
            // ================set data to the local starage ====================
            localStorage.setItem('user',JSON.stringify(userCredential.user))
            // ================set data to the local starage ====================
            toast.warn('Login Succesfully!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
              transition: Slide,
            });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == 'auth/invalid-credential') {
            toast.warn('Something is wrong!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
              transition: Slide,
            });
          }
        });
    }
  };

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

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
              type="email"
              placeholder="E-mail"
              className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError('');
              }}
              type="password"
              placeholder="Password"
              className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500"
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}

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
            <Link to="/register" className="text-purple-500 hover:underline">
              Register{' '}
            </Link>
          </p>
          <p className="text-center text-gray-400 text-sm mt-4">
            Forget Password?{' '}
            <Link
              to="/forgetpassword"
              className="text-purple-500 hover:underline"
            >
              Reset{' '}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
