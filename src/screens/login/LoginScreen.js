import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import Toast from 'react-native-simple-toast';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const sendLogin = () => {
    fetch('http://10.0.2.2:3000/api/v1/login', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({phone: phoneNumber}),
      })
      .then(response => {
        if (response.status == 200) {
          console.log("OTP Sent!")
          Toast.show("OTP Sent!")
          response.json()
          .then(data => {
            console.log(data.user_id)
            navigation.navigate('OtpScreen', {userId: data.user_id})
          })
        } else {
          Toast.show("Something went wrong! Please try again.")
        }
      })
      .catch(error => console.error(error))
  } 

  return (
    <>
      <StatusBar hidden={true}/>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: 'white'
          }}
        >
          <Image source={require('./logo.png')} 
          style={{height: undefined, width: "35%", height: "25%", backgroundColor: 'white'}}
          resizeMode="contain"/>
          <View style={{marginBottom: 10, width: "100%"}}>
            <TextInput
            onChangeText={text => setPhoneNumber(text)}
            keyboardType='numeric'
            style={{ height: 40, borderColor: '#B53471', borderWidth: 1, borderRadius: 25, width: "50%", marginLeft: "25%", paddingLeft: 25 }}
            placeholder={"Phone"} placeholderTextColor={"gray"} />
          </View>
          <View style={{marginBottom: 10, width: "100%"}}>
            <TouchableOpacity
            onPress={sendLogin}
            style={{ height: 40, 
            backgroundColor: '#B53471', 
            borderWidth: 0, 
            borderRadius: 25, 
            width: "50%", 
            marginLeft: "25%",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center', shadowColor: "#000",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5 }}
            >
              <Text style={{color: 'white'}}>Get OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;