import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative h-[80vh] w-full bg-black">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <VideoBackground movieId={id} />
      </div>

      {/* Title + Buttons */}
      <div className="absolute inset-0 z-20 flex items-end">
        <VideoTitle title={original_title} overview={overview} />
      </div>

    </div>
  );
};


export default MainContainer;
