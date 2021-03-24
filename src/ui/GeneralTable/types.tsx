import { ColumnsType, ColumnProps, TablePaginationConfig } from 'antd/lib/table';

interface IVerificationData {
  certificate: string;
  dateFrom: string;
  dateTo: string;
  status: boolean;
  isAnnually?: boolean;
};

interface IEquipment {
  key: string | number;
  id: string | number;
  nameEquipment: string;
  factoryNumber: string;
  yearOfIssue: string;
  inventoryNumber: string;
  verificationData: IVerificationData;
};

export const columns: ColumnsType<IEquipment> = [
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id',
    width: '5%',
  },
  {
    key: 'nameEquipment',
    title: 'Наименование оборудования',
    dataIndex: 'nameEquipment',
    width: '15%',
  },
  {
    key: 'factoryNumber',
    title: 'Заводской номер',
    dataIndex: 'factoryNumber',
    width: '7%',
  },
  {
    key: 'yearOfIssue',
    title: 'Год выпуска',
    dataIndex: 'yearOfIssue',
    width: '5%',
  },
  {
    key: 'inventoryNumber',
    title: 'Инвентарный номер',
    dataIndex: 'inventoryNumber',
    width: '10%',
  },
  {
    key: 'verification',
    title: 'Поверка',
    dataIndex: 'verification',
    width: '5%',
  },
  {
    key: 'verificationStatus',
    title: 'Статус поверки',
    dataIndex: 'verificationStatus',
    width: '5%',
  },
];

export const dataTable: IEquipment[] = [
  {
    key: 1,
    id: 'СИ459-45',
    nameEquipment: 'Анализатор жидкости “Флюорат-01-3М',
    factoryNumber: '2355',
    yearOfIssue: '2001',
    inventoryNumber: '013300017',
    verificationData: {
      certificate: '661/109',
      dateFrom: '30.08.2019',
      dateTo: '29.08.2020',
      status: false,
    },
  },
  {
    key: 2,
    id: 'СИ459-46',
    nameEquipment: 'Анализатор жидкости кондуктометрический HI98308',
    factoryNumber: '16515',
    yearOfIssue: '2015',
    inventoryNumber: '21013400050',
    verificationData: {
      certificate: '001/732',
      dateFrom: '27.05.2019',
      dateTo: '27.05.2020',
      status: true,
    },
  },
];

export interface GeneralTableProps {
  columns?: ColumnProps<ColumnsType[]>;
  // eslint-disable-next-line
  dataSourse?: object[];
  // eslint-disable-next-line
  rowSelection?: object[];
  // eslint-disable-next-line
  onRow?: (record: object, index?: number) => string;
  pagination?: false | TablePaginationConfig;
  classNameTableWrapper?: string;
};