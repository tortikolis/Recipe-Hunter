import {
  SET_RECEPIES,
  SET_RECEPIES_ERR,
  SET_LOADING,
  CLEAR_RECEPIES_ERR
} from "../actions/types";

const initialState = {
  recepieResults: null,
  recepieErr: "",
  isLoading: false
};

const recepieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECEPIES:
      return {
        ...state,
        recepieResults: action.recepies
      };
    case SET_RECEPIES_ERR:
      return {
        ...state,
        recepieErr: `Ooops something went wrong... ${action.err}`
      };
    case CLEAR_RECEPIES_ERR:
      return {
        ...state,
        recepieErr: ""
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

export default recepieReducer;
