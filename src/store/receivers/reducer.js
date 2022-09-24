import { GET_RECEIVER, ADD_RECEIVER, SET_PAYMENT } from "./action";
import produce from "immer";

const initalState = [];

export const receiverReducer = (state = initalState, { type, payload }) => {
  if (type === ADD_RECEIVER) {
    return [...state, { ...payload }];
  }
  if (type === SET_PAYMENT) {
    return produce(state, (draft) => {
      let receiver = draft.find((r) => r.upi === payload.upi);
      if (receiver) {
        receiver["amount"] = payload.amount;
        receiver["note"] = payload.note;
      }
    });
  }
  return state;
};
