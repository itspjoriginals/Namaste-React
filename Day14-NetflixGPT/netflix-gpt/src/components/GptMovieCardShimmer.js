const GptMovieCardShimmer = () => {
  return (
    <div className="rounded-xl bg-black/70 overflow-hidden animate-pulse">
      <div className="h-56 bg-gray-800" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-700 rounded w-3/4" />
        <div className="h-3 bg-gray-700 rounded w-1/2" />
        <div className="h-3 bg-gray-700 rounded w-full" />
      </div>
    </div>
  );
};

export default GptMovieCardShimmer;
