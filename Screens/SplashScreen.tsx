import React, { useEffect } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { primary_color, secondary_primary_color } from '../assets/color';
import { useSelector } from 'react-redux';
import { Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const data = useSelector(state => state.area.value)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (data.selectedContinantal.length == 0) {
        navigation.replace('SelectAreaScreen');
      }
      else{
        navigation.replace('HomeScreenNavigation');
      }
       // Replace SplashScreen with SelectAreaScreen after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: primary_color, justifyContent: "center", alignItems: "center" }}>
      <Image 
      style={{width:300, height:300}}
      source={require("../Utils/AreaFood/MyReceipe.png")}
       />
    </SafeAreaView>
  )
}

export default SplashScreen