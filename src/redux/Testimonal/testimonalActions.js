import {
  FETCH_PAGEONE_REQUEST,
  FETCH_PAGEONE_SUCCESS,
  FETCH_PAGEONE_FAILURE,
} from "./actionTypes";
import { getData } from "../../Api/getData";

export const getPageOneData = () => {
  return (dispatch) => {
    dispatch(fetchPageoneRequest());
    getData("/page1.json") /* get data*/
      .then((res) => {
        dispatch(fetchPageoneSuccess(res.data.slider));
      })
      .catch((error) => {
        dispatch(fetchPageoneFailure(error.message));
      });
  };
};

export const fetchPageoneRequest = () => {
  return {
    type: FETCH_PAGEONE_REQUEST,
  };
};

export const fetchPageoneSuccess = (data) => {
  return {
    type: FETCH_PAGEONE_SUCCESS,
    payload: data,
  };
};

export const fetchPageoneFailure = (error) => {
  return {
    type: FETCH_PAGEONE_FAILURE,
    payload: error,
  };
};
