import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/movieDBInterface';

interface Props {
  cast: Cast;
}
const CastCard = ({cast}: Props) => {
  const {name, profile_path, character} = cast;

  const uri = `https://image.tmdb.org/t/p/w500/${profile_path}`;
  return (
    <View style={styles.cardContainer}>
      {cast.profile_path && (
        <Image
          source={{
            uri,
          }}
          style={styles.img}
        />
      )}

      <View style={styles.cardInfoContainer}>
        <Text>{name}</Text>
        <Text style={styles.characterName}>{character}</Text>
      </View>
      {/* <Text>{original_name}</Text> */}
    </View>
  );
};

export default CastCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F0F0F0',
    // backgroundColor: 'red',
    flexDirection: 'row',
    padding: 4,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 5,
  },
  img: {
    height: 50,
    width: 40,
  },
  cardInfoContainer: {
    marginHorizontal: 5,
  },
  characterName: {
    fontSize: 10,
    color: 'gray',
  },
});
