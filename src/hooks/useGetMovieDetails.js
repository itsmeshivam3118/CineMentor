import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails, addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useGetMovieDetails = (movie_id) => {
  const dispatch = useDispatch();
  const getMovieDetails = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + movie_id + "?language=en-US",
      API_OPTIONS
    );
    const data = await response.json();
    //console.log(data);
    // const trailerVideos = data.results.filter(
    //   (video) => video.type === "Trailer"
    // );
    // const mainTrailer = trailerVideos.length
    //   ? trailerVideos[0]
    //   : data.results[0];
    // //console.log(mainTrailer);
    dispatch(addMovieDetails(data));
  };
  useEffect(() => {
    getMovieDetails();
  }, [movie_id]);
};

export default useGetMovieDetails;
