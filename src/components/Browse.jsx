import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainPage from "./MainPage";
import { clearMovieInfo } from "../utils/moviesSlice";

function Browse() {
  const dispatch = useDispatch()
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  dispatch(clearMovieInfo())

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
    <Header/>
    {showGptSearch && <GptSearchPage/>}
    {!showGptSearch && <MainPage/>}
    </>
  );
}

export default Browse;
