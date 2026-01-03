import GptMovieCard from "./GptMovieCard";

const GptMovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <section className="mb-12 md:mb-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
          {title}
        </h3>
        <span className="text-sm text-gray-400 hidden md:inline-block">
          {movies.length} result{movies.length > 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.map((movie) => (
          <GptMovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default GptMovieList;
