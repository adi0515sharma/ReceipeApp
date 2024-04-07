import axios from "axios";
import { ALL_AREA, ALL_AREA_MEALS, SEARCH_MEALS } from "../Utils/Constants";

const GetAllArea = async() =>{
    const response = await axios.get(ALL_AREA)
    const data = response.data
    return data.meals
}


export const GetAllMealsByArea = async(area) =>{
  const response = await axios.get(`${ALL_AREA_MEALS}${area}`)
  const data = response.data
  return data.meals
}


export const SearchSuggestionMeals = async(MealName) =>{
  const response = await axios.get(`${SEARCH_MEALS}${MealName}`)
  let data = response.data.meals
  if(data == null){
    return null
  }
  if(data.length > 4){
    data = data.slice(0, 4);
  } 

  const meals = data.map(item=> ({
    idMeal: item.idMeal,
    strMeal: item.strMeal,
    strArea: item.strArea,
    strMealThumb: item.strMealThumb
  }));
  
  return meals
}

export const SearchedMeals = async(MealName) =>{
  const response = await axios.get(`${SEARCH_MEALS}${MealName}`)
  let data = response.data.meals
  if(data == null){
    return null
  }
  return data
}

export function getAreaImage(strArea) {
    switch (strArea) {
      case 'American':
        return require('../Utils/AreaFood/American.png');
      case 'British':
        return require('../Utils/AreaFood/British.png');
      case 'Canadian':
        return require('../Utils/AreaFood/Canadian.png');
      case 'Chinese':
        return require('../Utils/AreaFood/Chinese.png');
      case 'Croatian':
        return require('../Utils/AreaFood/Croatian.png');
      case 'Dutch':
        return require('../Utils/AreaFood/Dutch.png');
      case 'Egyptian':
        return require('../Utils/AreaFood/Egyptian.png');
      case 'Filipino':
        return require('../Utils/AreaFood/Filipino.png');
      case 'French':
        return require('../Utils/AreaFood/French.png');
      case 'Greek':
        return require('../Utils/AreaFood/Greek.png');
      case 'Indian':
        return require('../Utils/AreaFood/Indian.png');
      case 'Irish':
        return require('../Utils/AreaFood/Irish.png');
      case 'Italian':
        return require('../Utils/AreaFood/Italian.png');
      case 'Jamaican':
        return require('../Utils/AreaFood/Jamaican.png');
      case 'Japanese':
        return require('../Utils/AreaFood/Japanese.png');
      case 'Kenyan':
        return require('../Utils/AreaFood/Kenyan.png');
      case 'Malaysian':
        return require('../Utils/AreaFood/Malaysian.png');
      case 'Mexican':
        return require('../Utils/AreaFood/Mexican.png');
      case 'Moroccan':
        return require('../Utils/AreaFood/Moroccan.png');
      case 'Polish':
        return require('../Utils/AreaFood/Polish.png');
      case 'Portuguese':
        return require('../Utils/AreaFood/Portuguese.png');
      case 'Russian':
        return require('../Utils/AreaFood/Russian.png');
      case 'Spanish':
        return require('../Utils/AreaFood/Spanish.png');
      case 'Thai':
        return require('../Utils/AreaFood/Thai.png');
      case 'Tunisian':
        return require('../Utils/AreaFood/Tunisian.png');
      case 'Turkish':
        return require('../Utils/AreaFood/Turkish.png');
      case 'Vietnamese':
        return require('../Utils/AreaFood/Vietnamese.png');
      default:
        return require('../Utils/AreaFood/Unknown.png'); // Default image for unknown areas
    }
  }

export default GetAllArea;