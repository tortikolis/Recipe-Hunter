import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import recipesReducer from "./recepiesReducer";

export default combineReducers({
  search: searchReducer,
  recipes: recipesReducer
});
