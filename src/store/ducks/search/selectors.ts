import { RootState } from 'store/rootReducer';
import { FieldSearchProps } from './state';

export const selectorSearchFields = (state: RootState): FieldSearchProps | undefined => {
  const entity = state.table.entity;
  return entity ? state.search.fields.find((f) => f.entity === entity) : {} as FieldSearchProps;
};