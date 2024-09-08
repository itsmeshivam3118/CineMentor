import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoDesc from "./VideoDesc";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  //console.log(mainMovie);
  const { title, overview, id, runtime, release_date } = mainMovie;
  return (
    <div className="w-screen">
      <VideoDesc
        title={title}
        overview={overview}
        runtime={runtime}
        release_date={release_date}
      />
      <VideoBackground movie_id={id} />
    </div>
  );
};

export default MainContainer;
