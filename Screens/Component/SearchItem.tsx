import { Image, TouchableOpacity, Text, View } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons';

const SearchItem = ({ item, onTap }) => {
    return (
        <TouchableOpacity
            onPress={(e) => onTap()}
            style={{ borderRadius: 6, paddingHorizontal: 6 }}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>

                <Image source={{
                    uri: item.strMealThumb,
                }} style={{ width: 100, height: 100 }} />
                <View style={{ width: 5 }}></View>
                <View style={{ flex: 1, height: "100%", paddingHorizontal: 3 }}>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18 }}>{item.strMeal}</Text>
                        <Text style={{ fontFamily: "Poppins-Regular", fontSize: 14 }}>{item.strCategory}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Icon name="location" size={20} />
                        <Text style={{ fontFamily: "Poppins-Regular", fontSize: 15, marginLeft: 4 }}>{item.strArea}</Text>

                    </View>

                    {item.strTags != null &&

                        <View style={{ flexDirection: "row", flexWrap: 'wrap', marginTop: 10 }}>
                            {
                                item.strTags.split(',').map((chip, index) => (
                                    <View key={index} style={{
                                        backgroundColor: '#e0e0e0',
                                        borderRadius: 20,
                                        paddingVertical: 5,
                                        paddingHorizontal: 10,

                                    }}>
                                        <Text style={{
                                            fontSize: 15, fontFamily: "Poppins-Regular",
                                            color: '#333',
                                        }}>{chip}</Text>
                                    </View>
                                ))
                            }
                        </View>

                    }

                </View>


            </View>
        </TouchableOpacity>
    )
}

export const Separator = () => (
    <View
        style={{
            height: 1,
            marginVertical: 10,
            backgroundColor: 'gray',
        }}
    />
);


export default SearchItem