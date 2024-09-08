import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useSearchMovies = (searchQuery) => {
  const [data, setData] = useState(null);

  const GetSearchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1'`,
        API_OPTIONS
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Failed to fetch similar movies:", error);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      GetSearchMovies();
    }
  }, [searchQuery]);

  return data;
};

export default useSearchMovies;
