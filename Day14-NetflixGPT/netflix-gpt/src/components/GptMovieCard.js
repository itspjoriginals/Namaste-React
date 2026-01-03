import { IMG_CDN_URL } from "../utils/constants";

const GptMovieCard = ({ movie }) => {
  if (!movie) return null;

  const {
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
  } = movie;

  const releaseYear = release_date ? new Date(release_date).getFullYear() : "N/A";

  return (
    <article className="group relative flex flex-col rounded-2xl bg-black/60 backdrop-blur-md shadow-xl overflow-hidden border border-white/10 hover:bg-black/75 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      {/* Poster */}
      <div className="relative min-h-[180px] sm:min-h-[210px] md:min-h-[230px] lg:min-h-[250px] w-full overflow-hidden">
        <img
          src={
            poster_path 
              ? IMG_CDN_URL + poster_path 
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={title}
          className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between p-6 text-white">
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-bold leading-tight line-clamp-2 group-hover:text-red-400 transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>{releaseYear}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              <span>{vote_average?.toFixed(1)}/10</span>
            </div>
          </div>

          <p className="text-sm text-gray-200 line-clamp-3 leading-relaxed">
            {overview || "No description available."}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400 bg-white/10 px-3 py-1 rounded-full group-hover:bg-red-500/20 group-hover:text-red-300 transition-all duration-200">
              AI Recommended
            </span>
            <span className="text-xxs uppercase tracking-widest text-gray-500">
              4K • HDR
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default GptMovieCard;
