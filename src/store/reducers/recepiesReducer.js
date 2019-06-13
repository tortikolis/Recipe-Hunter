import { SET_RECEPIES } from "../actions/types";

const initialState = {
  recepieResults: null
};

const recepieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECEPIES:
      return {
        ...state,
        recepieResults: action.recepies
      };

    default:
      return state;
  }
};

export default recepieReducer;
