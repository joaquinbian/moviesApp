import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {FlatList, LongPressGestureHandler, ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../navigation/NavigationStack';
import {Rating} from 'react-native-ratings';
import useMovieDetail from '../hooks/useMovieDetail';
import {Cast} from '../interfaces/movieDBInterface';
import CastCard from '../components/CastCard';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'MovieDetail'> {}

const MovieDetailScreen = ({navigation, route}: Props) => {
  const movie = route.params;
  console.log(movie);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {width} = useWindowDimensions();
  const {isLoading, fullMovie, cast} = useMovieDetail(movie.id);
  console.log(width);
  // console.log(FullMovie, 'soy la full movie pa');
  console.log(cast, 'soy el cast pa');

  return (
    <ScrollView style={{flex: 1, zIndex: 0}}>
      {/* <TouchableOpacity style={styles.btnBack} onPress={() => console.log('click')}> */}
      {/* <View> */}
      {/* <Icon name="chevron-back-outline" style={styles.btnBack} size={40} color="white" /> */}
      {/* </View> */}
      {/* </TouchableOpacity> */}
      {/* <View> */}
      <View style={{...styles.imgContainer, width: width - 30}}>
        <Image
          source={{
            uri,
          }}
          style={styles.img}
        />
      </View>
      {/* </View> */}
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
          <Text style={styles.sectionTitle}>Genres</Text>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            {isLoading ? (
              <ActivityIndicator size={20} color="red" />
            ) : (
              <Text>{fullMovie?.genres.map(g => g.name).join(', ')}</Text>
            )}
          </View>
          <Text style={styles.sectionTitle}>Cast</Text>
          {isLoading ? (
            <ActivityIndicator size={20} color="red" />
          ) : (
            <FlatList
              data={cast}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}: {item: Cast}) => <CastCard cast={item} />}
              horizontal
            />
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={35} color="white" />
      </TouchableOpacity>
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
  btnBack: {
    position: 'absolute',
    zIndex: 50,
    elevation: 19, //supongo que funciona como el zIndex, porque
    //el container de la imagen tiene un elevation 15,
    //y si le pongo algo menorque 15 no se muestra
    top: 10,
    left: 10,
  },
});
