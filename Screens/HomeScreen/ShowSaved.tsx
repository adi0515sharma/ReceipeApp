import React from 'react';

import { View, Text, Pressable } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
const SavedScreen = ({ navigation }) => {
    return (

        <SafeAreaView style={{flex:1}}>
        <View>
            <Pressable onPress={(e) => navigation.navigate("Search")}>
                <Text>Saved Screen</Text>


            </Pressable>
        </View>
    </SafeAreaView>
    )
}

export default SavedScreen