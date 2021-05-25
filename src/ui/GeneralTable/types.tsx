import { ColumnsType } from 'antd/lib/table';

export interface GeneralTableProps<T> {
  columns: ColumnsType<T>;
  dataSourse?: T[];
  loading?: boolean;
  // rowSelection?: object[];
  // onRow?: (record: object, index?: number) => string;
  // pagination?: false | TablePaginationConfig;
  classNameTableWrapper?: string;
};