import { Image, TouchableOpacity, Text, View } from "react-native"
import { getAreaImage } from "../../API/ListArea"


const SearchSuggestion = ({ item, onTap }) => {
    return (
        <TouchableOpacity
            onPress={(e) => onTap()}
            style={{ borderRadius: 6, paddingHorizontal: 6}}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>

                <Image source={{
                    uri: item.strMealThumb,
                }} style={{ width: 50, height: 50 }} />
                <View style={{ width: 5 }}></View>
                <View>
                    <Text>{item.strMeal}</Text>
                    <Text>{item.strArea}</Text>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export  const Separator = () => (
    <View
      style={{
        height: 1,
        marginVertical: 10,
        backgroundColor: 'gray',
      }}
    />
  );


export default SearchSuggestion