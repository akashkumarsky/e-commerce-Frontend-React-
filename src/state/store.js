import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import authReducer from './Auth/Reducer';
import costmerProductsReducer from './Product/Reducer';
import cartReducer from './Cart/Reducer';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: costmerProductsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});