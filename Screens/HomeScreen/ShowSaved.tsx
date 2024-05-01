import React, { useEffect } from 'react';

import { View, Text, Pressable, FlatList, BackHandler } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchItem, { Separator } from '../Component/SearchItem';
import { useQuery } from '@realm/react';
import MealSaved from '../../Local/SavedItem';
import { white } from '../../assets/color';
const SavedScreen = ({ navigation }) => {

    const tasks = useQuery(MealSaved);

   

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor:white }}>
            
                <View style={{ width: "100%" }}>
                    <Text style={{
                        fontFamily: "Poppins-SemiBold",
                        fontSize: 20,
                        
                paddingHorizontal: 10,
                paddingVertical:15,
                        borderBottomWidth: 1,
                        borderBottomColor: "black",
                        includeFontPadding:false
                    }}>
                        Saved Meal
                    </Text>
                </View>

                <View style={{ width: "100%", backgroundColor: "white", paddingVertical: 10 }}>

                <FlatList
                    data={tasks}

                    ItemSeparatorComponent={Separator}
                    // showsHorizontalScrollIndicator={false} // Disable the scrollbar
                    renderItem={({ item, index }) => (
                        <SearchItem
                            key={item.idMeal}
                            item={item}

                            onTap={() => navigation.navigate("FullScreenMeal", { mealId: item.idMeal })}
                        />
                    )}
                />

                </View>
        
        </SafeAreaView>
    )
}

export default SavedScreen