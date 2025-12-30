import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[160px] cursor-pointer transition-transform duration-300 hover:scale-110 md:min-w-[180px] lg:min-w-[200px]">
      <img
        className="rounded-lg object-cover shadow-lg"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
