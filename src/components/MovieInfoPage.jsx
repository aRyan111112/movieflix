import React from 'react'
import { useParams } from 'react-router-dom';
import MovieInfoPageMainContainer from './MovieInfoPageMainContainer'
import MovieInfoPageSecondaryContainer from './MovieInfoPageSecondaryContainer';
import { useDispatch, useSelector } from 'react-redux';
import useMovieInfo from '../hooks/useMovieInfo';
import { addMovieInfo } from '../utils/moviesSlice';
// import Loading from './Loading';


const MovieInfoPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  useMovieInfo(id)
  const info = useSelector((store) => store.movies?.movieInfo)

  if(!info) return null


  return (
    <>
    <div className='bg-black pb-10'>
    <MovieInfoPageMainContainer info={info}/>
    <MovieInfoPageSecondaryContainer id={info?.id}/>
    </div>
    </>
  )
}

export default MovieInfoPage