import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black px-4 pb-12 md:px-8 lg:px-12">
      <div className="relative z-20 -mt-10">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
      <MovieList title="Popular" movies={movies?.popularMovies} />
      <MovieList title="Comedy" movies={movies?.comedyMovies} />
      <MovieList title="Action Thriller" movies={movies?.actionMovies} />
      </div>
    </div> 
  );
};

export default SecondaryContainer;
