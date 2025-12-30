
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden bg-black">
      
      {/* Video */}
      {trailerVideo?.key && (
        <iframe
          className="absolute top-0 left-0 h-full w-full scale-125"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&rel=0&showinfo=0`}
          title="Movie Trailer"
          allow="autoplay; fullscreen"
        />
      )}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
    </div>
  );
};

export default VideoBackground;
