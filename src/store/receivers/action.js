export const GET_RECEIVER = "GET_RECEIVER";
export const ADD_RECEIVER = "ADD_RECEIVER";

export const addReceiver = (details) => ({
  type: ADD_RECEIVER,
  payload: { ...details },
});
