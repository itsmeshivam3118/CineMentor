import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-gray-950 text-white">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        {/* <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} /> */}
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
