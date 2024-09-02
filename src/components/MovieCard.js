import React from "react";
import { MOVIE_IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ imgPath, movie_id }) => {
  //console.log(movie_id);
  return (
    <Link to={"/moviePage/" + movie_id}>
      <div className="w-48 pr-4 cursor-pointer my-3 transform    transition duration-500 hover:scale-105 flex justify-center items-center">
        <img
          className="overflow-hidden rounded-md  mx-auto  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
          alt="img"
          src={MOVIE_IMG_CDN_URL + imgPath}
        ></img>
      </div>
    </Link>
  );
};

export default MovieCard;
