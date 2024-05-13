import React from 'react'
import { IMG_URL, img_URL } from "../utils/constants";
import useFetchCast from "../hooks/useFetchCast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Loading from './Loading';

const ShowCast = (id) => {
  const dispatch = useDispatch()

  useFetchCast(id);
  const castInfo = useSelector((store) => store.movies?.castInfo);
  if(!castInfo) return <Loading/>

  const handleCastClick = () => {
    dispatch(clearCastMovies());
  }

  return (
    <div className='mt-1'>
     {/* ----------------Cast-------------- */}
     <div className="text-white text-3xl my-2 ml-4">Cast</div>
        <div
          className="flex overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-2">
            {castInfo?.map((cast) =>
              cast?.profile_path ? (
                <Link to={"/castmovie/"+cast?.id + "/" + cast?.name} onClick={handleCastClick} state={{ actorName: cast?.name }}><div key={cast?.id} className="w-44 p-2 text-center">
                  <div className="rounded-md overflow-hidden bg-slate-800">
                    <img src={IMG_URL + cast?.profile_path} alt="actor"/>
                    <div className="text-white">{cast?.name}</div>
                    <div className="text-white text-sm">{cast?.character}</div>
                  </div>
                </div></Link>
              ) : null
            )}
          </div>
        </div>
    </div>
  )
}

export default ShowCast