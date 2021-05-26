import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import { Switch } from 'ui/Inputs';
import Tooltip from 'ui/Tooltip';
import { VerificationInfoIcon } from 'ui/IconsSvg';
import { DocumentModel } from 'models/dictionaries';
import { TableRecordTypes } from 'store/ducks/table/state';
import { DATE_FORMAT_UI } from 'utils/constants';
import { renderDateFormat } from 'utils/helpers';
import sts from './styles.module.scss';

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
    render: (value): string =>
      renderDateFormat(value, DATE_FORMAT_UI.ONLY_YEAR),
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
    render: (value: DocumentModel): React.ReactNode => {
      const { name, series, number, date_from, date_to } = value;
      return (
        <Tooltip
          title={
            <div className={sts.tooltip}>
              <span>{name.name || '-'}</span>
              <span>
                {String(series).concat(' ').concat(String(number)) || '-'}
              </span>
              <span>
                {renderDateFormat(date_from, DATE_FORMAT_UI.FULL_DATE)} -{' '}
                {renderDateFormat(date_to, DATE_FORMAT_UI.FULL_DATE)}
              </span>
            </div>
          }
        >
          <div className={sts.documentDataIcon}>
            <VerificationInfoIcon width='11' height='11' fill='#FFF' />
          </div>
        </Tooltip>
      );
    },
  },
  {
    key: 'status_verification',
    title: 'Статус поверки',
    dataIndex: 'status_verification',
    width: '5%',
    render: (value: boolean, _record: TableRecordTypes, index: number): React.ReactNode => {
      return <Switch name={`status_${index}`} checked={value} />;
    },
  },
];

export { MI_tableProps };
