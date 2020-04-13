import React from "react";
import { SafeAreaView, StatusBar, View, Image, TextInput, TouchableOpacity, Alert, Text } from "react-native";

const NameScreen = ({ navigation }) => {
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
            style={{ height: 40, borderColor: '#B53471', borderWidth: 1, borderRadius: 25, width: "50%", marginLeft: "25%", paddingLeft: 25 }}
            placeholder={"Full Name"} placeholderTextColor={"gray"} />
          </View>
          <View style={{marginBottom: 10, width: "100%"}}>
            <TouchableOpacity
            onPress={() => navigation.navigate('FlowPickerScreen')}
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