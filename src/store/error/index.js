const ADD_ERROR = "ADD_ERROR";
const REMOVE_ERROR = "REMOVE_ERROR";

export const addError = (error) => ({
  type: ADD_ERROR,
  payload: error,
});

export const removeError = () => ({
  type: REMOVE_ERROR,
});

const initialState = {};
export const errorReducer = (state = initialState, action) => {
  if (action.type === ADD_ERROR) {
    return { ...state, ...action.payload };
  }

  return state;
};
