const ADD_ERROR = "ADD_ERROR";
const REMOVE_ERROR = "REMOVE_ERROR";

export const addError = (id) => ({
  type: ADD_ERROR,
  payload: id,
});
export const removeError = () => ({
  type: REMOVE_ERROR,
});

const initialState = {};
export const errorReducer = (state = initialState, action) => {
  if (action.type === ADD_ERROR) {
    return { ...state, error_id: action.payload };
  }
  if (action.type === REMOVE_ERROR) {
    return { ...state, error_id: "" };
  }
  return state;
};
