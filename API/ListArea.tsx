import axios from "axios";
import { ALL_AREA } from "../Utils/Constants";

const GetAllArea = async() =>{
    const response = await axios.get(ALL_AREA)
    const data = response.data
    let areas = []
    if(data != null && data.meals != null){
        
        areas =  data.meals.map(meal => {
            return { ...meal, img: `../Utils/AreaFood/${meal.strArea}.png` };
          });
    }

    return areas
}

export default GetAllArea;