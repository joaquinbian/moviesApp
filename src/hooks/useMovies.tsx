import {useEffect, useState} from 'react';
import movieDB from '../api/MovieDB';
import {MovieDBResponse, Movie} from '../interfaces/movieDBInterface';

interface AllMoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  //le indicamos el tipo al estado, va a ser un arreglo de tipo MoviesState,
  // osea, cada propiedad del estado va  aser un arreglo de tipo Movie

  const [allMovies, setAllMovies] = useState<AllMoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const response = movieDB.get<MovieDBResponse>('/now_playing');
    const responsePopular = movieDB.get<MovieDBResponse>('/popular');
    const responseTopRated = movieDB.get<MovieDBResponse>('/top_rated');
    const responseUpcoming = movieDB.get<MovieDBResponse>('/upcoming');

    const responses = await Promise.all([response, responsePopular, responseTopRated, responseUpcoming]);

    setAllMovies({
      nowPlaying: responses[0].data.results,
      popular: responses[1].data.results,
      topRated: responses[2].data.results,
      upcoming: responses[3].data.results,
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getMovies();
    // console.log(moviesState, 'soy el state');
  }, []);

  return {...allMovies, loading};
};
