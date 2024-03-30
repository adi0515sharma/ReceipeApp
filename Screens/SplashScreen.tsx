import React from 'react';

import { View, Text, Pressable, Button } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Slices, { increment, decrement } from '../Redux/Slices';
import { RootState } from '../Redux/Store';

const SplashScreen = ({ navigation }) => {

    const balance = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (

        <SafeAreaView style={{flex:1}}>
        <View>
            <Pressable onPress={(e) => navigation.navigate("SelectAreaScreen")}>
                <Text>Splash Screen</Text>
                
                <View style={{flexDirection:"row"}}>
                <Button title="+" onPress={(e)=>{dispatch(increment())}}></Button>
                <Text>{balance}</Text>
                <Button title="-" onPress={(e)=>{dispatch(decrement())}}></Button>
                
                </View>
                
            </Pressable>
        </View>
    </SafeAreaView>
    )
}

export default SplashScreen