// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU9UrpzTTiBa9UUT8AG8atNaU73Wvk06M",
  authDomain: "login-firebase-43070.firebaseapp.com",
  projectId: "login-firebase-43070",
  storageBucket: "login-firebase-43070.appspot.com",
  messagingSenderId: "786549347224",
  appId: "1:786549347224:web:bf8dbd41f5dc0ccae511ed",
  measurementId: "G-NKST598CMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)