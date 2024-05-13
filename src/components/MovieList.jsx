import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  
  return (
    <div className="pl-0 md:pl-10 mt-10">
      <h1 className="text-white text-3xl my-2 ml-2">{title}</h1>
      <div
        className="flex overflow-x-auto"
      >
          <div className="flex gap-2">
            {movies?.map((movie) => (
              <Link to= {"/movieInfoPage/" + movie?.id} key={movie?.id}>
              <MovieCard key={movie?.id} posterPath={movie.poster_path} movieId={movie.id} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
