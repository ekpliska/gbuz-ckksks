import { PaginationProps } from 'antd/es/pagination';
import { ColumnsType } from 'antd/lib/table';
import { PaginationModel } from 'models/pagination';

export interface GeneralTableProps<T> {
  columns: ColumnsType<T>;
  dataSourse?: T[];
  loading?: boolean;
  pagination?: PaginationModel,
  // rowSelection?: object[];
  // onRow?: (record: object, index?: number) => string;
  // pagination?: false | TablePaginationConfig;
  classNameTableWrapper?: string;
};

export const initialPaginationConfig: PaginationModel = {
  page_number: 0,
  page_size: 14,
  total_count: 0,
};

export const setPaginationConfig = (options: PaginationModel): PaginationProps => {
  return {
    total: options.total_count,
    current: options.page_number,
    pageSize: options.page_size,
    showSizeChanger: false,
    // hideOnSinglePage: true,
    // onChange: (page: number): void => {},
    showTotal: (): React.ReactNode => {
      return `Количество записей: ${options.total_count} `;
    },
  };
};