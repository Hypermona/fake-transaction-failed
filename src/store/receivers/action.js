export const GET_RECEIVER = "GET_RECEIVER";
export const ADD_RECEIVER = "ADD_RECEIVER";
export const REMOVE_RECEIVER = "REMOVE_RECEIVER";
export const SET_PAYMENT = "SET_PAYMENT";

export const addReceiver = (details) => ({
  type: ADD_RECEIVER,
  payload: { ...details },
});
export const removeReceiver = (upi) => ({
  type: REMOVE_RECEIVER,
  payload: upi,
});

export const setPayment = (upi, amount, note) => ({
  type: SET_PAYMENT,
  payload: { upi, amount, note },
});
