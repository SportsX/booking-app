import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import Toast from 'react-native-simple-toast';

const OtpScreen = ({ route, navigation }) => {
  const [otp, setOtp] = useState('');
  const { userId } = route.params;

  const sendOtp = () => {
    fetch('http://10.0.2.2:3000/api/v1/users/' + userId.toString() + '/verify_otp', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({otp: parseInt(otp)}),
      })
      .then(response => {
        if (response.status == 200) {
          response.json()
            .then(data => {
              console.log("Data", data)
              if (data.verified == true) {
                console.log("OTP Verified!")
                Toast.show("OTP Verified!")
                if (data.full_name == null) {
                  navigation.navigate('NameScreen', { userId: userId })
                } else {
                  navigation.navigate('FlowPickerScreen', { userId: userId, fullName: data.full_name })
                }
              } else {
                console.log("Incorrect OTP!")
                Toast.show("Incorrect OTP!")
              }
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
            onChangeText={text => setOtp(text)}
            keyboardType='numeric'
            style={{ height: 40, borderColor: '#B53471', borderWidth: 1, borderRadius: 25, width: "50%", marginLeft: "25%", paddingLeft: 25 }}
            placeholder={"OTP"} placeholderTextColor={"gray"} />
          </View>
          <View style={{marginBottom: 10, width: "100%"}}>
            <TouchableOpacity
            onPress={sendOtp}
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
              <Text style={{color: 'white'}}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default OtpScreen;