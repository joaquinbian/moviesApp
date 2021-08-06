import React, {useEffect, useState} from 'react';
import movieDB from '../api/MovieDB';
import {FullMovie, Cast, MovieCast} from '../interfaces/movieDBInterface';

//esta va a ser la interface del estado, lo que va a exponer
interface MovieDetails {
  isLoading: boolean;
  fullMovie: FullMovie | undefined; //el fullMovie es un objeto con los datos de la peli, por eso solo dice FullMovie
  cast: Cast[];
}

const useMovieDetail = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    fullMovie: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    //acá le indicamos que va a manejar una rta del tipo FullMovie
    const respDetail = movieDB.get<FullMovie>(`/${movieId}`);
    const respCast = movieDB.get<MovieCast>(`/${movieId}/credits`);

    const [movieDetailsResp, movieCastResp] = await Promise.all([respDetail, respCast]);

    setState({
      isLoading: false,
      fullMovie: movieDetailsResp.data,
      cast: movieCastResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};

export default useMovieDetail;
