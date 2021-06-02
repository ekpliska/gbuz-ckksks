import { TableRecordTypes } from 'store/ducks/table/state';
import { PaginationModel } from 'models/pagination';
import { OrderRequest, SearchRequest } from './filters';

export interface EquipmentsRequest {
  search?: SearchRequest | null;
  order?: OrderRequest | null;
  page?: PaginationModel | null;
};

export interface EquipmentsResponse {
  items: TableRecordTypes[] | undefined;
  page_number: number;
  page_size: number;
  total_count: number;
};

export const initialEquipmentsRequest: EquipmentsRequest = {
  search: null,
  order: null,
  page: null,
};