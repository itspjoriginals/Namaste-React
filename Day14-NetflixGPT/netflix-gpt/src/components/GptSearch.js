import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { BG_IMG } from '../utils/constants'
const GptSearch = () => {
  return (
    <div>
       {/* Background Image */}
      <div className=" -z-10">
        <img 
          src={BG_IMG}
          alt="Netflix background"
          className="w-full h-full object-cover brightness-90"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch