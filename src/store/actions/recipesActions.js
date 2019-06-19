import {
  SET_RECIPES,
  SET_RECIPES_ERR,
  SET_LOADING,
  CLEAR_RECIPES_ERR,
  SHOW_SEARCH_FORM
} from "./types";
import getRecipes from "../../services/recipes/getRecipes";

const setRecipes = recipes => {
  return {
    type: SET_RECIPES,
    recipes
  };
};

const setRecipesErr = err => {
  return {
    type: SET_RECIPES_ERR,
    err
  };
};

const clearRecipesErr = () => {
  return {
    type: CLEAR_RECIPES_ERR
  };
};

const setLoading = isLoading => {
  return {
    type: SET_LOADING,
    isLoading
  };
};

const hideSearchForm = () => {
  return {
    type: SHOW_SEARCH_FORM,
    payload: false
  };
};

export const fetchRecipesAction = (diet, ingredients, minCal, maxCal) => {
  return dispatch => {
    dispatch(hideSearchForm());
    dispatch(setLoading(true));
    getRecipes(diet, ingredients, minCal, maxCal)
      .then(recipes => {
        dispatch(clearRecipesErr());
        dispatch(setLoading(false));
        dispatch(setRecipes(recipes));
      })
      .catch(error => {
        dispatch(setLoading(false));
        dispatch(setRecipesErr(error));
      });
  };
};
