import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import GeneralTable from 'ui/GeneralTable';

import PageHeading from 'components/PageHeading';
import ControlPanel from 'components/ControlPanel';
import { VerificationEquipmentItemProps } from 'components/VerificationEquipments/types';
import VerificationEquipments from 'components/VerificationEquipments';
import { SF_MeasuringInstruments } from 'components/Forms/Search';

import { fetchTableData } from 'store/ducks/table/thunks';
import {
  selectorTableIsLoading,
  selectorTableItems,
} from 'store/ducks/table/selectors';

import { MI_tableProps } from './tableProps';
import { PageMainProps } from './types';
import { EquipmentEntity } from 'models/equipments';

const tempData: VerificationEquipmentItemProps[] = [
  {
    id: 0,
    nameEquipment: 'Анализатор жидкости “Флюорат-01-3М”',
    dateVerification: '2021-03-17',
  },
  {
    id: 1,
    nameEquipment: 'Анализатор жидкости кондуктометрический HI98308',
    dateVerification: '2021-03-31',
  },
  {
    id: 2,
    nameEquipment: 'Вакуумметр “ВПЗ-УУ2”',
    dateVerification: '2021-03-10',
  },
];

const MeasuringInstruments: React.FC<PageMainProps> = ({
  headingSettings,
  ...props
}): React.ReactElement => {
  const dispatch = useDispatch();
  const tableItems = useSelector(selectorTableItems);
  const isLoadingStatus = useSelector(selectorTableIsLoading);

  React.useEffect(() => {
    dispatch(fetchTableData({
      entity: EquipmentEntity.measuringInstrument,
    }));
  }, []);

  const handleClickExportToPdf = (): void => {
    return;
  };

  const handleClickExportToExcel = (): void => {
    return;
  };

  const handleClickCreate = (): void => {
    const { location, history } = props as RouteComponentProps;
    history.push(`${location.pathname}/create`);
  };

  return (
    <>
      <PageHeading
        buttonCreateLabel="Добавить оборудование"
        exportPdfMethod={handleClickExportToPdf}
        exportExcelMethod={handleClickExportToExcel}
        createMethod={handleClickCreate}
        {...headingSettings}
      />
      <ControlPanel
        searchFormComponent={<SF_MeasuringInstruments />}
        verificationComponent={<VerificationEquipments items={tempData} />}
      />
      <GeneralTable
        columns={MI_tableProps}
        dataSourse={tableItems}
        loading={isLoadingStatus}
      />
    </>
  );
};

export default MeasuringInstruments;
