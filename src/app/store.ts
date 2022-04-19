import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { configureToolsSlice } from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    configureTools: configureToolsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
