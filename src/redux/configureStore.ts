import { configureStore } from "@reduxjs/toolkit";
import votesReducer from "./votesSlice"; 

const store = configureStore({
  reducer: {

    votes: votesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
