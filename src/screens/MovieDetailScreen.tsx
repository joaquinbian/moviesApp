import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../navigation/NavigationStack';

interface Props extends StackScreenProps<RootStackParams, 'MovieDetail'> {}

const MovieDetailScreen = ({navigation, route}: Props) => {
  // console.log(route.params, 'soy los paramssss');
  const movie = route.params;
  console.log(movie);
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
  },
  title: {fontWeight: 'bold', fontSize: 25, marginLeft: 10},
});
