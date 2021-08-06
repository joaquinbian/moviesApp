import React, {useEffect, useState} from 'react';
import movieDB from '../api/MovieDB';
import {FullMovie, Cast, MovieCast} from '../interfaces/movieDBInterface';

//esta va a ser la interface del estado, lo que va a exponer
interface MovieDetails {
  isLoading: boolean;
  FullMovie: FullMovie | undefined; //el fullMovie es un objeto con los datos de la peli, por eso solo dice FullMovie
  Cast: Cast[];
}

const useMovieDetail = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    FullMovie: undefined,
    Cast: [],
  });

  const getMovieDetails = async () => {
    //acá le indicamos que va a manejar una rta del tipo FullMovie
    const respDetail = movieDB.get<FullMovie>(`/${movieId}`);
    const respCast = movieDB.get<MovieCast>(`/${movieId}/credits`);

    const resp = await Promise.all([respDetail, respCast]);

    setState({
      isLoading: false,
      FullMovie: resp[0].data,
      Cast: resp[1].data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};

export default useMovieDetail;
