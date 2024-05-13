import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="mt-2 md:-mt-60 pl-5 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Discover"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
}

export default SecondryContainer;
