import useMovieInfo from "../hooks/useMovieInfo";
import { useSelector } from "react-redux";
import { IMG_URL, img_URL } from "../utils/constants";

const MovieInfoPageMainContainer = ({info}) => {
  // const movieInfo = useSelector((store) => store.movies?.movieInfo);

  // useMovieInfo(id);

  console.log(info);

  return (
    <>
      <div className="max-h-screen bg-black overflow-clip mb-5">
        <div className="w-full max-h-full">
          <div className="bg-gradient opacity-30 w-full">
            <img
              className="mix-blend-overlay w-full"
              src={img_URL + info?.backdrop_path}
            />
          </div>
          <div className="w-80 p-2 absolute top-16 left-20">
            <img
              className="rounded-lg"
              src={IMG_URL + info?.poster_path}
            />
          </div>

          {/* ------------ Title ----------------------- */}
          <div className="text-white text-5xl font-semibold absolute top-[18%] left-[33%]">
            {info?.title}
          </div>

          {/* ------------- Release date and Duration ---------------------- */}
          <div className="absolute top-[30%] left-[33%] text-white flex gap-10 text-xl">
            <span className=" text-white ">
              Release date: {info?.release_date}
            </span>
            <span>Duration: {info?.runtime}min</span>

          </div>

          {/* ------------------ Genres -------------------- */}
          <div className="flex justify-center gap-2 absolute top-[36%] left-[33%] text-xl text-white"><div>Genre: </div>
          {info?.genres.map((genre) => (
            <div className='border py-1 px-2 rounded-3xl cursor-pointer hover:scale-105 transition-transform' key={genre.id}>{genre.name}</div>
          ))}
          </div>

          {/* ------------------ Tagline -------------------- */}
          {info?.tagline && (
            <div className="text-white absolute top-[45%] left-[33%] text-xl">Tagline: {info?.tagline}</div>
          )}
          
          {/* ------------------ Overview -------------------- */}
          <div className='text-white text-xl absolute top-[55%] left-[33%] break-normal pr-2'><div className="text-2xl underline">Overview:</div>{info?.overview}</div>
        </div>
      </div>
    </>
  );
};

export default MovieInfoPageMainContainer;

