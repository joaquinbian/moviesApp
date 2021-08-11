import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <LinearGradient
        colors={['#F52A2A', '#FB6B6B', '#FFBABA']}
        style={{...StyleSheet.absoluteFillObject}} // Eel absoluteFill te pone un posicionamiento total en 0 para evitar repeticiones
        // (top, right, left, bottom en 0), pero el absoluteFillObject se usa cuando queres
        // hacer eso pero con un par de "retoques", como por ejemplo right, left, bottom en 0
        // y top en 20
        start={{x: 0, y: 0}}
        end={{x: 0.5, y: 0.5}}
      />
      {children}
    </View>
  );
};

export default GradientBackground;
