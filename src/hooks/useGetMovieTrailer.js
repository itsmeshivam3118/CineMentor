import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useGetMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await response.json();
    //console.log(data);
    const trailerVideos = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const mainTrailer = trailerVideos.length
      ? trailerVideos[0]
      : data.results[0];
    //console.log(mainTrailer);
    dispatch(addTrailerVideo(mainTrailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, [movie_id]);
};

export default useGetMovieTrailer;
