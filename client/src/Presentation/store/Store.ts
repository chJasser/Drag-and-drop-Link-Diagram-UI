import { configureStore } from "@reduxjs/toolkit";
import { pageSlice } from "../slice/PageSlice";

const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
