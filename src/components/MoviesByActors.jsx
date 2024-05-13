import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import useCastMovies from "../hooks/useCastMovies";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Header from "./Header";
import { clearMovieInfo } from "../utils/moviesSlice";
import Loading from "./Loading"

const MoviesByActor = () => {
  const { id, name } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  useCastMovies(id);

  //Clear Movie Info Slice 
  dispatch(clearMovieInfo())

  const moviesByActor = useSelector((store) => store.movies?.castMovies);
  if (!moviesByActor) return <Loading />;
  return (
    <div>
      <Header />
      <div className="bg-black text-white md:px-16 px-5 min-h-screen">
        <div className="pt-28">
          <h1 className="md:text-4xl text-xl">Discover Movies Starring <b>{name}</b></h1>
        </div>
        <div className="mt-8 flex flex-wrap gap-8 justify-center">
          {moviesByActor.map((movie) => (
            <div>
              <Link to={"/movieInfoPage/" + movie?.id}>
                <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesByActor;
