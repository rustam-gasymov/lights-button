import { createSlice } from "@reduxjs/toolkit";

export const incrementSlice = createSlice({
  name: "increment",
  initialState: {
    value: 0,
  },
  reducers: {
    setIncrementValue: (state) => {
      console.log("setIncrementValue new state");
      state.value++;
    },
  },
});

export const { setIncrementValue } = incrementSlice.actions;

export default incrementSlice.reducer;
