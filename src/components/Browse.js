import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div>
      <Header />
      <div className="relative flex justify-end items-center p-4">
        <img
          className="w-10 z-20"
          src="https://th.bing.com/th/id/OIP.naPthsI28qY2ROHWcwxLBgAAAA?pid=ImgDet&w=188&h=188&c=7"
          alt="user-logo"
        />
        <button
          onClick={handleSignout}
          className="ml-4 text-red-500 font-bold z-20"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Browse;
