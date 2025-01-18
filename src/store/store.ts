import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';

// CombineReducers into rootReducer if adding more reducers in the future
const rootReducer = {
  product: productReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
