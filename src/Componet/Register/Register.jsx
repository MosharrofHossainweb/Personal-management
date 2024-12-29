import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
  // ==============================firebase vafriable========================
  const auth = getAuth();
  // ==============================firebase vafriable========================
  // ================================= UseStae===============================
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phonNumber, setPhonNumer] = useState('');
  const [phonNumberError, setphonNumberError] = useState('');
  const [email, setemail] = useState('');
  const [emailError, setemailError] = useState('');
  const [show, setShow] = useState('');
  // ================================= UseStae===============================
  // =============================functionality==============================
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError('Enter Your name');
    }
    if (!email) {
      setemailError('Enter Your Email');
    }
    if(!phonNumber){
      setphonNumberError('Enter Your Phone Number')
    }
    if (!password) {
      setPasswordError('Enter Your Password');
    }
  };
  // =============================functionality==============================

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 text-white rounded-xl shadow-lg w-full max-w-md p-6">
          <div className="text-center mb-6">
            <div className="w-12 h-12 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-2">
              <img src="/path-to-icon.png" alt="Icon" />
            </div>
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-gray-400">You are welcome!</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <input
                onChange={(e) => {
                  setName(e.target.value), setNameError('');
                }}
                type="text"
                placeholder="Enter Your Name"
                className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
              />
              <p>{nameError}</p>
            </div>
            <input
              onChange={(e) => {
                setemail(e.target.value), setemailError('');
              }}
              type="email"
              placeholder="E-mail"
              className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
            />
            <p>{emailError}</p>
            <input onChange={(e)=>{setPhonNumer(e.target.value),phonNumberError('')}}
              type="tel"
              placeholder="Phone numbers"
              className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
            />
            <p>{phonNumberError}</p>
            <input
              onChange={(e) => {
                setPassword(e.target.value), setPasswordError('');
              }}
              type="password"
              placeholder="Password"
              className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
            />
            <p>{passwordError}</p>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              onClick={handelSubmit}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-4 py-2 font-bold"
            >
              Sign up
            </button>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="text-gray-400 text-sm">
                I agree with terms & conditions
              </label>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-gray-700 hover:bg-gray-600 w-full text-center py-2 rounded-lg font-semibold">
                Google account
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 w-full text-center py-2 rounded-lg font-semibold ml-2">
                Facebook account
              </button>
            </div>
          </form>

          <p className="text-center text-gray-400 text-sm mt-4">
            Already have an account?{' '}
            <Link
              onClick={() => navigate('/login')}
              className="text-purple-500 hover:underline"
            >
              Login{' '}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
