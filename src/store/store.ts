import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import { rootReducer, RootState } from './rootReducer';

const middleware = [
  ...getDefaultMiddleware({
    thunk: true,
    immutableCheck: false,
    serializableCheck: false,
  }), 
];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;