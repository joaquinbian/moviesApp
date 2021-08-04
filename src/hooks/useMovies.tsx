import {useEffect, useState} from 'react';
import movieDB from '../api/MovieDB';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieDBInterface';

export const useMovies = () => {
  //le indicamos el tipo al estado, va a ser un arreglo de tipo Movie
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const response = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setMovies(response.data.results);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {movies, loading};
};
