import React from "react";
import { SafeAreaView, ImageBackground, StatusBar, View, Image, TextInput, TouchableOpacity, Alert, Text } from "react-native";

const FlowPickerScreen = () => {
  return (
    <>
      <StatusBar hidden={true}/>
      <SafeAreaView>
        <ImageBackground source={require('./background.jpg')} style={{width: '100%', height: '100%'}}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '60%',
              marginTop: "30%",
              width: "75%",
              marginLeft: "12.5%",
              backgroundColor: 'white',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.75,
              shadowRadius: 25,
              elevation: 5,
              borderRadius: 15
            }}
          >
            <View style={{marginBottom: 40, width: "100%"}}>
              <Text style={{width: "70%", marginLeft: "15%", color: "gray", fontWeight: "200", fontSize: 40, textAlign: "center"}}>
                What would you like to do?
              </Text>
            </View>
            <View style={{marginBottom: 10, width: "100%"}}>
              <TouchableOpacity
              onPress={() => Alert.alert('Coming soon...')}
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
                <Text style={{color: 'white'}}>Play</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginBottom: 10, width: "100%"}}>
              <Text style={{width: "70%", marginLeft: "15%", color: "gray", fontWeight: "bold", fontSize: 10, textAlign: "center"}}>
                OR
              </Text>
            </View>
            <View style={{marginBottom: 10, width: "100%"}}>
              <TouchableOpacity
              onPress={() => Alert.alert('Coming soon...')}
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
                <Text style={{color: 'white'}}>Get Trained</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default FlowPickerScreen;