export const GET_USER = "GET_USER";
export const ADD_USER = "ADD_USER";

export const addUser = (details) => ({
  type: ADD_USER,
  payload: { ...details },
});
