import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../navigation/NavigationStack';
import {Rating} from 'react-native-ratings';
// import icon from "react-native-vector-icons"

interface Props extends StackScreenProps<RootStackParams, 'MovieDetail'> {}

const MovieDetailScreen = ({navigation, route}: Props) => {
  const movie = route.params;
  // console.log(movie.id);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {width} = useWindowDimensions();
  console.log(width);
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
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.movieStats}>
          <Text style={{marginVertical: 5}}>{movie.vote_average} / 10</Text>
          <Rating readonly type="star" imageSize={25} startingValue={movie.vote_average / 2} style={{marginLeft: 15}} />
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
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 10,
    // backgroundColor: 'green',
    width: '55%',
  },
  movieStats: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
