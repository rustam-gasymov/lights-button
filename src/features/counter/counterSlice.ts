import { createSlice } from "@reduxjs/toolkit";

export const configureToolsSlice = createSlice({
  name: "configureTools",
  initialState: {
    isLoading: false,
    isModalVisible: false,
    value: 0,
  },
  reducers: {
    changeVisibilityOfConfigureForm: (state, { payload }) => {
      state.isModalVisible = payload;
    },
    setIncrementValue: (state) => {
      state.value = state.value - 1;
    },
  },
  extraReducers: {},
});

export const { changeVisibilityOfConfigureForm, setIncrementValue } = configureToolsSlice.actions;

export default configureToolsSlice.reducer;
