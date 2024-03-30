const BASE_URL = "www.themealdb.com/api/json/v1/1"

export const SEARCH_MEAL_BY_NAME = (name : string) => `${BASE_URL}/search.php?s=${name}`

export const LOOKUP_FULL_MEAL_DEATILS = (id : number) => `${BASE_URL}/lookup.php?s=${id}`

export const ALL_CATEGORY = `${BASE_URL}/categories.php`

export const FILTER_BY_AREA = (name : string) =>`${BASE_URL}/filter.php?a=${name}`

export const FILTER_BY_CATEGORY = (name : string) => `${BASE_URL}/filter.php?c=${name}`

export const ALL_AREA = `${BASE_URL}/list.php?a=list`