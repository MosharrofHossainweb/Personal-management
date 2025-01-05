import React, { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { FadeLoader } from 'react-spinners';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
  // ==================firebase variable===========================
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  // ==================firebase variable===========================
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [confirmpasswordError, setConfirmPasswordError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Reset errors
    setNameError('');
    setEmailError('');
    setPhoneNumberError('');
    setPasswordError('');
    setConfirmPasswordError('');

    let valid = true;

    // Validation
    if (!name) {
      setNameError('Enter Your Name');
      valid = false;
    }
    if (!email) {
      setEmailError('Enter Your Email');
      valid = false;
    }
    if (!phoneNumber) {
      setPhoneNumberError('Enter Your Phone Number');
      valid = false;
    }
    if (!password) {
      setPasswordError('Enter Your Password');
      valid = false;
    } else if (password !== confirmpassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    }

    if (!valid) return;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // send email varification
        const auth = getAuth();
        sendEmailVerification(auth.currentUser).then(() => {
          setLoading(false);
          // ================Profile Update=================!
          const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
              'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-business-user-profile-vector-png-image_1541960.jpg',
          }).then(() => {
            navigate('/login')
            toast.success('!Verification Email has sent', {
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
          });

          // ================Profile Update=================!
        });
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == 'auth/email-already-in-use') {
          toast.success('This Email has already taken', {
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
  };
  // ==========================google Authenticatiom=================================
  const handelGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate('/')
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  // ==========================google Authenticatiom=================================
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 text-white rounded-xl shadow-lg w-full max-w-md p-6">
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-2">
            <img src="/path-to-icon.png" alt="Icon" />
          </div>
          <h1 className="text-2xl font-bold">Create an Account</h1>
          <p className="text-gray-400">You are welcome!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <input
              onChange={(e) => {
                setName(e.target.value);
                setNameError('');
              }}
              type="text"
              placeholder="Enter Your Name"
              className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-red-500 text-sm">{nameError}</p>
          </div>
          <input
            onChange={(e) => {
              setEmail(e.target.value), setEmailError('');
            }}
            type="email"
            placeholder="E-mail"
            className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-red-500 text-sm">{emailError}</p>
          <input
            onChange={(e) => {
              setPhoneNumber(e.target.value), setPhoneNumberError('');
            }}
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-red-500 text-sm">{phoneNumberError}</p>
          <input
            onChange={(e) => {
              setPassword(e.target.value), setPasswordError('');
            }}
            type="password"
            placeholder="Password"
            className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-red-500 text-sm">{passwordError}</p>
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value), setConfirmPasswordError('');
            }}
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-red-500 text-sm">{confirmpasswordError}</p>
          {loading ? (
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-4 py-2 font-bold"
            >
              <FadeLoader />
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-4 py-6 font-bold"
            >
              Sign Up
            </button>
          )}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="w-4 h-4" />
            <label htmlFor="terms" className="text-gray-400 text-sm">
              I agree with terms & conditions
            </label>
          </div>
        </form>
        <div className="flex justify-between items-center">
          <button
            onClick={handelGoogle}
            className="bg-gray-700 hover:bg-gray-600 w-full text-center py-2 rounded-lg font-semibold"
          >
            Google Account
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-purple-500 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
