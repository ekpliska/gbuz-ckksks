import { combineReducers } from 'redux';
import authSliceReducer from './ducks/auth/authSlice';
import dictionariesSliceReducer from './ducks/dictionaries/dictionariesSlice';

export const rootReducer = combineReducers({
  auth: authSliceReducer,
  dictionaries: dictionariesSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;