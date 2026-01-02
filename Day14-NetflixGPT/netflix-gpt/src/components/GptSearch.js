import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen w-full text-white">

      
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_IMG}
          alt="Background"
          className="h-screen w-screen object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 md:px-8">

        
        <div className=" flex mt-32 flex-col items-center justify-center px-4">
          <GptSearchBar />
        </div>

        
        <div className="flex-1 overflow-y-auto pb-16">
          <GptMovieSuggestions />
        </div>

      </div>
    </div>
  );
};

export default GptSearch;
