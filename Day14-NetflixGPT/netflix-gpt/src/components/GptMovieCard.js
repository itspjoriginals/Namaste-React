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

  const releaseYear = release_date
    ? new Date(release_date).getFullYear()
    : "N/A";

  return (
    <div className="group flex rounded-xl bg-black/70 backdrop-blur-md shadow-xl transition hover:scale-[1.02] hover:bg-black/80">
      
      {/* Poster */}
      <div className="w-32 flex-shrink-0 overflow-hidden rounded-l-xl">
        <img
          src={
            poster_path
              ? IMG_CDN_URL + poster_path
              : "https://via.placeholder.com/200x300?text=No+Image"
          }
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-between p-4 text-white">
        <div>
          <h3 className="text-lg font-semibold leading-tight">
            {title}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {releaseYear} • ⭐ {vote_average?.toFixed(1)}/10
          </p>

          <p className="mt-2 line-clamp-3 text-sm text-gray-300">
            {overview || "No description available."}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-3 text-xs text-gray-400">
          AI Recommended
        </div>
      </div>
    </div>
  );
};

export default GptMovieCard;
