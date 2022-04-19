import { createSlice } from "@reduxjs/toolkit";

export const configureToolsSlice = createSlice({
  name: "configureTools",
  initialState: {
    value: 0,
  },
  reducers: {
    setIncrementValue: (state) => {
      console.log("increment");

      state.value = state.value - 1;
    },
  },
  extraReducers: {},
});

export const { setIncrementValue } = configureToolsSlice.actions;

export default configureToolsSlice.reducer;
