import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import LoginScreen from './src/screens/login/LoginScreen'

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar hidden={true}/>
        <SafeAreaView>
          <LoginScreen />
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default App;
