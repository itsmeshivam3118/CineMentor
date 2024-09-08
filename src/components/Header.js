import { signOut } from "firebase/auth";
import React from "react";

import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";

// import { NETFLIX_LOGO, USER_LOGO } from "../utils/constants";

function Header() {
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // navigate("/error");
      });
  };

  return (
    <div className="flex justify-between  w-screen px-8 py-5 bg-gray-950 z-20 items-center fixed ">
      <Link to={"/browse"}>
        <h1 className="text-3xl text-orange-600 font-bold ">CINEMENTOR</h1>
      </Link>

      {/* <img className="w-40" src={NETFLIX_LOGO} alt="netflixLogo"></img> */}
      {user && (
        <div className=" flex justify-end items-center">
          <Link to={"/search"}>
            <button
              type="button"
              className="flex items-center text-lg text-white bg-transparent hover:border hover:border-white hover:bg-neutral-800 hover:text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 me-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
                />
              </svg>
              Search
            </button>
          </Link>

          <button
            type="button"
            onClick={handleSignout}
            className="text-orange-600 bg-transparent border border-orange-600 hover:bg-neutral-800 hover:text-orange-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
