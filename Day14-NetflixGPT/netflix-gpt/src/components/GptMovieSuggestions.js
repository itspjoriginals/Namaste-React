// import { useSelector } from "react-redux";
// import GptMovieList from "./GptMovieList";
// import GptMovieListShimmer from "./GptMovieListShimmer";

// const GptMovieSuggestions = () => {
//   const { movieResults, movieNames, isLoading } = useSelector((store) => store.gpt);

//   if (isLoading) {
//     return (
//       <section className="mt-12 space-y-16">
//         <GptMovieListShimmer />
//         <GptMovieListShimmer />
//       </section>
//     );
//   }

//   if (!movieNames || movieNames.length === 0) return null;

//   return (
//     <section className="relative z-20 mt-12 w-full max-w-7xl px-4 md:px-8 mx-auto">
//       <div className="rounded-3xl bg-gradient-to-br from-black/70 via-black/50 to-transparent backdrop-blur-3xl shadow-2xl border border-white/10 p-8 md:p-12">
//         {/* Header */}
//         <header className="mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-red-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3 mb-2">
//             🎬 AI Movie Recommendations
//           </h2>
//           <p className="text-lg text-gray-300 max-w-md leading-relaxed">
//             Discover personalized recommendations based on your search. 
//             Curated by advanced AI algorithms.
//           </p>
//         </header>

//         {/* GPT Results */}
//         <div className="space-y-14">
//           {movieNames.map((movieName, index) => {
//             const moviesForRow = movieResults?.[index];
//             if (!moviesForRow || moviesForRow.length === 0) return null;

//             return (
//               <GptMovieList
//                 key={movieName}
//                 title={movieName}
//                 movies={moviesForRow}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GptMovieSuggestions;


import { useSelector } from "react-redux";
import GptMovieList from "./GptMovieList";
import GptMovieListShimmer from "./GptMovieListShimmer";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames, isLoading } = useSelector(
    (store) => store.gpt
  );

  if (isLoading) {
    return (
      <div className="space-y-16 mt-16">
        <GptMovieListShimmer />
        <GptMovieListShimmer />
      </div>
    );
  }

  if (!movieNames) return null;

  return (
    <div className="mt-16 space-y-20">
      {movieNames.map((title, i) => (
        <GptMovieList key={title} title={title} movies={movieResults[i]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
