// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxYV2AHM0URkKFord6tt_8zYwH3tIFhcY",
  authDomain: "personal-managment-a59a2.firebaseapp.com",
  projectId: "personal-managment-a59a2",
  storageBucket: "personal-managment-a59a2.firebasestorage.app",
  messagingSenderId: "312951324815",
  appId: "1:312951324815:web:6ecb5a95ae55402aa970fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app