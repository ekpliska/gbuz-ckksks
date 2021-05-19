import { combineReducers } from 'redux';
import authSliceReducer from './ducks/auth/authSlice';

export const rootReducer = combineReducers({
  auth: authSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;