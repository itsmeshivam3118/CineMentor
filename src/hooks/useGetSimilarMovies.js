import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useGetSimilarMovies = (movie_id) => {
  const [data, setData] = useState(null);

  const GetSimilarMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?language=en-US&page=1`,
        API_OPTIONS
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Failed to fetch similar movies:", error);
    }
  };

  useEffect(() => {
    if (movie_id) {
      GetSimilarMovies();
    }
  }, [movie_id]);

  return data;
};

export default useGetSimilarMovies;
