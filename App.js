import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreenNavigation from './Screens/HomeScreen/HomeScreenNavigation';
import SelectAreaScreen from './Screens/SelectArea';
import SplashScreen from './Screens/SplashScreen';
import { Provider } from 'react-redux';

import rootReducer from './Redux/Store';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={rootReducer}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"SelectAreaScreen"} screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SelectAreaScreen" component={SelectAreaScreen} />
          <Stack.Screen name="HomeScreenNavigation" component={HomeScreenNavigation} />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}


