import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-0 md:pl-10 mt-10">
      <h1 className="text-white text-3xl my-2 ml-2">{title}</h1>
      <div
        className="flex overflow-x-auto"
      // style={{scrollbarWidth: "thin"}}
      >
          <div className="flex gap-2">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
