import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackParams} from '../navigation/NavigationStack';

interface Props extends StackScreenProps<RootStackParams, 'MovieDetail'> {}

const MovieDetailScreen = ({navigation, route}: Props) => {
  console.log(route.params, 'soy los paramssss');
  const movie = route.params;

  return (
    <View>
      <Text>soy la peli tal</Text>
      <Button title="goback" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MovieDetailScreen;
