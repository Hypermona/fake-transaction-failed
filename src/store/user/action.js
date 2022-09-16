export const GET_USER = "GET_USER";
export const ADD_USER = "ADD_USER";

export const getUser = (details) => ({
  type: GET_USER,
  payload: { ...details },
});
