import React from 'react';
import { RouteComponentProps } from 'react-router';
import PageHeading from 'components/PageHeading';
import ControlPanel from 'components/ControlPanel';
import { SF_Employees } from 'components/Forms/Search';
import { PageMainProps } from './types';

const Employees: React.FC<PageMainProps> = ({
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
        buttonCreateLabel='Добавить сотрудника'
        exportPdfMethod={handleClickExportToPdf}
        exportExcelMethod={handleClickExportToExcel}
        createMethod={handleClickCreate}
        {...headingSettings}
      />
      <ControlPanel searchFormComponent={<SF_Employees />} />
    </>
  );
};

export default Employees;
