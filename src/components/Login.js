import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setisSignedin] = useState(true);
  const toggleSigninFrom = () => {
    setisSignedin(!isSignedIn);
  };
  return (
    <div className="relative h-screen">
      <Header />
      <div className="relative">
        <img
          className="w-full h-screen object-cover "
          src="https://macmagazine.com.br/wp-content/uploads/2021/07/22-netflix-1920x1024.jpg"
          alt="netflixBg"
        />
        {/* an overlay div to make bg-img blackish */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <form className="bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-4/12 p-12 bg-opacity-70 text-white rounded">
        <h1 className="text-3xl my-3 font-bold">
          {isSignedIn ? "Sign in" : "Sign up"}
        </h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="py-4 px-2 m-2 bg-gray-950 border border-white bg-opacity-50 rounded"
        />
        {isSignedIn && (
          <input
            type="password"
            placeholder="Password"
            className="py-4 px-2 m-2 bg-gray-950 border border-white bg-opacity-50 rounded "
          />
        )}

        <button className="py-2 m-2 bg-netflixRed font-bold rounded">
          {isSignedIn ? "Sign in" : "Get Started!"}
        </button>
        <p className="py-2 m-2 cursor-pointer" onClick={toggleSigninFrom}>
          New to Netflix? Sign up now.
        </p>
      </form>
    </div>
  );
};

export default Login;
