import fruitImg from "../../assets/images/apple.png";
import meatImg from "../../assets/images/meat.png";
import milkImg from "../../assets/images/milk.png";
import vegetablesImg from "../../assets/images/carrot.png";

import {
  SHOW_SEARCH_FORM,
  CHOOSE_DIET,
  SELECT_INGREDIENT,
  DESELECT_INGREDIENT,
  SET_MIN_CALORIES,
  SET_MAX_CALORIES
} from "../actions/types";

import findAndSelectIngredient from "../../utils/findAndSelectIngredient";

const initState = {
  isSearchFormActive: false,
  selectedDiet: "",
  selectedIngredients: [],
  minCalories: "",
  maxCalories: "",
  ingredients: [
    {
      category: "vegetables",
      img: vegetablesImg,
      ingredients: [
        { name: "artichoke", selected: false },
        { name: "asparagus", selected: false },
        { name: "basil", selected: false },
        { name: "bean", selected: false },
        { name: "broccoli", selected: false },
        { name: "carrot", selected: false },
        { name: "cabbage", selected: false },
        { name: "cauliflower", selected: false },
        { name: "pepper", selected: false },
        { name: "celery", selected: false },
        { name: "corn", selected: false },
        { name: "eggplant", selected: false },
        { name: "garlic", selected: false },
        { name: "ginger", selected: false },
        { name: "kale", selected: false },
        { name: "leek", selected: false },
        { name: "legume", selected: false },
        { name: "lettuce", selected: false },
        { name: "mushroom", selected: false },
        { name: "onion", selected: false },
        { name: "pea", selected: false },
        { name: "pumpkin", selected: false },
        { name: "spinach", selected: false }
      ]
    },
    {
      category: "fruit",
      img: fruitImg,
      ingredients: [
        { name: "apple", selected: false },
        { name: "appricot", selected: false },
        { name: "avocado", selected: false },
        { name: "banana", selected: false },
        { name: "blueberrie", selected: false },
        { name: "cherrie", selected: false },
        { name: "cucamber", selected: false },
        { name: "plum", selected: false },
        { name: "date", selected: false },
        { name: "lemon", selected: false },
        { name: "mango", selected: false },
        { name: "orange", selected: false },
        { name: "tomato", selected: false },
        { name: "nectarine", selected: false },
        { name: "pineapple", selected: false },
        { name: "raspberries", selected: false },
        { name: "strawberries", selected: false },
        { name: "watermelon", selected: false }
      ]
    },
    {
      category: "meat",
      img: meatImg,
      ingredients: [
        { name: "pork", selected: false },
        { name: "beef", selected: false },
        { name: "fish", selected: false },
        { name: "chicken", selected: false },
        { name: "duck", selected: false },
        { name: "lamb", selected: false },
        { name: "turkey", selected: false },
        { name: "veal", selected: false }
      ]
    },
    {
      category: "dairy",
      img: milkImg,
      ingredients: [
        { name: "butter", selected: false },
        { name: "yogurt", selected: false },
        { name: "milk", selected: false },
        { name: "cheese", selected: false },
        { name: "ice cream", selected: false },
        { name: "kefir", selected: false },
        { name: "sour cream", selected: false }
      ]
    }
  ]
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
    case SELECT_INGREDIENT:
      return {
        ...state,
        ingredients: findAndSelectIngredient(
          state.ingredients,
          action.ingredient,
          true
        )
      };
    case DESELECT_INGREDIENT:
      return {
        ...state,
        ingredients: findAndSelectIngredient(
          state.ingredients,
          action.ingredient,
          false
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
