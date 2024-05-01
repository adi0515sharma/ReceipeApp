import React, { useEffect, useState } from 'react';

import { View, Text, Pressable, StyleSheet, Button, FlatList, BackHandler } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchDataRequest, updateSelected } from '../Redux/SelectAreaFoodSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getAreaImage } from '../API/ListArea';
import { CommonActions } from '@react-navigation/native';
import { primary_color, secondary_primary_color, white } from '../assets/color';



const AreaView = ({ item, updateSelectedItem, isSelected }) => {
    return <Pressable onPress={(e) => updateSelectedItem()} style={isSelected ? styles.selectedGridItem : styles.gridItem}>

        <View style={{ flex: 1, width: "100%", height: "100%", alignItems: "center" }}>
            <Image source={getAreaImage(item.strArea)} style={{
                width: "100%", height: 120, borderTopLeftRadius: 6, borderTopRightRadius: 6, borderWidth: 2,
            }} />
            <View style={{ height: 5 }}></View>
            <Text style={{ fontSize: 17, fontFamily: "Poppins-Regular" }}>{item.strArea}</Text>
            <View style={{ height: 5 }}></View>
        </View>

        {isSelected && <LinearGradient
            colors={['rgba(0, 128, 0, 0.5)', 'transparent']}
            style={{
                position: 'absolute',
                width:"100%",
                height:"100%",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,

            }}
        />}


    </Pressable>

};



const SelectAreaScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const data = useSelector(state => state.area.value)

    const handleFetchData = () => {

        if(data.selectedContinantal.length == 0){
            return
        }
        
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomeScreenNavigation' }], // Replace 'NextScreen' with the name of your next screen
            })
          );
    };



    useEffect(() => {

      
        if(data.continantal == null || data.continantal.length == 0){
            dispatch(fetchDataRequest());
        }
        else{
            console.log(data.continantal)
        }
        
    }, [])

    return (



        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={styles.textTitleStyle}>Select Area</Text>
                    <Text style={styles.textDescriptionStyle}>Select Your Favourate Area Or Continantel Food From Across Global</Text>

                </View>


                <View style={{ flex: 1 }}>

                    <FlatList

                        data={data.continantal}
                        style={styles.foodFlatList}
                        renderItem={({ item }) => <AreaView item={item} isSelected = {data.selectedContinantal.find( i =>i.strArea == item.strArea)} updateSelectedItem={() => dispatch(updateSelected(item))} />}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        initialNumToRender={4} // Example value, adjust as needed
                    />


                </View>



                <View>
                    <Button color={primary_color} title={data.selectedContinantal.length > 0 ? 'Proceed to home' : "Please Select Atleast 1"} onPress={handleFetchData}></Button>

                </View>
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({


    foodFlatList: {
        flex: 1,
        marginVertical: 10
    },

    gridItem: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: secondary_primary_color,
        borderWidth: 4,
        marginTop: 5,
        marginHorizontal: 2
    },

    selectedGridItem: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: primary_color,
        borderWidth: 4,
        marginTop: 5,
        marginHorizontal: 2
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 30,
    },

    container: {
        flex: 1,
        backgroundColor: white,
        paddingVertical: 15,
        paddingHorizontal: 10
    },


    textTitleStyle: {
        color: "black",
        fontSize: 20,
        fontFamily: "Poppins-SemiBold"
    },

    textDescriptionStyle: {
        color: "black",
        fontSize: 15,
        fontFamily: "Poppins-Regular"
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
