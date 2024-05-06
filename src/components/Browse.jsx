import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainPage from "./MainPage";

function Browse() {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
