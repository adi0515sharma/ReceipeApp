import React, { useEffect } from 'react';

import { View, Text, Pressable, StyleSheet, Button } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import GetAllArea from '../API/ListArea';

const SelectAreaScreen = ({ navigation }) => {


    useEffect(()=>{
        GetAllArea().then((e)=>{
            console.log(e)
        })
    },[])

    return (

        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.textTitleStyle}>Select Area</Text>
                <Text>Select Your Favourate Area Or Continantel Food From Across Global</Text>
            </View>
            <View style={{flex:1}}>
                
            </View>
            <View>
                <Button title='Proceed to home' onPress={()=>{}}></Button>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eaeaea',
      padding: 15
    },


    textTitleStyle : {
        color : "black",
        fontWeight: "bold",
        fontSize: 20,
        
          
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: '#20232a',
      borderRadius: 6,
      backgroundColor: '#61dafb',
      color: '#20232a',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });

export default SelectAreaScreen
