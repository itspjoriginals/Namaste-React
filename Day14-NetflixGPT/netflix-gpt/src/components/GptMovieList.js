import GptMovieCard from "./GptMovieCard";

const GptMovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <section className="mb-10">
      
     
      <h3 className="mb-4 text-lg font-semibold text-white">
        {title}
      </h3>

     
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <GptMovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </section>
  );
};

export default GptMovieList;
