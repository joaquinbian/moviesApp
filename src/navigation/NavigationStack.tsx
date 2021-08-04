import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';

const Stack = createStackNavigator();

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
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="movie" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
