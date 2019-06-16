import {
  SET_RECEPIES,
  SET_RECEPIES_ERR,
  SET_LOADING,
  CLEAR_RECEPIES_ERR
} from "./types";
import getRecepies from "../../services/recepies/getRecepies";

const setRecepies = recepies => {
  return {
    type: SET_RECEPIES,
    recepies
  };
};

const setRecepiesErr = err => {
  return {
    type: SET_RECEPIES_ERR,
    err
  };
};

const clearRecepiesErr = () => {
  return {
    type: CLEAR_RECEPIES_ERR
  };
};

const setLoading = isLoading => {
  return {
    type: SET_LOADING,
    isLoading
  };
};

export const fetchRecepiesAction = (diet, ingredients, minCal, maxCal) => {
  return dispatch => {
    dispatch(setLoading(true));
    getRecepies(diet, ingredients, minCal, maxCal)
      .then(recepies => {
        dispatch(clearRecepiesErr());
        dispatch(setLoading(false));
        dispatch(setRecepies(recepies));
      })
      .catch(error => {
        dispatch(setLoading(false));
        dispatch(setRecepiesErr(error));
      });
  };
};
