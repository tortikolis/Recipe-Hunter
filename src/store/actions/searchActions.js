import {
  SHOW_SEARCH_FORM,
  CHOOSE_DIET,
  SELECT_INGREDIENT,
  DESELECT_INGREDIENT,
  SET_MIN_CALORIES,
  SET_MAX_CALORIES
} from "./types";

export const showSearchForm = () => {
  return {
    type: SHOW_SEARCH_FORM,
    payload: true
  };
};

export const hideSearchForm = () => {
  return {
    type: SHOW_SEARCH_FORM,
    payload: false
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
    type: SELECT_INGREDIENT,
    ingredient
  };
};

export const removeIngredient = ingredient => {
  return {
    type: DESELECT_INGREDIENT,
    ingredient
  };
};

export const setMinCalories = calories => {
  return {
    type: SET_MIN_CALORIES,
    calories
  };
};

export const setMaxCalories = calories => {
  return {
    type: SET_MAX_CALORIES,
    calories
  };
};
