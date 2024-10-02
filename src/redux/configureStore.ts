import { configureStore } from "@reduxjs/toolkit";
import votesReducer from "./votesSlice"; 
import tabReducer from "./tabSlice";

const store = configureStore({
  reducer: {
    tab: tabReducer,
    votes: votesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
