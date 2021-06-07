import React from 'react';
import clsn from 'classnames';
import { ConfigProvider, Table } from 'antd';
import Spinner from 'ui/Spinner';
import EmptyLabel from 'ui/EmptyLabel';
import { EmptyLabelTypes } from 'ui/EmptyLabel/types';
import { TableRecordTypes } from 'store/ducks/table/state';
import sts from './styles.module.scss';
import {
  GeneralTableProps,
  initialPaginationConfig,
  setPaginationConfig,
} from './types';

const GeneralTable: React.FC<GeneralTableProps<TableRecordTypes>> = ({
  columns,
  dataSourse,
  loading,
  pagination = initialPaginationConfig,
  onChange,
  classNameTableWrapper,
}): React.ReactElement => {

  return (
    <div className={clsn(sts.generalTableWrapper, classNameTableWrapper)}>
      <ConfigProvider
        renderEmpty={() => (
          <EmptyLabel
            textLabel="Нет данных для отображения"
            type={EmptyLabelTypes.WITH_IMG}
          />
        )}
      >
        <Table
          rowKey="id"
          tableLayout="auto"
          columns={columns}
          dataSource={dataSourse}
          loading={{
            spinning: !loading,
            indicator: <Spinner />,
          }}
          pagination={setPaginationConfig(pagination)}
          onChange={onChange}
        />
      </ConfigProvider>
    </div>
  );
};

export default GeneralTable;
