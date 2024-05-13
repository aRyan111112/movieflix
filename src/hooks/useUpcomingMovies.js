import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

function useUpcomingMovies() {
  const dispatch = useDispatch();
  const upcomingMovie = useSelector((store) => store.movies.upcomingMovies);

  const upcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=hi&page=1&region=in&sort_by=popularity.desc&with_origin_country=IN",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    !upcomingMovie && upcomingMovies();
  }, []);
  console.log(upcomingMovie)
}

export default useUpcomingMovies;
