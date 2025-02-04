import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import authReducer from './Auth/Reducer';
import cartReducer from './Cart/Reducer';
import { orderReducer } from './Order/Reducer';
import customerProductReducer from './Product/Reducer';
import addressReducer from './Address/addressReducer';



export const store = configureStore({
  reducer: {
    auth: authReducer,
    customersProduct:customerProductReducer,
    cart: cartReducer,
    order:orderReducer,
    address: addressReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});