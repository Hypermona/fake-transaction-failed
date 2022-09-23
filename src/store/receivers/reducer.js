import { GET_RECEIVER, ADD_RECEIVER } from "./action";

const initalState = [];

export const receiverReducer = (state = initalState, { type, payload }) => {
  if (type === ADD_RECEIVER) {
    return [...state, { ...payload }];
  }
  return state;
};
