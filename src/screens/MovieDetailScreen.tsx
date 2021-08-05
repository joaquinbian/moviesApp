import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, Image, StyleSheet, useWindowDimensions} from 'react-native';
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
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          // flex: 1,
          width: width - 30,
          height: 470,
          marginTop: 5,
          // marginHorizontal: 15,
        }}>
        <Image
          source={{
            uri,
          }}
          style={styles.img}
        />
      </View>
    </View>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    borderRadius: 20,
  },
});
