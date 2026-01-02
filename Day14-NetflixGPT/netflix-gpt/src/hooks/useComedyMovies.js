import { useDispatch, useSelector } from 'react-redux';
import { addComedyMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useComedyMovies = () => {
  
    const dispatch = useDispatch();

    const comedyMovies = useSelector
    ((store) => store.movies.comedyMovies);   
    const getComedyMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=35', API_OPTIONS);
    const json = await data.json();
    dispatch(addComedyMovies(json.results))
  }

  useEffect(() => {
    !comedyMovies && getComedyMovies();
  }, []);
}

export default useComedyMovies;