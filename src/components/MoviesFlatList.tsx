import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieDBInterface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}
const MoviesFlatList = ({movies, title}: Props) => {
  return (
    <View style={{height: title ? 260 : 230}}>
      {title && <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 5, marginLeft: 10}}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({item}: {item: Movie}) => <MoviePoster movie={item} height={200} width={120} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MoviesFlatList;

const styles = StyleSheet.create({});
