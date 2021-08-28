import { RootState } from 'store/rootReducer';
import { FieldSearch } from './state';

export const selectorSearchFields = (state: RootState): FieldSearch['fields'] | undefined => {
  const entity = state.table.entity;
  return entity ? state.search.forms.find((f) => f.entity === entity)?.fields : null;
};
