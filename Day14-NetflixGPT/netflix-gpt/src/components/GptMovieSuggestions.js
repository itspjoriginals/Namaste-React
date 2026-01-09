import { useSelector } from "react-redux";
import GptMovieList from "./GptMovieList";
import GptMovieListShimmer from "./GptMovieListShimmer";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames, isLoading } = useSelector(
    (store) => store.gpt
  );

  if (isLoading) {
    return (
      <div className="space-y-16 mt-16">
        <GptMovieListShimmer />
        <GptMovieListShimmer />
      </div>
    );
  }

  if (!movieNames) return null;

  return (
    <div className="mt-16 space-y-20">
      {movieNames.map((title, i) => (
        <GptMovieList key={title} title={title} movies={movieResults[i]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
