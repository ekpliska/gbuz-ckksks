import { PaginationProps } from 'antd/es/pagination';
import {
  TablePaginationConfig,
  Key,
  SorterResult,
} from 'antd/lib/table/interface';
import { ColumnsType } from 'antd/lib/table';
import { PaginationModel } from 'models/pagination';

export interface GeneralTableProps<T> {
  columns: ColumnsType<T>;
  dataSourse?: T[];
  loading?: boolean;
  pagination?: PaginationModel;
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, (Key | boolean)[] | null>,
    sorter: SorterResult<T> | SorterResult<T>[],
  ) => void;
  // rowSelection?: object[];
  // onRow?: (record: object, index?: number) => string;
  // pagination?: false | TablePaginationConfig;
  classNameTableWrapper?: string;
}

export const initialPaginationConfig: PaginationModel = {
  page_number: 0,
  page_size: 14,
  total_count: 0,
};

export const setPaginationConfig = (
  options: PaginationModel,
): PaginationProps => {
  return {
    total: options.total_count,
    current: options.page_number || 1,
    pageSize: options.page_size,
    showSizeChanger: false,
    // hideOnSinglePage: true,
    // onChange: (page: number): void => {},
    showTotal: (): React.ReactNode => {
      return `Количество записей: ${options.total_count} `;
    },
  };
};
