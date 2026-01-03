import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="absolute top-0 left-0 h-full w-full scale-125 aspect-video md:h-[70vh] lg:h-[90vh] xl:h-screen max-h-[90vh] overflow-hidden bg-black mx-auto">
      {/* Video */}
      {trailerVideo?.key && (
        <iframe
          className="absolute inset-0 w-full h-full object-cover scale-110 md:scale-125 lg:scale-[1.15] pointer-events-none"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&rel=0&playsinline=1`}
          title="Movie Trailer"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent/0" />
    </div>
  );
};

export default VideoBackground;
