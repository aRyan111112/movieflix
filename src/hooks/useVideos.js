import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addMovieVideos } from '../utils/moviesSlice';

const useVideos = (id) => {
    const dispatch = useDispatch()
    const getVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
              id +
              "/videos?language=en-US",
            API_OPTIONS
          );
          const json = await data.json();
          const movieResults = json.results.filter((video) => video.type === "Trailer" || video.type === "Clip" || video.type === "Teaser")
          dispatch(addMovieVideos(movieResults))
    }
    useEffect(() => {
        getVideos();
      }, [id]);
}

export default useVideos;