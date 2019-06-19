import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import recipesReducer from "./recepiesReducer";
import UIReducer from "./UIReducer";

export default combineReducers({
  UI: UIReducer,
  search: searchReducer,
  recipes: recipesReducer
});
