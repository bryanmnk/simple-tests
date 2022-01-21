import {
  FETCH_PAGEONE_FAILURE,
  FETCH_PAGEONE_REQUEST,
  FETCH_PAGEONE_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  error: "",
  data: {},
};

const testimonalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGEONE_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PAGEONE_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case FETCH_PAGEONE_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default testimonalReducer;
