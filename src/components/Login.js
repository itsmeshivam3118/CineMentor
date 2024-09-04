import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_LOG_BG_IMG } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignedIn, setisSignedin] = useState(true);
  const [errorMsg, seterrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const toggleSigninFrom = () => {
    setisSignedin(!isSignedIn);
  };
  const handleButton = () => {
    const strRes = validateData(email.current.value, password.current.value);
    seterrorMsg(strRes);
    if (strRes) return; //return if credentials fail validations.

    if (!isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: userName.current.value,
            //photoURL: "https://example.com/jane-q-user/profile4.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              seterrorMsg(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="relative h-screen bg-gray-950">
      <Header />
      <div className="relative">
        {/* an overlay div to make bg-img blackish */}
        <div className="absolute inset-0 bg-gray-950 bg-opacity-50"></div>
      </div>
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
        className=" bg-gray-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-4/12 p-12 bg-opacity-70 text-white rounded"
      >
        <h1 className="text-3xl my-3 font-bold">
          {isSignedIn ? "Sign in" : "Sign up"}
        </h1>

        {!isSignedIn && (
          <input
            ref={userName}
            type="text"
            placeholder="Enter your name"
            className="py-4 px-2 m-2 bg-gray-950 border border-white bg-opacity-50 rounded "
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="py-4 px-2 m-2 bg-gray-950 border border-white bg-opacity-50 rounded"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-4 px-2 m-2 bg-gray-950 border border-white bg-opacity-50 rounded "
        />

        <p className="text-red-600 text-lg m-2">{errorMsg}</p>

        <button
          className="py-2 m-2 bg-orange-700 font-bold rounded"
          onClick={handleButton}
        >
          {isSignedIn ? "Sign in" : "Get Started!"}
        </button>
        <p className="py-2 m-2 cursor-pointer" onClick={toggleSigninFrom}>
          Dont have an account? Sign up now.
        </p>
      </form>
    </div>
  );
};

export default Login;
