import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomePageReducer from '../screens/homePage/slice';
import reduxLogger from 'redux-logger';
import OrdersPageReducer from '../screens/ordersPage/slice';
import JewelryPageReducer from '../screens/jewelryPage/slice';
import WatchPageReducer from '../screens/watchPage/slice';

export const store = configureStore({
  middleware: (getDefaultMiddlware) =>
    //@ts-ignore
    getDefaultMiddlware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    watchesPage: WatchPageReducer,
    jewelriesPage: JewelryPageReducer,
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
