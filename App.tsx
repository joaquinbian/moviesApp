import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import FadeScreen from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      <FadeScreen />
    </NavigationContainer>
  );
};

export default App;
