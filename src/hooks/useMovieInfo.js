import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { addMovieInfo } from "../utils/moviesSlice"
import { API_OPTIONS } from "../utils/constants"

const useMovieInfo = async (id) => {
    const dispatch = useDispatch()
    
    const fetchMovie = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS)
        const jsonresult = await data.json()
        dispatch(addMovieInfo(jsonresult))
    }

    useEffect(() => { fetchMovie() }, [id])
}

export default useMovieInfo;