import { Counter_Increase, Counter_Decrease } from "../types/types";

export const increase = () => {
  return {
    type: Counter_Increase,
  };
};

export const decrease = () => {
  return {
    type: Counter_Decrease,
  };
};
