import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./slices/portfolioSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    // Add other reducers here as needed
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;
// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
