import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import LoginScreen from './src/screens/login/LoginScreen'
import OtpScreen from './src/screens/login/OtpScreen'
import NameScreen from './src/screens/login/NameScreen'
import HomeScreen from './src/screens/flowPicker/HomeScreen'

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [signedInUser, setSignedInUser] = useState('')

  const readUserStored = async () => {
    const item = await AsyncStorage.getItem('userId')
    if (item == null) {
      console.log("No user session")
    } else { 
      console.log("user signed in:", item)
      setSignedInUser(item)
    } 
  };

  useEffect(() => {
    readUserStored();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {
            (signedInUser == null) ? (
              <>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="OtpScreen" component={OtpScreen} />
                <Stack.Screen name="NameScreen" component={NameScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
              </>
            ) : (
              <Stack.Screen name="FlowPickerScreen" component={HomeScreen} />
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
