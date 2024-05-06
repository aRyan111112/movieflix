import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { useEffect, useState } from 'react'
import { addCastInfo } from '../utils/moviesSlice'

const useFetchCast =(id) => {
    const dispatch = useDispatch()

    try {
        useEffect(() => {
            const fetchingMovieCast = async () => {
                const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, API_OPTIONS)
                const jsonresult = await data.json()
                // console.log(jsonresult)
                const castresult = jsonresult?.cast
                dispatch(addCastInfo(castresult))
          }
          fetchingMovieCast()
        }, [id])  
    } catch (error) {
        console.log(error.message)
    }
}

export default useFetchCast