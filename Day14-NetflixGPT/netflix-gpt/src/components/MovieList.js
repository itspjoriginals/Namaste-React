import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="mb-10 overflow-hidden">
      {/* Section Title */}
      <h2 className="mb-3 text-lg font-semibold text-white md:text-xl">
        {title}
      </h2>

      {/* Movie Row */}
      <div className="relative overflow-hidden">
        <div
          className="
            flex gap-4 
            overflow-x-auto overflow-y-hidden 
            scroll-smooth 
            no-scrollbar
          "
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
