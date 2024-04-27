import React, { useEffect } from 'react';

import { View, Text,  useWindowDimensions, TouchableOpacity, FlatList } from "react-native"

import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabView } from 'react-native-tab-view';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ContinentalFoodScreen from './ContinentalFoodScreen';
import AreaChip from '../Component/CustomChip';






const HomeScreen = ({ navigation }) => {

    const selectedContinantal = useSelector(state => state.area.value.selectedContinantal)

    useEffect(() => {
        if (selectedContinantal == null || selectedContinantal.length == 0) {
            return
        }


        let arrayOfContenantal = []
        for (let i = 0; i < selectedContinantal.length; i++) {
            arrayOfContenantal.push({ key: selectedContinantal[i].strArea, title: selectedContinantal[i].strArea })
        }
        setRoutes(arrayOfContenantal)

    }, [selectedContinantal])

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState([]);

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ marginHorizontal: 10 }}>

                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Search")}
                    style={{
                        flexDirection: "row",
                        paddingHorizontal: 10,
                        paddingVertical: 12,
                        borderRadius: 10,
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "black"

                    }}>

                        <Text
                            style={{ flex: 1, textAlign: "center", textAlignVertical: "center" }}
                        >
                            Search Anything...
                        </Text>

                        <Icon name="search-outline" size={20} />

                    </TouchableOpacity>
                    <View style={{ height: 14 }}></View>


                    <FlatList
                        data={selectedContinantal}
                        horizontal
                        showsHorizontalScrollIndicator={false} // Disable the scrollbar

                        contentContainerStyle={{ flexDirection: 'row' }}
                        renderItem={({ item, index: i }) => (
                            <AreaChip
                                key={item.key}
                                item={item}
                                isSelected={index === i}
                                changeIndex={() => setIndex(i)}
                            />
                        )}
                    />


                    {/* Add more chips as needed */}

                </View>



                <TabView
                    navigationState={{ index, routes }}
                    renderScene={({ route, jumpTo }) => 
                        <ContinentalFoodScreen 
                            navigateTo={(mealId)=>{
                                console.log(mealId)
                                navigation.navigate("FullScreenMeal", {mealId : mealId})
                            }} 
                            area={route.key} 
                            />
                    }
                    onIndexChange={setIndex}

                    initialLayout={{ width: layout.width }}
                    renderTabBar={(props) => (null)}

                />
            </View>

        </SafeAreaView>

    )
}


export default HomeScreen