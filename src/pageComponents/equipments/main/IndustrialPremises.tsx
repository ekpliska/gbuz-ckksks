import React from 'react';
import { RouteComponentProps } from 'react-router';
import PageHeading from 'components/PageHeading';
import GeneralTable from 'ui/GeneralTable';
import { PageMainProps } from './types';

const IndustrialPremises: React.FC<PageMainProps> = ({
  headingSettings, ...props
}): React.ReactElement => {
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
      <GeneralTable />
    </>
  );
};

export default IndustrialPremises;
