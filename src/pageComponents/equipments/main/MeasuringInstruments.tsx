import React from 'react';
import PageHeading from 'components/PageHeading';
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

  return (
    <>
      <PageHeading
        buttonCreateLabel='Добавить оборудование'
        exportPdfMethod={handleClickExportToPdf}
        exportExcelMethod={handleClickExportToExcel}
        {...headingSettings}
      />
    </>
  );
};

export default MeasuringInstruments;
