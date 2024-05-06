import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="w-full">
      <div className="pt-[40%] bg-black md:pt-0 w-full">
      <VideoTitle title={original_title} overview={overview} movieId={id}/>
      <VideoBackground movieId={id} />
    </div>
    </div>
  );
}

export default MainContainer;
