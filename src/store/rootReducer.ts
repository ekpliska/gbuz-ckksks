import { combineReducers } from 'redux';
import authSliceReducer from './ducks/auth/authSlice';
import tableSliceReducer from './ducks/table/tableSlice';
import dictionariesSliceReducer from './ducks/dictionaries/dictionariesSlice';

export const rootReducer = combineReducers({
  auth: authSliceReducer,
  table: tableSliceReducer,
  dictionaries: dictionariesSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;