import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import WebView from 'react-native-webview';
import { GetMealById } from '../../API/ListArea';
import FullScreenPopup from '../Component/FullScreenLoader';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function FullScreenFoodDetail({ navigation, route }) {

  const [mealData, setMealData] = useState(null)
  const [ingridents, setIngridents] = useState()

  const [loading, setLoading] = useState(false)


  useEffect(() => {

    if (route.params.mealId == null) {
      return
    }


    setLoading(true)
    GetMealById(route.params.mealId).then((response) => {
      setLoading(false)

      if (response != null) {
        console.log(response)
      }
      setMealData(response)
      let fetchingDone = false
      let index = 1;
      let arrayOfIngrident = {}
      while (!fetchingDone) {
        if (response[`strIngredient${index}`] != null && response[`strIngredient${index}`] != "") {
          arrayOfIngrident[response[`strIngredient${index}`]] = response[`strMeasure${index}`]
          index++
        }
        else {
          break
        }
      }
      setIngridents(arrayOfIngrident)

    })


  }, [])


  const getIngrident = (ingridents) => {

    if (ingridents == null) {
      return
    }
    return <View>
      <AddTitle title={"* Meal Ingredient *"} />
      <View style={styles.container}>
        <View style={[styles.row, styles.header]}>
          <Text style={styles.headerText}>Ingredient</Text>
          <Text style={styles.headerText}>Quantity</Text>
        </View>
        {Object.entries(ingridents).map(([ingredient, quantity], index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{ingredient}</Text>
            <Text style={styles.cell}>{quantity}</Text>
          </View>
        ))}
      </View>
    </View>



  }


  const AddTitle = ({ title }) => {
    return <View style={{ flex: 1, flexDirection: "column", flexWrap: 'wrap', alignSelf: "center", marginVertical: 20, }}>

      <View>

        <Text style={{
          fontFamily: "Poppins-SemiBold",
          fontSize: 18,


          flexWrap: 'wrap',
          textAlign: 'center', // Center the text horizontally
          alignSelf: 'center', // Center the text vertically
        }}> {title} </Text>

        <View style={{ height: 2, backgroundColor: "black" }} />

      </View>


    </View>
  }



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <FullScreenPopup visible={loading} onClose={null} />
        {mealData != null &&

          <View style={{ flex: 1 }}>

            <View style={{ width: "100%" }}>
              <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20, padding: 10, borderBottomWidth: 1, borderBottomColor: "black" }}>
                {mealData?.strMeal}
              </Text>
            </View>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}

            >

              <View style={{ flex: 1 }}>

                <Image source={{ uri: mealData.strMealThumb }} style={{ width: "100%", height: 300, borderColor: "red", borderWidth: 2, borderRadius: 10 }} />

                {getIngrident(ingridents)}


                <AddTitle title={"* Cooking Instruction *"} />

                <Text style={{ fontFamily: "Poppins-Regular", fontSize: 15 }}>{mealData?.strInstructions}</Text>

                {mealData?.strYoutube &&

                  <View style={{ marginTop: 50 }}>
                    <AddTitle title={"* Watch on youtube *"} />
                    <WebView
                      style={{ marginTop: 20, width: "100%", height: 500 }}
                      javaScriptEnabled={true}
                      domStorageEnabled={true}
                      source={{ uri: mealData?.strYoutube }}
                      nestedScrollEnabled={true}
                    />
                  </View>

                }

              </View>



            </ScrollView>

          </View>

        }

      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    padding: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    textAlign: "center"
  },
  title: {
    fontSize: 24,

    fontFamily: "Poppins-SemiBold"
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    textAlign: "center"

  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: "center",
    flex: 1,
  },
})