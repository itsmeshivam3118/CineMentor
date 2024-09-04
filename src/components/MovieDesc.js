import React from "react";
import { MOVIE_IMG_CDN_URL } from "../utils/constants";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";
import { useSelector } from "react-redux";

const MovieDesc = ({ movieDetail, movie_id }) => {
  useGetMovieTrailer(movie_id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const {
    original_title,
    overview,
    runtime,
    release_date,
    genres,
    backdrop_path,
  } = movieDetail;
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full  ">
        <img
          alt="bg-img"
          className="w-full h-full  object-fill "
          src={MOVIE_IMG_CDN_URL + backdrop_path}
        />
        {/* an overlay div to make bg-img blackish */}
        <div className="absolute inset-0 bg-black bg-opacity-50 bg-gradient-to-t from-gray-950  "></div>
      </div>
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-white px-12 top-36">
        <h1 className="text-6xl font-bold drop-shadow-lg">{original_title}</h1>
        <p className="text-sm mt-3 text-gray-300">
          {release_date.substring(0, release_date.length - 6)} &#8226; {runtime}
          min
        </p>
        <a
          href={`https://www.youtube.com/watch?v=${trailerVideo?.key}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            class="focus:outline-none text-black bg-orange-600 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2 flex items-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-2"
            >
              <path
                d="M5 4.99c0-.972 0-1.457.202-1.725a1 1 0 0 1 .738-.395c.335-.02.74.25 1.548.788l10.515 7.01c.668.446 1.002.668 1.118.949a1 1 0 0 1 0 .766c-.116.28-.45.503-1.118.948l-10.515 7.01c-.809.54-1.213.809-1.548.789a1 1 0 0 1-.738-.395C5 20.467 5 19.982 5 19.01V4.99Z"
                stroke="currentColor"
                stroke-width="currentStroke"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Play Trailer
          </button>
        </a>

        {/* {genres?.map((genre) => (
          <span>{genre.name}</span>
        ))} */}
        <p className="text-gray-300 text-sm mt-2">
          {genres?.map((genre) => genre.name).join(" • ")}
        </p>
        <div className="mt-6 text-md text-gray-300 w-1/2 drop-shadow-lg">
          {overview}
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;
