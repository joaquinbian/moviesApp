import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, Button, ActivityIndicator, StyleSheet} from 'react-native';
import movieDB from '../api/MovieDB';
import {MovieDBNowPlaying} from '../interfaces/movieDBInterface';
import {useMovies} from '../hooks/useMovies';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = ({navigation}: Props) => {
  const {movies, loading} = useMovies();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={30} color="red" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>{movies[0].title}</Text>
      <Button title="go detail" onPress={() => navigation.navigate('movie')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
