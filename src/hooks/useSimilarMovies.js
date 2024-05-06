import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addSimilarMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useSimilarMovies = (movieId) => {
    const dispatch = useDispatch()

    const fetchSimilarMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        const result = json.results;
        dispatch(addSimilarMovies(result))
    }

    useEffect(() => {
        fetchSimilarMovies()
    }, [movieId])

}

export default useSimilarMovies