import { useDispatch } from 'react-redux';
import { addActionMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useActionMovies = () => {
  
    const dispatch = useDispatch();
    const getActionMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=28', API_OPTIONS);
    const json = await data.json();
    dispatch(addActionMovies(json.results))
  }

  useEffect(() => {
    getActionMovies();
  }, []);
}

export default useActionMovies;