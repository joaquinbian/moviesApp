import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import movieDB from '../api/MovieDB';
import {Movie} from '../interfaces/movieDBInterface';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}
const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  //le pasamos los valores de las medidas para poder reutilizarlo,
  // si no le pasamos medidas, esas van a ser las medidas por defecto
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    // el view controla el tamaño de la imagen, le seteamos el tamaño al view y luego a la imagen
    // le decimos que ocupe todo el espacio que pueda
    <View style={{width, height}}>
      <View style={styles.imgContainer}>
        {/*
            a la imagen la envolvemos en un view porque la etiqueta Image no acepta la prop
            elevation del shadow, y es importante en andorid, entonces lo ponemos en un view, 
            y le agregamos la sombra al view
        */}
        <Image source={{uri}} style={styles.img} />
      </View>
    </View>
  );
};

export default MoviePoster;
const styles = StyleSheet.create({
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
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 12,
  },
});
