import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import recepiesReducer from "./recepiesReducer";

export default combineReducers({
  search: searchReducer,
  recepies: recepiesReducer
});
