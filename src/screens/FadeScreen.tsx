import React, {useRef} from 'react';
import {View, Text, Animated, Button, StyleSheet} from 'react-native';
import useFade from '../hooks/useFade';
// import Animated from 'react-native-reanimated';

const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();
  return (
    <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: 5,
          width: 150,
          height: 150,
          opacity,
          marginBottom: 10,
        }}
      />
      <Button title="fadeIn" onPress={() => fadeIn()} />
      <Button title="fadeOut" onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;
