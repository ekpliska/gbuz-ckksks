import { combineReducers } from 'redux';
import authSliceReducer from './ducks/auth/authSlice';
import tableSliceReducer from './ducks/table/tableSlice';
import dictionariesSliceReducer from './ducks/dictionaries/dictionariesSlice';
import searchSliceReducer from './ducks/search/searchSlice';

export const rootReducer = combineReducers({
  auth: authSliceReducer,
  table: tableSliceReducer,
  dictionaries: dictionariesSliceReducer,
  search: searchSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;