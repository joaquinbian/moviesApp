import {Image} from 'react-native';
import ImageColors from 'react-native-image-colors';

export const getColores = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});

  let primary;
  let secondary;

  // esto lo tenemos que hacer porque la forma en la que se presenta
  // el objeto difiere de acuerdo a la plataforma, entonces para
  // acceder a los colores tenemos que usar dos formas diferentes
  // pero como lo estamos guardando en la misma variable, solo exportamos
  // eso y del otro lado lo podemos usar sin problema

  if (colors.platform === 'android') {
    primary = colors.dominant;
    secondary = colors.average;
  } else {
    primary = colors.primary;
    secondary = colors.secondary;
  }

  return {primary, secondary};
};
