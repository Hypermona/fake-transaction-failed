import { GET_USER, ADD_USER, SET_PAY } from "./action";

const initalState = {};

export const userReducer = (state = initalState, action) => {
  if (action.type === ADD_USER) {
    return { ...state, ...action.payload };
  }
  if (action.type === SET_PAY) {
    return { ...state, pay: action.payload };
  }
  return state;
};
