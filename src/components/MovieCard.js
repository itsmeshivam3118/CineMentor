import React from "react";
import { MOVIE_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ imgPath }) => {
  return (
    <div className="w-48 pr-4 rounded-lg">
      <img
        className="overflow-hidden"
        alt="img"
        src={MOVIE_IMG_CDN_URL + imgPath}
      ></img>
    </div>
  );
};

export default MovieCard;
