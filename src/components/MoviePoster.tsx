import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import movieDB from '../api/MovieDB';
import {Movie} from '../interfaces/movieDBInterface';

interface Props {
  movie: Movie;
}
const MoviePoster = ({movie}: Props) => {
  console.log(movie.poster_path);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    // el view controla el tamaño de la imagen, le seteamos el tamaño al view y luego a la imagen
    // le decimos que ocupe todo el espacio que pueda
    <View style={styles.posterContainer}>
      {/* <Text>{movie.title}</Text> */}
      <View style={styles.imgContainer}>
        <Image source={{uri}} style={styles.img} />
      </View>
    </View>
  );
};

export default MoviePoster;
const styles = StyleSheet.create({
  posterContainer: {
    height: 420,
    width: 300,
    // backgroundColor: 'red',
  },
  img: {
    flex: 1,
    borderRadius: 25,
  },
  imgContainer: {
    flex: 1,
    // backgroundColor: 'red',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2.49,

    elevation: 25,
  },
});
