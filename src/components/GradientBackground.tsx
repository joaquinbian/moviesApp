import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import useFade from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: Props) => {
  const {colors, prevColors, setPreviousColors} = useContext(GradientContext);

  const {fadeIn, fadeOut, opacity} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPreviousColors(colors);
      fadeOut();
    });
  }, [colors]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, '#fff']}
        style={{...StyleSheet.absoluteFillObject}} // Eel absoluteFill te pone un posicionamiento total en 0 para evitar repeticiones
        // (top, right, left, bottom en 0), pero el absoluteFillObject se usa cuando queres
        // hacer eso pero con un par de "retoques", como por ejemplo right, left, bottom en 0
        // y top en 20
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.5}}
      />
      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, '#fff']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.5}}
        />
      </Animated.View>

      {children}
    </View>
  );
};

export default GradientBackground;
