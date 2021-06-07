import { useDispatch } from 'react-redux';
import {
  TablePaginationConfig,
  Key,
  SorterResult,
} from 'antd/lib/table/interface';
import { setOrderValue, setCurrentPage } from 'store/ducks/table/tableSlice';
import { OrderRequest } from 'models/api/filters';
import { TableRecordTypes } from 'store/ducks/table/state';

interface UseChangeTableProps {
  handleChange: (
    pagination: TablePaginationConfig,
    filters: Record<string, (Key | boolean)[] | null>,
    sorter: SorterResult<TableRecordTypes> | SorterResult<TableRecordTypes>[]
  ) => void;
};

export const useChangeTable = (): UseChangeTableProps => {
  const dispatch = useDispatch();

  const handleChange = (
    pagination: TablePaginationConfig,
    _filters: Record<string, (Key | boolean)[] | null>,
    sorter: SorterResult<TableRecordTypes> | SorterResult<TableRecordTypes>[],
  ) => {
    const { field, order } = sorter as OrderRequest;
    const { current } = pagination;
    dispatch(setOrderValue(order ? { field, order } : null));
    if (current) {
      dispatch(setCurrentPage(current));
    }
  };

  return { handleChange };
};
