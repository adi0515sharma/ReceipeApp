import { useEffect, useState } from "react"
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { GetAllMealsByArea } from "../../API/ListArea"
import FullScreenPopup from "../Component/FullScreenLoader";
import { useIsFocused } from "@react-navigation/native";
import { primary_color } from "../../assets/color";


const MealsView = ({ item, navigateTo }) => {
    return <Pressable style={styles.gridItem} onPress={() => {
        navigateTo()
    }}>

        <View style={{ flex: 1, width: "100%", height: "100%", alignItems: "center" }}>
            <Image source={{
                uri: item.strMealThumb,
            }} style={{
                width: "100%", height: 120, borderTopLeftRadius: 6, borderTopRightRadius: 6, borderWidth: 2,
            }} />
            <View style={{ height: 5 }}></View>
            <Text style={{ fontSize: 17, fontFamily: "Poppins-Regular" }} numberOfLines={1} >{item.strMeal}</Text>
            <View style={{ height: 5 }}></View>
        </View>

    </Pressable>

};



const ContinentalFoodScreen = ({ navigateTo, area }) => {

    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
       
            setLoading(true)
            GetAllMealsByArea(area).then((response) => {
                setLoading(false)
                setMeals(response)
            })
        
        
    }, [])

    return (<View style={{ flex: 1 }}>

        <FullScreenPopup visible={loading} onClose={null} />

        <FlatList

            data={meals}
            style={styles.foodFlatList}
            renderItem={({ item }) => <MealsView item={item} navigateTo={() => { navigateTo(item.idMeal) }} />}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            initialNumToRender={4} // Example value, adjust as needed
        />


    </View>
    )
}


const styles = StyleSheet.create({


    foodFlatList: {
        flex: 1,
        marginVertical: 7
    },

    gridItem: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: primary_color,
        borderWidth: 2,
        marginTop: 5,
        marginHorizontal: 2
    },

    selectedGridItem: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: "green",
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
        backgroundColor: '#eaeaea',
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

export default ContinentalFoodScreen