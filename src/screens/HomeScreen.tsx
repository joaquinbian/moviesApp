import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import movieDB from '../api/MovieDB';
import {MovieDBNowPlaying} from '../interfaces/movieDBInterface';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = ({navigation}: Props) => {
  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('/now_playing').then(({data}) => {
      console.log(data.results[0].title);
    });
  }, []);
  return (
    <View>
      <Text>Soy la home</Text>
      <Button title="go detail" onPress={() => navigation.navigate('movie')} />
    </View>
  );
};

export default HomeScreen;
