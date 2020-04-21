import React from "react";
import { SafeAreaView, ImageBackground, StatusBar, View, Image, TextInput, TouchableOpacity, Alert, Text } from "react-native";

const SplashScreen = ({navigator}) => {

useEffect(() => {
	setTimeout(() => {
     navigator.navigate("");
    }, 2000)
}, []);

  return (
    <>
      <StatusBar hidden={true}/>
      <SafeAreaView>
        <ImageBackground source={require('./splashBG.jpg')} style={{width: '100%', height: '100%'}}/>
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;