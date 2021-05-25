import React from 'react';
import { RouteComponentProps } from 'react-router';
import PageHeading from 'components/PageHeading';
import ControlPanel from 'components/ControlPanel';
import { VerificationEquipmentItemProps } from 'components/VerificationEquipments/types';
import VerificationEquipments from 'components/VerificationEquipments';
import { SF_MeasuringInstruments } from 'components/Forms/Search';
import GeneralTable from 'ui/GeneralTable';
import { PageMainProps } from './types';
import { useDispatch } from 'react-redux';
import { fetchTableData } from 'store/ducks/table/thunks';
import { TableSectionEntity } from 'store/ducks/table/state';

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
  headingSettings, ...props
}): React.ReactElement => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTableData(TableSectionEntity.measuringInstrument));
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
        buttonCreateLabel='Добавить оборудование'
        exportPdfMethod={handleClickExportToPdf}
        exportExcelMethod={handleClickExportToExcel}
        createMethod={handleClickCreate}
        {...headingSettings}
      />
      <ControlPanel
        searchFormComponent={<SF_MeasuringInstruments />}
        verificationComponent={<VerificationEquipments items={tempData} />}
      />
      <GeneralTable />
    </>
  );
};

export default MeasuringInstruments;
