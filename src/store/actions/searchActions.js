import { SHOW_SEARCH_FORM, CHOOSE_DIET } from "./types";

export const showSearchForm = () => {
  return {
    type: SHOW_SEARCH_FORM,
    payload: true
  };
};

export const chooseDiet = diet => {
  return {
    type: CHOOSE_DIET,
    diet
  };
};
