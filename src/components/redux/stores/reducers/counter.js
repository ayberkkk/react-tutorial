import { Counter_Increase, Counter_Decrease } from "../types/types";

const default_state = 0;

const reducer = (state = default_state, action) => {
  switch (action.type) {
    case Counter_Increase:
      return state + 1;
    case Counter_Decrease:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
