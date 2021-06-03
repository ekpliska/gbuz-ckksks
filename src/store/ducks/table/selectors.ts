import { LoadingState } from 'store/loadingState';
import { RootState } from 'store/rootReducer';
import { TableState } from './state';

export const selectorTableItems = (state: RootState): TableState['items'] =>
  state.table.items;

export const selectorTableLoadingStatus = (
  state: RootState,
): TableState['loadingStatus'] => state.table.loadingStatus;

export const selectorTableIsLoading = (state: RootState): boolean =>
  state.table.loadingStatus === LoadingState.LOADED ||
  state.table.loadingStatus === LoadingState.ERROR;

export const selectorTablePagination = (
  state: RootState,
): TableState['pagination'] => state.table.pagination;

export const selectorTableOrder = (state: RootState): TableState['order'] | undefined =>
  state.table.order;
