import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import FadeScreen from './src/screens/FadeScreen';
import {GradientProvider} from './src/context/GradientContext';

const App = () => {
  return (
    <NavigationContainer>
      <GradientProvider>
        <NavigationStack />
        {/* <FadeScreen /> */}
      </GradientProvider>
    </NavigationContainer>
  );
};

export default App;
