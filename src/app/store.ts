import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomePageReducer from '../screens/homePage/slice';
import reduxLogger from 'redux-logger';
import ProductsPageReducer from '../screens/watchPage/slice';
import OrdersPageReducer from '../screens/ordersPage/slice';

export const store = configureStore({
  middleware: (getDefaultMiddlware) =>
    //@ts-ignore
    getDefaultMiddlware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    productsPage: ProductsPageReducer,
    ordersPage: OrdersPageReducer,
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
