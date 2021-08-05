import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, Button, ActivityIndicator, StyleSheet, useWindowDimensions} from 'react-native';
import Carousel, {CarouselProperties} from 'react-native-snap-carousel';

import {useMovies} from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import movieDB from '../api/MovieDB';
import {Movie} from '../interfaces/movieDBInterface';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}
interface CarouselProps extends CarouselProperties<any> {}

const HomeScreen = ({navigation}: Props) => {
  const {width} = useWindowDimensions();
  const {movies, loading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (loading) {
    return (
      <View style={{...styles.container, marginTop: top + 20}}>
        <ActivityIndicator size={30} color="red" />
      </View>
    );
  }
  // console.log(width, 'soy el width');
  return (
    <ScrollView>
      <View style={{...styles.container, marginTop: top + 20}}>
        {/* <MoviePoster movie={movies[0]} /> */}
        {/* {''} */}
        {/* <Button title="go detail" onPress={() => navigation.navigate('movie')} /> */}
        <View style={{height: 440}}>
          <Carousel
            data={movies}
            renderItem={({item}: {item: Movie}) => <MoviePoster movie={item} />}
            sliderWidth={width}
            itemWidth={300}
          />
        </View>
        <View style={{height: 200, backgroundColor: 'red'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>En cine</Text>
          <FlatList
            data={movies}
            renderItem={({item}: {item: Movie}) => <MoviePoster movie={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
