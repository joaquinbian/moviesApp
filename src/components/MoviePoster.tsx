import React from 'react';
import {View, Text} from 'react-native';
import movieDB from '../api/MovieDB';
import {Movie} from '../interfaces/movieDBInterface';

interface Props {
  movie: Movie;
}
const MoviePoster = ({movie}: Props) => {
  return (
    <View>
      <Text>{movie.title}</Text>
    </View>
  );
};

export default MoviePoster;
