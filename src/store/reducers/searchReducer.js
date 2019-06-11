import { SHOW_SEARCH_FORM, CHOOSE_DIET } from "../actions/types";

const initState = {
  isSearchFormActive: false,
  selectedDiet: ""
};

export default (state = initState, action) => {
  switch (action.type) {
    case SHOW_SEARCH_FORM:
      return {
        ...state,
        isSearchFormActive: action.payload
      };
    case CHOOSE_DIET:
      return {
        ...state,
        selectedDiet: action.diet
      };
    default:
      return state;
  }
};
