import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import {Movie} from '../interfaces/movieDBInterface';
import useEffect from 'react';

export type RootStackParams = {
  Home: undefined;
  MovieDetail: Movie;
};
const Stack = createStackNavigator<RootStackParams>();

const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
        // presentation: 'transparentModal', //diferentes formas de hacer una transicion entre las pantallas del stack
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
