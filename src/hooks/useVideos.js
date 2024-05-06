import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addMovieVideos } from '../utils/moviesSlice';

const useVideos = (movieId) => {
    const dispatch = useDispatch()
    const getVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
              movieId +
              "/videos?language=en-US",
            API_OPTIONS
          );
          const json = await data.json();
          const movieResults = json.results.filter((video) => video.type === "Trailer" || video.type === "Clip" || video.type === "Teaser")
          dispatch(addMovieVideos(movieResults))
    }
    useEffect(() => {
        getVideos();
      }, [movieId]);
}

export default useVideos;