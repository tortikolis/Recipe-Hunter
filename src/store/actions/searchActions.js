import {
  SHOW_SEARCH_FORM,
  CHOOSE_DIET,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT
} from "./types";

export const showSearchForm = () => {
  return {
    type: SHOW_SEARCH_FORM,
    payload: true
  };
};

export const chooseDiet = diet => {
  return {
    type: CHOOSE_DIET,
    diet
  };
};

export const addIngredient = ingredient => {
  return {
    type: ADD_INGREDIENT,
    ingredient
  };
};

export const removeIngredient = ingredient => {
  return {
    type: REMOVE_INGREDIENT,
    ingredient
  };
};
