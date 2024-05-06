import useFetchCast from "../hooks/useFetchCast";
import { useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";
import useVideos from "../hooks/useVideos";
import useSimilarMovies from "../hooks/useSimilarMovies";
import MovieList from "./MovieList";

const MovieInfoPageSecondaryContainer = ({ id }) => {
  const castInfo = useSelector((store) => store.movies?.castInfo);
  const videos = useSelector((store) => store.movies?.movieVideos);
  const similarMovies = useSelector((store) => store.movies?.similarMovies)
  useFetchCast(id);
  useVideos(id);
  // console.log(castInfo)
  console.log("videos are : ", videos);

  useSimilarMovies(id)
  console.log(similarMovies)
  return (
    <>
      <div>
        {/* ----------------Cast-------------- */}
        <div className="text-white text-3xl my-2 ml-4">Cast</div>
        <div
          className="flex overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-2">
            {castInfo?.map((cast) =>
              cast?.profile_path ? (
                <div key={cast?.id} className="w-44 p-2 text-center">
                  <div className="rounded-md overflow-hidden bg-slate-800">
                    <img src={IMG_URL + cast?.profile_path} />
                    <div className="text-white">{cast?.name}</div>
                    <div className="text-white text-sm">{cast?.character}</div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* ----------------Related Videos-------------- */}
        <div className="text-white text-3xl my-2 ml-4">Related videos</div>
        <div className="ml-5">
          <div
            className="flex overflow-x-auto scrollbar-hide gap-5"
            style={{ scrollbarWidth: "none" }}
          >
            {videos?.map((video) => (
              <div key={video?.id}>
                <iframe
                  className="aspect-video md:w-[560px] md:h-[315px]"
                  src={
                    "https://www.youtube.com/embed/" +
                    video?.key +
                    "?&autoplay=0&mute=1"
                  }
                  title="YouTube video player"
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* -----------------Similar Movies--------------- */}
        {similarMovies?.length !== 0 ? (<MovieList title="Similar Movies" movies={similarMovies}/>) : null}


      </div>
    </>
  );
};

export default MovieInfoPageSecondaryContainer;
