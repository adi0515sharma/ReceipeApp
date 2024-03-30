
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import SavedScreen from './ShowSaved';
const HomeStack = createNativeStackNavigator();


function HomeScreenTab(){
    return (<HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Details" component={SavedScreen} />
  </HomeStack.Navigator>)
}

const Tab = createBottomTabNavigator();

function HomeScreenNavigation() {
  return (
    <Text>hh</Text>
  );
}

export default HomeScreenNavigation