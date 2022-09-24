export const GET_USER = "GET_USER";
export const ADD_USER = "ADD_USER";
export const SET_PAY = "SET_PAY";

export const addUser = (details) => ({
  type: ADD_USER,
  payload: { ...details },
});

export const setPay = (name) => ({
  type: SET_PAY,
  payload: name,
});
