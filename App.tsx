import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import {GradientProvider} from './src/context/GradientContext';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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
