import React from 'react';
import clsn from 'classnames';
import { Table } from 'antd';
import { GeneralTableProps } from './types';
import sts from './styles.module.scss';
import { TableRecordTypes } from 'store/ducks/table/state';

const GeneralTable: React.FC<GeneralTableProps<TableRecordTypes>> = ({
  columns,
  dataSourse,
  loading,
  classNameTableWrapper,
}): React.ReactElement => {
  return (
    <div className={clsn(sts.generalTableWrapper, classNameTableWrapper)}>
      <Table
        columns={columns}
        dataSource={dataSourse}
        tableLayout="auto"
        loading={loading}
        pagination={{ pageSize: 1 }}
      />
    </div>
  );
};

export default GeneralTable;
