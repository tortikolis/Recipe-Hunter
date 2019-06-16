import {
  SET_RECIPES,
  SET_RECIPES_ERR,
  SET_LOADING,
  CLEAR_RECIPES_ERR
} from "../actions/types";

const initialState = {
  recipeResults: null,
  recipeErr: "",
  isLoading: false
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipeResults: action.recipes
      };
    case SET_RECIPES_ERR:
      return {
        ...state,
        recipeErr: `Ooops something went wrong... ${action.err}`
      };
    case CLEAR_RECIPES_ERR:
      return {
        ...state,
        recipeErr: ""
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    default:
      return state;
  }
};

export default recipeReducer;
