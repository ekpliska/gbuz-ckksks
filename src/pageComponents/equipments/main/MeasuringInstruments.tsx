import React from 'react';
import PageHeading from 'components/PageHeading';
import ControlPanel from 'components/ControlPanel';
import { MeasuringInstrumentsProps } from './types';

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
      <ControlPanel />
    </>
  );
};

export default MeasuringInstruments;
