import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text, TouchableOpacity, TextInputBase, TextInputComponent, FlatList, TouchableWithoutFeedback, Modal, Button, Pressable, Keyboard } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import { SearchSuggestionMeals, SearchedMeals } from '../../API/ListArea';
import SearchSuggestion, { Separator } from '../Component/SuggestionItem';
import SearchItem from '../Component/SearchItem';
import { useDispatch, useSelector } from 'react-redux';
import { updateLastSuggestedList } from '../../Redux/LastSuggestionList';
import { updateLastSearchedList } from '../../Redux/LastSearchResultSlice';

const SearchScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const lastSuggestionListSlice = useSelector(state => state.lastSuggestionListSlice.value)
    const lastSearchedSlice = useSelector(state => state.lastSearchedSlice.value)


    const [search, setSearch] = useState()
    const [shouldShowLastSearchTitle, setShouldShowLastSearchTitle] = useState(true)
    const [searchSuggestionVisiblity, setSearchSuggestionVisiblity] = useState(false)


    const onSearchChange = async (txt) => {

        const suggestions = await SearchSuggestionMeals(txt)
        setSearchSuggestionVisiblity(suggestions != null && suggestions.length > 0)
        dispatch(updateLastSuggestedList(suggestions))

    }


    const onSearchPress = async () => {
        
        if (search == null || search == "") {
            return
        }
        setShouldShowLastSearchTitle(false)

        const searchResult = await SearchedMeals(search)
        console.log(searchResult)
        setSearchSuggestionVisiblity(false)
        dispatch(updateLastSearchedList(searchResult))

    }

    useEffect(() => {
        if (search == null || search == "") {
            setSearchSuggestionVisiblity(false)
            return
        }
        onSearchChange(search)

    }, [search])





    return (


        <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>

            <View style={{
                flexDirection: "row",
                paddingHorizontal: 10,
                borderRadius: 10,
                alignItems: "center",
                borderWidth: 1,
                marginVertical:14,

                borderColor: "black",
            }}>

                <TextInput
                    style={{ flex: 1, textAlignVertical: "center", height: 50, backgroundColor: null, borderBottomWidth: 0 }}
                    placeholder='Search Anything...'
                    onChangeText={(e) => { setSearch(e) }}
                    onFocus={(e) => {
                        console.log(e)
                        if (lastSuggestionListSlice != null && lastSuggestionListSlice.length > 0) {
                            setSearchSuggestionVisiblity(true)
                        }
                    }}
                />



                <Icon name="search-outline" size={20} onPress={(e) => {
                    onSearchPress()
                }} />

            </View>


            <View style={{ flex: 1 }}>
                {lastSearchedSlice?.length > 0 &&

                    <View style={{ width: "100%", backgroundColor: "white", paddingVertical: 10 }}>
                        {/* This is suggestion list */}
                        <FlatList
                            data={lastSearchedSlice}
                            ListHeaderComponent={shouldShowLastSearchTitle && <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 15,marginVertical:10 }}>Last Search Results...</Text>}
                        
                            ItemSeparatorComponent={Separator}
                            // showsHorizontalScrollIndicator={false} // Disable the scrollbar
                            renderItem={({ item, index }) => (
                                <SearchItem
                                    key={item.key}
                                    item={item}

                                    onTap={() => navigation.navigate("FullScreenMeal", {mealId : item.idMeal}) }
                                />
                            )}
                        />

                    </View>
                }

                {searchSuggestionVisiblity &&
                    <View style={{ position: "absolute", top: 0, width: "100%", backgroundColor: "white", paddingVertical: 10, elevation: 15, borderColor: "#ccc", borderWidth: 2, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        {/* This is suggestion list */}
                        <FlatList
                            data={lastSuggestionListSlice}
                            ItemSeparatorComponent={Separator}
                            ListFooterComponent={
                                <View>
                                    <Separator />
                                    <Pressable onPress={() => setSearchSuggestionVisiblity(false)} style={{ flexDirection: "row", justifyContent: "center" }} >

                                        <Icon name="close" size={20} />
                                        <Text>Close Suggestion</Text>
                                    </Pressable>
                                </View>

                            }
                            // showsHorizontalScrollIndicator={false} // Disable the scrollbar
                            renderItem={({ item, index: i }) => (
                                <SearchSuggestion
                                    key={item.key}
                                    item={item}

                                    onTap={() => navigation.navigate("FullScreenMeal", {mealId : item.idMeal})}
                                />
                            )}
                        />

                    </View>
                }


            </View>




        </SafeAreaView>
    )
}

export default SearchScreen