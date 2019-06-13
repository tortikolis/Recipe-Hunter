import { SET_RECEPIES } from "./types";
import getRecepies from "../../services/recepies/getRecepies";

export const fetchRecepiesAction = (diet, ingredients, minCal, maxCal) => {
  return dispatch => {
    console.log("fetching data");
    getRecepies(diet, ingredients, minCal, maxCal).then(recepies => {
      dispatch({
        type: SET_RECEPIES,
        recepies
      });
    });
  };
};
