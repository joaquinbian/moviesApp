import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, Button, ActivityIndicator, StyleSheet, useWindowDimensions} from 'react-native';
import Carousel, {CarouselProperties} from 'react-native-snap-carousel';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies} from '../hooks/useMovies';
import {Movie} from '../interfaces/movieDBInterface';
import MoviePoster from '../components/MoviePoster';
import MoviesFlatList from '../components/MoviesFlatList';
import GradientBackground from '../components/GradientBackground';

interface Props extends StackScreenProps<any, any> {}
interface CarouselProps extends CarouselProperties<any> {}

const HomeScreen = ({navigation}: Props) => {
  const {width} = useWindowDimensions();
  const {loading, nowPlaying, popular, upcoming, topRated} = useMovies();
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
    <GradientBackground>
      {/* <View style={{flex: 1, backgroundColor: 'red'}}> */}
      <ScrollView>
        <View style={{...styles.container, marginTop: top + 20}}>
          {/* <Button title="goDetail" onPress={() => navigation.navigate('MovieDetail')} /> */}
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: {item: Movie}) => <MoviePoster movie={item} />}
              sliderWidth={width}
              itemWidth={300}
            />
          </View>
          {/* peliculas populares */}

          <MoviesFlatList movies={popular} title="Popular" />
          <MoviesFlatList movies={topRated} title="Top rated" />
          <MoviesFlatList movies={upcoming} title="Upcoming" />

          {/* <MoviesFlatList movies={movies} title="Top rated" /> */}
        </View>
      </ScrollView>
      {/* </View> */}
    </GradientBackground>
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
