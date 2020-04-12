/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import LoginScreen from './src/screens/login/LoginScreen'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true}/>
      <SafeAreaView>
        <LoginScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
