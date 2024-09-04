import React from "react";

import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  useGetMovieTrailer(movie_id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <div className="">
        <iframe
          className="relative w-screen aspect-video "
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=" +
            trailerVideo?.key
          }
          title="YouTube video player"
          allow="autoplay; encrypted-media;"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
