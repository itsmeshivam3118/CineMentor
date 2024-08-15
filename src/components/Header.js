import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/constants";

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
    <div className="flex justify-between absolute w-screen px-28 py-8 bg-gradient-to-b from-black z-20 items-center">
      <img className="w-40" src={NETFLIX_LOGO} alt="netflixLogo"></img>
      {user && (
        <div className=" flex justify-end items-center">
          <img
            className="w-10 z-20 rounded-md"
            src={USER_LOGO}
            alt="user-logo"
          />
          <button
            onClick={handleSignout}
            className="ml-4 text-red-500 font-bold z-20"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
