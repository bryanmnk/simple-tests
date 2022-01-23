import { createSlice } from "@reduxjs/toolkit";
import { configuratorApi } from "../../Api/configurator/configuratorApi";

const initialState = {
  configurator: {},
  error: "",
};

export const configuratorSlice = createSlice({
  name: "configurator",
  initialState,
  reducers: {
    setConfigurator: (state, { payload }) => {
      state.configurator = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setConfigurator, setError } = configuratorSlice.actions;

export const getConfigurator = () => async (dispatch) => {
  try {
    const configurator = await configuratorApi.getConfigurator();

    dispatch(setConfigurator(configurator));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
