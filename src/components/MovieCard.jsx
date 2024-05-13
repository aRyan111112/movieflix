import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {

  if (!posterPath) return null;
  return (
    <div className="p-2 hover:scale-105 transition-transform w-48 scroll"
      onClick={() => seeMovieInfo()}
    >
      <img className="rounded-lg" alt="movie card" src={IMG_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
