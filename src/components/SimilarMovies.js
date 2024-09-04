import React from "react";
import useGetSimilarMovies from "../hooks/useGetSimilarMovies";
import MovieCard from "./MovieCard";

const SimilarMovies = ({ movie_id }) => {
  const data = useGetSimilarMovies(movie_id);

  console.log(data);

  return (
    <div className="relative px-12">
      <div className="absolute inset-0 bg-gray-950 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-white text-3xl font-bold">You might also like</h1>
        <div className="grid grid-cols-5 gap-4">
          {data ? (
            data.results.map((movie) => (
              <MovieCard
                key={movie.id}
                imgPath={movie.poster_path}
                movie_id={movie.id}
              />
            ))
          ) : (
            <p className="text-white">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarMovies;
