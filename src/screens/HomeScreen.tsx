import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {View, Text, Button, ActivityIndicator, StyleSheet, useWindowDimensions} from 'react-native';
import Carousel, {CarouselProperties} from 'react-native-snap-carousel';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ImageColors from 'react-native-image-colors';

import {useMovies} from '../hooks/useMovies';
import {Movie} from '../interfaces/movieDBInterface';
import MoviePoster from '../components/MoviePoster';
import MoviesFlatList from '../components/MoviesFlatList';
import GradientBackground from '../components/GradientBackground';
import {getColors} from '../helpers/getColores';
import {GradientContext} from '../context/GradientContext';

interface Props extends StackScreenProps<any, any> {}
interface CarouselProps extends CarouselProperties<any> {}

const HomeScreen = ({navigation}: Props) => {
  const {width} = useWindowDimensions();
  const {loading, nowPlaying, popular, upcoming, topRated} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);

  const getMovieColors = async (index: number) => {
    // console.log(nowPlaying[index].poster_path);
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    // console.log(uri);
    // const colors = await ImageColors.getColors(uri, {});
    const {primary = 'black', secondary = 'red'} = await getColors(uri);
    //le ponemmos esos colores por defecto porque sino se queja de que
    //puede ser tmb undefined

    setMainColors({primary, secondary});

    // console.log(primary, secondary, 'soy el colors');
  };

  useEffect(() => {
    //cuando se cargue el arreglo de pelis,
    //que setee el fondo con los colores de
    //la primera
    if (nowPlaying.length > 0) {
      getMovieColors(0);
    }
  }, [nowPlaying]);

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
              onSnapToItem={index => {
                getMovieColors(index);
              }} //onSnapToItem se ejecuta cada vez que el carousel gira y de el podemos
              //sacar el index del elemento actual
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
