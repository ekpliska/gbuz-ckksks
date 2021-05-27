import { LoadingState } from 'store/loadingState';
import { TableSectionEntity } from '../table/state';

export interface Field {
  [name: string]: string | number | { id: number, name: string } | null;
};

export interface SearchState {
  entity: TableSectionEntity | null;
  fields: Field | null;
  statusLoading: LoadingState;
  error: string[];
};
