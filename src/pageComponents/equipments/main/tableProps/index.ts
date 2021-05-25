import moment from 'moment';
import { ColumnsType } from 'antd/lib/table';
import { TableRecordTypes } from 'store/ducks/table/state';
import { DATE_FORMAT_UI } from 'utils/constants';

const MI_tableProps: ColumnsType<TableRecordTypes> = [
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id',
    width: '5%',
    render: (value) => `СИ-${value}`,
  },
  {
    key: 'name',
    title: 'Наименование средства измерения',
    dataIndex: 'name',
    width: '15%',
  },
  {
    key: 'factory_number',
    title: 'Заводской номер',
    dataIndex: 'factory_number',
    width: '7%',
  },
  {
    key: 'year_issue',
    title: 'Год выпуска',
    dataIndex: 'year_issue',
    width: '5%',
    render: (value) => value ? moment(value).format(DATE_FORMAT_UI.ONLY_YEAR) : '-',
  },
  {
    key: 'factory_number',
    title: 'Инвентарный номер',
    dataIndex: 'factory_number',
    width: '10%',
  },
  {
    key: 'document_data',
    title: 'Поверка',
    dataIndex: 'document_data',
    width: '5%',
  },
  {
    key: 'status_verification',
    title: 'Статус поверки',
    dataIndex: 'status_verification',
    width: '5%',
  },
];

export { MI_tableProps };
