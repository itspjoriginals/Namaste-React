// import { useDispatch, useSelector } from "react-redux";
// import lang from "../utils/languageConstants";
// import { useRef } from "react";
// import openai from "../utils/openai";
// import { API_OPTIONS } from "../utils/constants";
// import { addGptMovieResult } from "../utils/gptSlice";


// const GptSearchBar = () => {
//   const dispatch = useDispatch();
//   const langKey = useSelector((store) => store.config.lang);
//   const searchText = useRef(null);

//   const handleFormSubmit= (e) => {
//     e.preventDefault();
//   }

//   const searchMovieTMDB = async(movie) => {

//     const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);

//     const json = await data.json();

//     return json.results;
//   }

//   const handleGptSearchClick = async() => {
  
//     const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, with IMDB rating in comma seperated like the example result ahead. Example: Golmaal - 7.6/10, Taalash - 8.6/10, 3 Idiots - 9.1/10, Sultaan - 7.2/10, Taare Zameen Par - 8.2/10."

// const gptResults = await openai.chat.completions.create({
//   model: 'gpt-5-nano',
//   messages: [
//     { role: 'user', content: gptQuery },
//   ],
// });

// if(!gptResults.choices){
//   //Write error handling code here
//   return;
// }

// console.log(gptResults.choices?.[0]?.message?.content);

// const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

// const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

// const tmdbResults = await Promise.all(promiseArray);

// console.log(tmdbResults);

// dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))

//   }


//   return (
//     <form className="mb-10 flex w-full max-w-3xl items-center gap-3 rounded-xl bg-black/60 p-4 shadow-2xl backdrop-blur-md" onSubmit={handleFormSubmit}>

//       {/* Input */}
//       <input
//         ref={searchText}
//         type="text"
//         placeholder={lang[langKey].gptSearchPlaceholder}
//         className="
//           flex-1 rounded-lg
//           bg-black/40
//           px-4 py-3
//           text-white placeholder-gray-400
//           border border-white/25
//           outline-none
//           focus:border-red-500
//           focus:ring-2 focus:ring-red-500/40
//           transition
//         "
//       />

//       {/* Button */}
//       <button
//         onClick={handleGptSearchClick}
//         type="submit"
//         className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
//       >
//         {lang[langKey].search}
//       </button>

//     </form>
//   );
// };

// export default GptSearchBar;







import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleGptSearchClick();
  };

  // ✅ FIXED TMDB SEARCH
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;
    if (!query.trim()) return;

    try {
      setLoading(true);
      setError("");

      const gptQuery = `
        Act as a movie recommendation system.
        Suggest exactly 5 movies for: "${query}".
        Respond ONLY in comma separated format.
        Example:
        Golmaal, Talaash, 3 Idiots, Sultan, Taare Zameen Par
      `;

      const gptResults = await openai.chat.completions.create({
        model: "gpt-5-nano",
        messages: [{ role: "user", content: gptQuery }],
      });

      const content = gptResults.choices?.[0]?.message?.content;
      if (!content) throw new Error("No GPT response");

      // ✅ CLEAN MOVIE NAMES
      const gptMovies = content
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean);

      // ✅ PARALLEL TMDB FETCH
      const tmdbResults = await Promise.all(
        gptMovies.map((movie) => searchMovieTMDB(movie))
      );

      dispatch(
        addGptMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="mb-10 flex w-full max-w-3xl items-center gap-3 rounded-xl bg-black/60 p-4 shadow-2xl backdrop-blur-md"
    >
      {/* Input */}
      <input
        ref={searchText}
        type="text"
        placeholder={lang[langKey].gptSearchPlaceholder}
        className="
          flex-1 rounded-lg bg-black/40 px-4 py-3
          text-white placeholder-gray-400
          border border-white/30
          outline-none transition
          focus:border-red-500
          focus:ring-2 focus:ring-red-500/40
        "
        disabled={loading}
      />

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className={`
          flex items-center gap-2 rounded-lg px-6 py-3
          font-medium text-white transition
          ${loading ? "bg-red-800 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}
        `}
      >
        {loading ? "Searching..." : lang[langKey].search}
      </button>

      {/* Error */}
      {error && (
        <p className="absolute mt-20 text-sm text-red-400">
          {error}
        </p>
      )}
    </form>
  );
};

export default GptSearchBar;
