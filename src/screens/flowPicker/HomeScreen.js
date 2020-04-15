import React, { useState, useEffect } from "react";
import { SafeAreaView, ImageBackground, StatusBar, View, Image, TextInput, TouchableOpacity, Alert, Text } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'

const FlowPickerScreen = ( ) => {
  const [fullName, setFullName] = useState('');

  const getFullNameFromStorage = async () => {
    const item = await AsyncStorage.getItem('fullName');
    console.log("From Storag", item);
    setFullName(item);
  };

  useEffect(() => {
    getFullNameFromStorage();
  }, []);

  function PlayScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>What would you like to play?</Text>
      </View>
    );
  }
  
  function TrainScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>What would you like to get trained on?</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  function HomeTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ 
        flexDirection: 'row', 
        width: "100%", 
        height: "7%", 
        backgroundColor: "lightgray", 
        justifyContent: "space-around", 
        alignItems: "center"}}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ alignItems: 'center', 
              borderTopWidth: 2,
              borderTopColor: (isFocused ? "#B53471" : "lightgray"),
              flex: 1, height: "100%", paddingTop: "0.5%", flexDirection: 'row', justifyContent: "center" }}
            >
              <Icon name={index == 0 ? 'futbol' : 'dumbbell'} style={{marginRight: 5, color: (isFocused ? '#B53471' : '#222')}}/>
              <Text style={{ color: isFocused ? '#B53471' : '#222' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <>
      <StatusBar hidden={true}/>
        <NavigationContainer independent={true}>
          <Tab.Navigator tabBar={props => <HomeTabBar {...props} />}>
            <Tab.Screen name="PlayScreen" component={PlayScreen} options={{tabBarLabel: 'Play'}}/>
            <Tab.Screen name="TrainScreen" component={TrainScreen} options={{tabBarLabel: 'Train'}} />
          </Tab.Navigator>
        </NavigationContainer>
      {/* </SafeAreaView> */}
    </>
  );
};

export default FlowPickerScreen;