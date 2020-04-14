import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import LoginScreen from './src/screens/login/LoginScreen'
import OtpScreen from './src/screens/login/OtpScreen'
import NameScreen from './src/screens/login/NameScreen'
import FlowPickerScreen from './src/screens/flowPicker/FlowPickerScreen'

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [userId, setUserId] = useState('');

  const getUserIdFromStorage = async () => {
    const item = await AsyncStorage.getItem('userId')
    setUserId(parseInt(item))
  };

  useEffect(() => {
    getUserIdFromStorage();
  }, []);

  const getInitialRouteName = () => {
    userId == null ? "LoginScreen" : "FlowPickerScreen"
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={getInitialRouteName()}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="NameScreen" component={NameScreen} />
          <Stack.Screen name="FlowPickerScreen" component={FlowPickerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
