import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, Image, StyleSheet, useWindowDimensions, ActivityIndicator} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../navigation/NavigationStack';
import {Rating} from 'react-native-ratings';
import useMovieDetail from '../hooks/useMovieDetail';
import {Cast} from '../interfaces/movieDBInterface';
import CastCard from '../components/CastCard';

interface Props extends StackScreenProps<RootStackParams, 'MovieDetail'> {}

const MovieDetailScreen = ({navigation, route}: Props) => {
  const movie = route.params;
  console.log(movie);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {width} = useWindowDimensions();
  const {isLoading, fullMovie, cast} = useMovieDetail(movie.id);
  console.log(width);
  // console.log(FullMovie, 'soy la full movie pa');
  console.log(isLoading, 'soy el cast pa');
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{...styles.imgContainer, width: width - 30}}>
        <Image
          source={{
            uri,
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={{width: '55%'}}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.releaseDate}>{movie.release_date}</Text>
        </View>
        <View style={styles.movieStats}>
          <Text style={{marginVertical: 5}}>{movie.vote_average} / 10</Text>
          <Rating readonly type="star" imageSize={25} startingValue={movie.vote_average / 2} />
        </View>
      </View>
      <View style={styles.moreInfoContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Review</Text>
          <Text>{movie.overview}</Text>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Cast</Text>
          {isLoading ? (
            <ActivityIndicator size={20} color="blue" />
          ) : (
            <FlatList data={cast} renderItem={({item}: {item: Cast}) => <CastCard cast={item} />} horizontal />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    borderRadius: 20,
  },
  imgContainer: {
    alignSelf: 'center',
    height: 470,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.9,
    // backgroundColor: 'blue',
    shadowRadius: 4.65,

    elevation: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    // backgroundColor: 'red',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 10,
    // width: '55%',
    // backgroundColor: 'green',
  },
  releaseDate: {
    marginLeft: 15,
    color: 'gray',
  },
  movieStats: {
    alignItems: 'center',
  },
  moreInfoContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    // backgroundColor: 'red',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginVertical: 10,
  },
});
