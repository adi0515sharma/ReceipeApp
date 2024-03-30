import React from 'react';

import { View, Text, Pressable } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
const SelectAreaScreen = ({ navigation }) => {
    return (

        <SafeAreaView style={{flex:1}}>
        <View>
            <Pressable onPress={(e) => navigation.navigate("HomeScreenNavigation")}>
                <Text>Select Area Screen</Text>


            </Pressable>
        </View>
    </SafeAreaView>
    )
}

export default SelectAreaScreen