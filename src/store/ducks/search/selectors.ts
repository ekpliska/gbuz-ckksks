import { RootState } from 'store/rootReducer';
import { SearchState } from './state';

export const selectorSearchFields = (state: RootState): SearchState['fields'] =>
  state.search.fields;

export const selectorSearchEntity = (state: RootState): SearchState['entity'] =>
  state.search.entity;
