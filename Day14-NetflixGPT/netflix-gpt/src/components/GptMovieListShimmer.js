import GptMovieCardShimmer from "./GptMovieCardShimmer";

const GptMovieListShimmer = () => {
  return (
    <section>
      <div className="h-6 w-52 bg-gray-700 rounded mb-6 animate-pulse" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <GptMovieCardShimmer key={i} />
          ))}
      </div>
    </section>
  );
};

export default GptMovieListShimmer;
