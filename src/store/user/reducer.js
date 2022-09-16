import { GET_USER } from "./action";

const initalState = {};

export const userReducer = (state = initalState, action) => {
  if (action.type === GET_USER) {
    return { state, ...action.payload };
  }
  return state;
};
