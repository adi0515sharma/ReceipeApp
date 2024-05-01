import { Image, TouchableOpacity, Text, View } from "react-native"
import { getAreaImage } from "../../API/ListArea"
import { primary_color } from "../../assets/color"


const AreaChip = ({ item, isSelected, changeIndex }) => {
    return (
        <TouchableOpacity 
        onPress={(e)=>changeIndex()}
        style={{ borderRadius: 6, backgroundColor: isSelected ? "#ccc" : "white", paddingHorizontal: 6, paddingVertical: 4, marginRight:10, borderWidth:1, borderColor:primary_color }}
        >
            <View style={{ flexDirection: "row", alignItems: "center" , justifyContent:"center"}}>
                
                <Image source={getAreaImage(item.strArea)} style={{ width: 25, height: 25, borderRadius: 30 }} />
                <View style={{ width: 5 }}></View>
                <Text style={{fontFamily:"Poppins-Regular",  includeFontPadding:false}}>{item.strArea}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default AreaChip