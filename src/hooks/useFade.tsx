import {useRef} from 'react';
import {Animated} from 'react-native';

// interface Props {
//   Initialvalue: number;
//   duration: number
// }
const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  //fade in
  const fadeIn = (callback?: Function) => {
    //animated.timing para manejar los tiempos
    //recibe el valor que vamos a modificar y luego un obj con una configuracion
    //el use native driver hace que sea acelerado por hardware y se vea bien

    //el start recibe un callback que se ejecuta cuando la animacion termine
    Animated.timing(opacity, {toValue: 1, duration: 300, useNativeDriver: true}).start(() =>
      callback ? callback() : null,
    );
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};
export default useFade;
