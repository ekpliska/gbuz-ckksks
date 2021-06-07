export interface SearchRequest {
  name?: string;
  fct_number?: string;
  inv_number?: string;
  crt_number?: string;
  status?: boolean;
};

export interface OrderRequest {
  field: string;
  order: 'ASC' | 'DESC' | null,
};
