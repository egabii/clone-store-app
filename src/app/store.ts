import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/products.slice';


export const store = configureStore({
  reducer: {
    products: productsReducer
  },
  /* 
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  } 
  */
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;