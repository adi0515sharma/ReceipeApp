import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreenNavigation from './Screens/HomeScreen/HomeScreenNavigation';
import SelectAreaScreen from './Screens/SelectArea';
import SplashScreen from './Screens/SplashScreen';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import {store} from './Redux/Store';

import PoppinsRegular from './assets/fonts/Poppins-Regular.ttf';
import PoppinsBold from './assets/fonts/Poppins-Bold.ttf';

import PoppinsSemiBold from './assets/fonts/Poppins-SemiBold.ttf';

import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

const persistor = persistStore(store)

export default function App() {


  const [fontsLoaded] = useFonts({
    'Poppins-Regular': PoppinsRegular, // Register the font with a name
    'Poppins-Bold': PoppinsBold,
    'Poppins-SemiBold': PoppinsSemiBold
  });


  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Render a loading indicator until fonts are loaded
  }


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"SelectAreaScreen"} screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SelectAreaScreen" component={SelectAreaScreen} />
          <Stack.Screen name="HomeScreenNavigation" component={HomeScreenNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
      

    </Provider>
  );
}


