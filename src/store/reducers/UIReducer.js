import { SHRINK_PANEL } from "../actions/types";

const initState = {
  isPanelShrinked: false
};

const UIReducer = (state = initState, action) => {
  switch (action.type) {
    case SHRINK_PANEL:
      return {
        ...state,
        isPanelShrinked: true
      };
    default:
      return state;
  }
};

export default UIReducer;
