import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SelectAreaScreen from './Screens/SelectArea';
import SplashScreen from './Screens/SplashScreen';
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';

import PoppinsRegular from './assets/fonts/Poppins-Regular.ttf';
import PoppinsBold from './assets/fonts/Poppins-Bold.ttf';

import PoppinsSemiBold from './assets/fonts/Poppins-SemiBold.ttf';

import { useQuery } from '@realm/react';
import MealSaved from './Local/SavedItem';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import SearchScreen from './Screens/HomeScreen/SearchScreen';
import FullScreenFoodDetail from './Screens/HomeScreen/FullScreenFoodDetail';
import SavedScreen from './Screens/HomeScreen/ShowSaved';
import Icon from 'react-native-vector-icons/Ionicons';
import { primary_color, secondary_primary_color, white } from './assets/color';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


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

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SelectAreaScreen" component={SelectAreaScreen} />
        <Stack.Screen name="HomeScreenNavigation" component={HomeScreenNavigation} />
      </Stack.Navigator>
    </NavigationContainer>



  );
}

const HomeStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="FullScreenMeal" component={FullScreenFoodDetail} />
  </Stack.Navigator>
);

const SavedStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SavedItemScreen" component={SavedScreen} />
    <Stack.Screen name="FullScreenMeal" component={FullScreenFoodDetail} />
  </Stack.Navigator>
);


const HomeScreenNavigation = () => {
  const tasks = useQuery(MealSaved);

  return (
    <BottomTab.Navigator

      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          height: 60,
          paddingTop: 10,

        },

        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Saved') {
            iconName = 'save';
          }

          const currentSelected = route;
          console.log("============= is selected ========")
          console.log(currentSelected)
          // Return your custom icon component with count indicator
          return (
            <View style={{ alignItems: "center" }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={iconName} color={color} size={size} />

                {iconName == 'save' && tasks?.length > 0 &&
                  <View style={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    backgroundColor: primary_color,
                    
                    borderRadius: 50, // Half of the width and height to make it a circle
                    width: 20, // Adjust width and height to make it larger or smaller
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Text style={{ color: 'white' }}>{tasks.length}</Text>
                  </View>
                }

              </View>
              <Text style={{ fontFamily: "Poppins-Regular" }}>{route.name}</Text>

            </View>

          );
        },
        tabBarLabel: ({ focused, color }) => {
          // Customize label if needed
          return null;
        },
        tabBarOptions: {
          inactiveTintColor: secondary_primary_color,
          activeTintColor: primary_color,
        }

      })}

    >
      <BottomTab.Screen name="Home" component={HomeStackScreen} />
      <BottomTab.Screen name="Saved" component={SavedStackScreen} />
    </BottomTab.Navigator>
  );
};