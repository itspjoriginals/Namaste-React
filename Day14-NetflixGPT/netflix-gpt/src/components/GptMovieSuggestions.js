import { useSelector } from "react-redux";
import GptMovieList from "./GptMovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames || movieNames.length === 0) return null;

  return (
    <section className="relative z-20 mt-10 w-full max-w-7xl px-4 md:px-8">
      
      <div className="rounded-2xl bg-black/60 backdrop-blur-xl shadow-2xl p-6 md:p-8">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white">
            🎬 AI Movie Recommendations
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Based on your search, you might like these
          </p>
        </div>

        {/* GPT Results */}
        <div className="space-y-12">
          {movieNames.map((movieName, index) => {
            const moviesForRow = movieResults?.[index];
            if (!moviesForRow || moviesForRow.length === 0) return null;

            return (
              <GptMovieList
                key={movieName}
                title={movieName}
                movies={moviesForRow}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GptMovieSuggestions;
