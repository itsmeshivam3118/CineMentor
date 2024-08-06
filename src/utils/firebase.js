// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc4QvJib8CaW2eSOSHJgfrNLla6OnKcTc",
  authDomain: "netflixgpt-f7df0.firebaseapp.com",
  projectId: "netflixgpt-f7df0",
  storageBucket: "netflixgpt-f7df0.appspot.com",
  messagingSenderId: "957179769680",
  appId: "1:957179769680:web:0e3b1102b5bb6ce095f255",
  measurementId: "G-JRNJ7Y0GL0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
