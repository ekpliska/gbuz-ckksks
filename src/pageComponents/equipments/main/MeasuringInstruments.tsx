import React from 'react';
import PageHeading from 'components/PageHeading';
import ControlPanel from 'components/ControlPanel';
import GeneralTable from 'ui/GeneralTable';
import { VerificationEquipmentItemProps } from 'components/VerificationEquipments/types';
import { MeasuringInstrumentsProps } from './types';

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

const MeasuringInstruments: React.FC<MeasuringInstrumentsProps> = ({
  headingSettings,
}): React.ReactElement => {
  const handleClickExportToPdf = (): void => {
    return;
  };

  const handleClickExportToExcel = (): void => {
    return;
  };

  const handleClickCreate = (): void => {
    return;
  };

  return (
    <>
      <PageHeading
        buttonCreateLabel='Добавить оборудование'
        exportPdfMethod={handleClickExportToPdf}
        exportExcelMethod={handleClickExportToExcel}
        buttonCreateMethod={handleClickCreate}
        {...headingSettings}
      />
      <ControlPanel verificationItems={tempData} />
      <GeneralTable />
    </>
  );
};

export default MeasuringInstruments;
