// import { useDispatch, useSelector } from "react-redux";
// import { useRef, useState } from "react";
// import lang from "../utils/languageConstants";
// import openai from "../utils/openai";
// import { API_OPTIONS } from "../utils/constants";
// import { addGptMovieResult, setGptLoading } from "../utils/gptSlice";

// const GptSearchBar = () => {
//   const dispatch = useDispatch();
//   const langKey = useSelector((store) => store.config.lang);
//   const searchText = useRef(null);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     handleGptSearchClick();
//   };

//   // ✅ FIXED TMDB SEARCH
//   const searchMovieTMDB = async (movie) => {
//     const data = await fetch(
//       `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
//         movie
//       )}&include_adult=false&language=en-US&page=1`,
//       API_OPTIONS
//     );

//     const json = await data.json();
//     return json.results;
//   };

//   const handleGptSearchClick = async () => {
//     const query = searchText.current.value;
//     if (!query.trim()) return;

//     try {
//       setLoading(true);
//       setError("");

//       const gptQuery = `
//         Act as a movie recommendation system.
//         Suggest exactly 5 movies for: "${query}".
//         Respond ONLY in comma separated format.
//         Example:
//         Golmaal, Talaash, 3 Idiots, Sultan, Taare Zameen Par
//       `;

//       const gptResults = await openai.chat.completions.create({
//         model: "gpt-5-nano",
//         messages: [{ role: "user", content: gptQuery }],
//       });

//       const content = gptResults.choices?.[0]?.message?.content;
//       if (!content) throw new Error("No GPT response");

//       // ✅ CLEAN MOVIE NAMES
//       const gptMovies = content
//         .split(",")
//         .map((m) => m.trim())
//         .filter(Boolean);

//       // ✅ PARALLEL TMDB FETCH
//       const tmdbResults = await Promise.all(
//         gptMovies.map((movie) => searchMovieTMDB(movie))
//       );

//       dispatch(
//         addGptMovieResult({
//           movieNames: gptMovies,
//           movieResults: tmdbResults,
//         }),
//         setGptLoading(true)
//       );
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleFormSubmit}
//       className="w-full max-w-4xl flex flex-col sm:flex-row items-stretch sm:items-center gap-4 rounded-3xl bg-white/5 backdrop-blur-xl shadow-2xl border border-white/20 p-1"
//       aria-label="GPT movie search form"
//     >
//       {/* Input */}
//       <input
//         ref={searchText}
//         type="text"
//         placeholder={lang[langKey].gptSearchPlaceholder}
//         className="
//           flex-1 min-w-[280px] rounded-2xl bg-black/50 px-6 py-4
//           text-xl text-white placeholder-gray-300
//           border border-transparent
//           outline-none transition-all duration-200
//           focus:bg-black/70 focus:border-red-500/50
//           focus:ring-4 focus:ring-red-500/20
//         "
//         disabled={loading}
//         aria-label="Search query"
//       />

//       {/* Button */}
//       <button
//         type="submit"
//         disabled={loading}
//         className={`
//           inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4
//           font-semibold text-lg text-white transition-all duration-200
//           shadow-lg hover:shadow-xl
//           ${loading 
//             ? "bg-gradient-to-r from-red-800/80 to-red-900/80 cursor-not-allowed" 
//             : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600"
//           }
//           focus:outline-none focus:ring-4 focus:ring-red-500/40
//         `}
//         aria-label="Submit search"
//       >
//         {loading ? (
//           <>
//             <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//             Searching...
//           </>
//         ) : (
//           <>
//             {lang[langKey].search}
//           </>
//         )}
//       </button>

//       {/* Error */}
//       {error && (
//         <div className="w-full sm:w-auto text-sm text-red-400 bg-red-500/10 p-3 rounded-2xl border border-red-500/30" 
//              role="alert">
//           {error}
//         </div>
//       )}
//     </form>
//   );
// };

// export default GptSearchBar;



import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, setGptLoading } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const isLoading = useSelector((store) => store.gpt.isLoading);
  const searchText = useRef(null);

  const [error, setError] = useState("");

  const searchMovieTMDB = async (movie) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await res.json();
    return json.results;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = searchText.current.value.trim();
    if (!query) return;

    try {
      setError("");
      dispatch(setGptLoading(true));

      const gptQuery = `
        Suggest exactly 5 movies for: "${query}".
        Respond ONLY in comma separated format.
      `;

      const gptRes = await openai.chat.completions.create({
        model: "gpt-5-nano",
        messages: [{ role: "user", content: gptQuery }],
      });

      const movies = gptRes.choices[0].message.content
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean);

      const tmdbResults = await Promise.all(
        movies.map((movie) => searchMovieTMDB(movie))
      );

      dispatch(addGptMovieResult({ movieNames: movies, movieResults: tmdbResults }));
    } catch (err) {
      setError("Failed to fetch recommendations.");
    } finally {
      dispatch(setGptLoading(false));
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-4 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/20 p-2 shadow-2xl"
    >
      <input
        ref={searchText}
        disabled={isLoading}
        placeholder={lang[langKey].gptSearchPlaceholder}
        className="flex-1 bg-black/60 px-6 py-4 rounded-2xl text-white outline-none focus:ring-4 focus:ring-red-500/30"
      />

      <button
        disabled={isLoading}
        className={`px-8 rounded-2xl font-semibold transition
        ${isLoading ? "bg-red-900" : "bg-red-600 hover:bg-red-700"}`}
      >
        {isLoading ? "Searching..." : lang[langKey].search}
      </button>

      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
    </form>
  );
};

export default GptSearchBar;
