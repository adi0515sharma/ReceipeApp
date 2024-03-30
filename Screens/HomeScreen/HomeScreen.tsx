import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions';
import React from 'react';

import { View, Text, Pressable, Button } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
    return (

        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1 ,alignItems:"center", justifyContent:"center"}}>
            <Text>Home Screen</Text>
            <View style={{height:10}}></View>
            <Button title='Search Screen' onPress={(e) => navigation.navigate("Search")} />
            </View>
        </SafeAreaView>

    )
}

export default HomeScreen