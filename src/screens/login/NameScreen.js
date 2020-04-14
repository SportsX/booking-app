import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, Image, TextInput, TouchableOpacity, Alert, Text } from "react-native";

const NameScreen = ({ route, navigation }) => {
  const [fullName, setFullName] = useState('');
  const { userId } = route.params;
  const saveName = () => {
    fetch('http://10.0.2.2:3000/api/v1/users/' + userId.toString() + '/update_name', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({full_name: fullName}),
      })
      .then(response => {
        if (response.status == 200) {
          navigation.navigate('FlowPickerScreen', {fullName: fullName})
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
          <Image source={require('./name_tag2.png')} 
          style={{height: undefined, width: "35%", height: "25%", backgroundColor: 'white', marginBottom: 20}}
          resizeMode="contain"/>
          <View style={{marginBottom: 10, width: "100%"}}>
            <TextInput
            onChangeText={text => setFullName(text)}
            style={{ height: 40, borderColor: '#B53471', borderWidth: 1, borderRadius: 25, width: "50%", marginLeft: "25%", paddingLeft: 25 }}
            placeholder={"Full Name"} placeholderTextColor={"gray"} />
          </View>
          <View style={{marginBottom: 10, width: "100%"}}>
            <TouchableOpacity
            onPress={saveName}
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
              <Text style={{color: 'white'}}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default NameScreen;