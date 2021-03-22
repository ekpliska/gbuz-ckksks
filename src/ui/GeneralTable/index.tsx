import React from 'react';
import clsn from 'classnames';
import { Table } from 'antd';
import { columns, dataTable, GeneralTableProps } from './types';
import sts from './styles.module.scss';

const GeneralTable: React.FC<GeneralTableProps> = ({
  classNameTableWrapper,
}): React.ReactElement => {
  return (
    <div className={clsn(sts.generalTableWrapper, classNameTableWrapper)}>
      <Table columns={columns} dataSource={dataTable} tableLayout='auto' pagination={{ pageSize: 1 }} />
    </div>
  );
};

export default GeneralTable;
