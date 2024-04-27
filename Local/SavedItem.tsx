import Realm from "realm";

class MealSaved extends Realm.Object {
    idMeal!: string;
    strMeal!: string | null;
    strDrinkAlternate!: string | null;
    strCategory!: string | null;
    strArea!: string | null;
    strInstructions!: string | null;
    strMealThumb!: string | null;
    strTags!: string | null;
    strYoutube!: string | null;
    strIngredient1!: string | null;
    strIngredient2!: string | null;
    strIngredient3!: string | null;
    strIngredient4!: string | null;
    strIngredient5!: string | null;
    strIngredient6!: string | null;
    strIngredient7!: string | null;
    strIngredient8!: string | null;
    strIngredient9!: string | null;
    strIngredient10!: string | null;
    strIngredient11!: string | null;
    strIngredient12!: string | null;
    strIngredient13!: string | null;
    strIngredient14!: string | null;
    strIngredient15!: string | null;
    strIngredient16!: string | null;
    strIngredient17!: string | null;
    strIngredient18!: string | null;
    strIngredient19!: string | null;
    strIngredient20!: string | null;
    strMeasure1!: string | null;
    strMeasure2!: string | null;
    strMeasure3!: string | null;
    strMeasure4!: string | null;
    strMeasure5!: string | null;
    strMeasure6!: string | null;
    strMeasure7!: string | null;
    strMeasure8!: string | null;
    strMeasure9!: string | null;
    strMeasure10!: string | null;
    strMeasure11!: string | null;
    strMeasure12!: string | null;
    strMeasure13!: string | null;
    strMeasure14!: string | null;
    strMeasure15!: string | null;
    strMeasure16!: string | null;
    strMeasure17!: string | null;
    strMeasure18!: string | null;
    strMeasure19!: string | null;
    strMeasure20!: string | null;
    strSource!: string | null;
    strImageSource!: string | null;
    strCreativeCommonsConfirmed!: string | null;
    dateModified!: string | null;

    static generate(data: any): any {
        const meal = {
            idMeal: data.idMeal || new Realm.BSON.ObjectId().toHexString(),
            strMeal: data.strMeal || null,
            strDrinkAlternate: data.strDrinkAlternate || null,
            strCategory: data.strCategory || null,
            strArea: data.strArea || null,
            strInstructions: data.strInstructions || null,
            strMealThumb: data.strMealThumb || null,
            strTags: data.strTags || null,
            strYoutube: data.strYoutube || null,
            strIngredient1: data.strIngredient1 || null,
            strIngredient2: data.strIngredient2 || null,
            strIngredient3: data.strIngredient3 || null,
            strIngredient4: data.strIngredient4 || null,
            strIngredient5: data.strIngredient5 || null,
            strIngredient6: data.strIngredient6 || null,
            strIngredient7: data.strIngredient7 || null,
            strIngredient8: data.strIngredient8 || null,
            strIngredient9: data.strIngredient9 || null,
            strIngredient10: data.strIngredient10 || null,
            strIngredient11: data.strIngredient11 || null,
            strIngredient12: data.strIngredient12 || null,
            strIngredient13: data.strIngredient13 || null,
            strIngredient14: data.strIngredient14 || null,
            strIngredient15: data.strIngredient15 || null,
            strIngredient16: data.strIngredient16 || null,
            strIngredient17: data.strIngredient17 || null,
            strIngredient18: data.strIngredient18 || null,
            strIngredient19: data.strIngredient19 || null,
            strIngredient20: data.strIngredient20 || null,
            strMeasure1: data.strMeasure1 || null,
            strMeasure2: data.strMeasure2 || null,
            strMeasure3: data.strMeasure3 || null,
            strMeasure4: data.strMeasure4 || null,
            strMeasure5: data.strMeasure5 || null,
            strMeasure6: data.strMeasure6 || null,
            strMeasure7: data.strMeasure7 || null,
            strMeasure8: data.strMeasure8 || null,
            strMeasure9: data.strMeasure9 || null,
            strMeasure10: data.strMeasure10 || null,
            strMeasure11: data.strMeasure11 || null,
            strMeasure12: data.strMeasure12 || null,
            strMeasure13: data.strMeasure13 || null,
            strMeasure14: data.strMeasure14 || null,
            strMeasure15: data.strMeasure15 || null,
            strMeasure16: data.strMeasure16 || null,
            strMeasure17: data.strMeasure17 || null,
            strMeasure18: data.strMeasure18 || null,
            strMeasure19: data.strMeasure19 || null,
            strMeasure20: data.strMeasure20 || null,
            strSource: data.strSource || null,
            strImageSource: data.strImageSource || null,
            strCreativeCommonsConfirmed: data.strCreativeCommonsConfirmed || null,
            dateModified: data.dateModified || null
        };
      
        return meal;
    }
    


    static schema = {
        name: 'MealSaved',
        primaryKey: 'idMeal',
        properties: {
            idMeal: 'string',
            strMeal: 'string?',
            strDrinkAlternate: 'string?',
            strCategory: 'string?',
            strArea: 'string?',
            strInstructions: 'string?',
            strMealThumb: 'string?',
            strTags: 'string?',
            strYoutube: 'string?',
            strIngredient1: 'string?',
            strIngredient2: 'string?',
            strIngredient3: 'string?',
            strIngredient4: 'string?',
            strIngredient5: 'string?',
            strIngredient6: 'string?',
            strIngredient7: 'string?',
            strIngredient8: 'string?',
            strIngredient9: 'string?',
            strIngredient10: 'string?',
            strIngredient11: 'string?',
            strIngredient12: 'string?',
            strIngredient13: 'string?',
            strIngredient14: 'string?',
            strIngredient15: 'string?',
            strIngredient16: 'string?',
            strIngredient17: 'string?',
            strIngredient18: 'string?',
            strIngredient19: 'string?',
            strIngredient20: 'string?',
            strMeasure1: 'string?',
            strMeasure2: 'string?',
            strMeasure3: 'string?',
            strMeasure4: 'string?',
            strMeasure5: 'string?',
            strMeasure6: 'string?',
            strMeasure7: 'string?',
            strMeasure8: 'string?',
            strMeasure9: 'string?',
            strMeasure10: 'string?',
            strMeasure11: 'string?',
            strMeasure12: 'string?',
            strMeasure13: 'string?',
            strMeasure14: 'string?',
            strMeasure15: 'string?',
            strMeasure16: 'string?',
            strMeasure17: 'string?',
            strMeasure18: 'string?',
            strMeasure19: 'string?',
            strMeasure20: 'string?',
            strSource: 'string?',
            strImageSource: 'string?',
            strCreativeCommonsConfirmed: 'string?',
            dateModified: 'string?'
        }
    };
}



export default MealSaved