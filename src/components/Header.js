import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { USER_LOGO } from "../utils/constants";
// import { NETFLIX_LOGO, USER_LOGO } from "../utils/constants";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="flex justify-between  w-screen px-8 py-5 bg-gray-950 z-20 items-center fixed ">
      <h1 className="text-3xl text-orange-600 font-bold ">CINEMENTOR</h1>
      {/* <img className="w-40" src={NETFLIX_LOGO} alt="netflixLogo"></img> */}
      {user && (
        <div className=" flex justify-end items-center">
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
