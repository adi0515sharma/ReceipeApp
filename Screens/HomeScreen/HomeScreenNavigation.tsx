
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import SavedScreen from './ShowSaved';
import SearchScreen from './SearchScreen';
import FullScreenFoodDetail from './FullScreenFoodDetail';


const HomeStack = createNativeStackNavigator();
function HomeScreenTab() {
  return (<HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    <HomeStack.Screen name="Search" component={SearchScreen} />
    <HomeStack.Screen name="FullScreenMeal" component={FullScreenFoodDetail} />

  </HomeStack.Navigator>)
}


const Tab = createBottomTabNavigator();

function HomeScreenNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>

        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
          name="Home"
          component={HomeScreenTab}
        />
        
        <Tab.Screen
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon: ({ color, size }) => (
              <Icon name="save" color={color} size={size} />
            ),
          }}
          name="Saved" 
          component={SavedScreen}
        />

      </Tab.Navigator>

    </NavigationContainer>


  );
}

export default HomeScreenNavigation