import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import { useSelector } from "react-redux";
import { MOVIE_IMG_CDN_URL } from "../utils/constants";

const MoviePage = () => {
  const { movie_id } = useParams();
  console.log(movie_id);
  useGetMovieDetails(movie_id);
  const movieDetail = useSelector((store) => store.movies.movieDetails);
  console.log(movieDetail);
  if (!movieDetail) {
    return <div>Sorry</div>;
  }
  const {
    original_title,
    overview,
    poster_path,
    runtime,
    release_date,
    genres,
  } = movieDetail;

  return (
    <div>
      <h1>
        {original_title}, time-{runtime} min
      </h1>
      {genres?.map((genre) => (
        <li>{genre.name}</li>
      ))}
      <p>{release_date}</p>
      <p>{overview}</p>
      <img
        className="w-44"
        alt="poster"
        src={MOVIE_IMG_CDN_URL + poster_path}
      ></img>
      {/* <Header /> */}
    </div>
  );
};

export default MoviePage;
