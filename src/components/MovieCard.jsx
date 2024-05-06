import React from "react";
import { IMG_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";

const MovieCard = ({ posterPath, movieId }) => {
  const navigate = useNavigate()

  const seeMovieInfo = () => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    navigate(`/movieInfoPage/${movieId}`)
  }


  if (!posterPath) return null;
  return (
    <div className="p-2 hover:scale-105 transition-transform w-48"
      onClick={() => seeMovieInfo()}
    >
      <img className="rounded-lg" alt="movie card" src={IMG_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
