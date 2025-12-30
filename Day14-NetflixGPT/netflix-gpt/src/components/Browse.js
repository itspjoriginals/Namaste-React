import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useComedyMovies from '../hooks/useComedyMovies'
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useActionMovies from "../hooks/useActionMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useComedyMovies();
  useActionMovies();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Main Hero */}
      <main className="pt-16">
        <MainContainer />
        <SecondaryContainer />
      </main>

    </div>
  );
};

export default Browse;
