import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-full h-full aspect-video object-cover"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=0&mute=1"
        }
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
