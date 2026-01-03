import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      {/* Background - Fullscreen Fixed */}
      <div 
        className="fixed inset-0 z-0"
        style={{ 
          backgroundImage: `url(${BG_IMG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/95" />
      </div>

      {/* Scrollable Content - Higher z-index */}
      <div className="relative z-10 min-h-screen pt-24 md:pt-32 pb-16">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          
          {/* Search Bar - Sticky Top */}
          <div className="sticky top-4 z-20 mb-16 md:mb-24 max-w-2xl mx-auto">
            <GptSearchBar />
          </div>

          {/* Movie Suggestions */}
          <div className="min-h-[60vh]">
            <GptMovieSuggestions />
          </div>
        </div>
      </div>
    </>
  );
};

export default GptSearch;
