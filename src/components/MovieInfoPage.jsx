import { useParams } from 'react-router-dom';
import MovieInfoPageMainContainer from './MovieInfoPageMainContainer'
import { useSelector } from 'react-redux';
import useMovieInfo from '../hooks/useMovieInfo';
import ShowCast from './ShowCast';
import ShowRelatedVideos from './ShowRelatedVideos';
import ShowSimilarMovies from './ShowSimilarMovies';

const MovieInfoPage = () => {
  const { id } = useParams();
  useMovieInfo(id)
  const info = useSelector((store) => store.movies?.movieInfo)
  if (!info) return null

  return (
    <>
      <div className='bg-black'>
        <MovieInfoPageMainContainer info={info} />
        <ShowCast id={info?.id} />
        <ShowRelatedVideos id={info?.id} />
        <ShowSimilarMovies id={info?.id} />
      </div>
    </>
  )
}

export default MovieInfoPage