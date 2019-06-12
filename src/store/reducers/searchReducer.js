import {
  SHOW_SEARCH_FORM,
  CHOOSE_DIET,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_MIN_CALORIES,
  SET_MAX_CALORIES
} from "../actions/types";

const initState = {
  isSearchFormActive: false,
  selectedDiet: "",
  selectedIngredients: [],
  minCalories: "",
  maxCalories: ""
};

export default (state = initState, action) => {
  switch (action.type) {
    case SHOW_SEARCH_FORM:
      return {
        ...state,
        isSearchFormActive: action.payload
      };
    case CHOOSE_DIET:
      return {
        ...state,
        selectedDiet: action.diet
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, action.ingredient]
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        selectedIngredients: state.selectedIngredients.filter(
          ingredient => ingredient !== action.ingredient
        )
      };
    case SET_MIN_CALORIES:
      return {
        ...state,
        minCalories: action.calories
      };
    case SET_MAX_CALORIES:
      return {
        ...state,
        maxCalories: action.calories
      };
    default:
      return state;
  }
};
