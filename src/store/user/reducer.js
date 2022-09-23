import { GET_USER, ADD_USER } from "./action";

const initalState = {};

export const userReducer = (state = initalState, action) => {
  if (action.type === ADD_USER) {
    return { ...state, ...action.payload };
  }
  return state;
};
