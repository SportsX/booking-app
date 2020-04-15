import React, { useState, useEffect } from "react";
import { SafeAreaView, ImageBackground, StatusBar, View, Image, TextInput, TouchableOpacity, Alert, Text } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'

const FlowPickerScreen = ({ navigation }) => {
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

  const logOut = () => {
    console.log('Logging out...')
    navigation.navigate('LoginScreen')
  }


  function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Your Profile</Text>
        <TouchableOpacity
            onPress={logOut}
            style={{ height: 40, 
            backgroundColor: 'lightgray', 
            borderWidth: 0, 
            borderRadius: 25, 
            width: "30%",
            marginTop: 10,
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
              <Text style={{color: 'white'}}>Logout</Text>
            </TouchableOpacity>
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

          const icons = ['futbol', 'dumbbell', 'user']
  
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
              flex: (index < 2 ? 3 : 1), height: "100%", paddingTop: "0.5%", flexDirection: 'row', justifyContent: "center" }}
            >
              <Icon name={icons[index]} style={{marginRight: 5, color: (isFocused ? '#B53471' : '#222')}}/>
              {
                (index < 2) &&
                <Text style={{ color: isFocused ? '#B53471' : '#222' }}>
                {label}
              </Text>
              }
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
          <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{tabBarLabel: 'Profile'}} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default FlowPickerScreen;