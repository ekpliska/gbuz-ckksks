import React from 'react';
import PageHeading from 'components/PageHeading';
import { PageMainProps } from '../main/types';
import { GF_Employee } from 'components/Forms/General';

const EmployeesForm: React.FC<PageMainProps> = ({ headingSettings }): React.ReactElement => {
  return (
    <>
      <PageHeading {...headingSettings} />
      <GF_Employee />
    </>
  );
};

export default EmployeesForm;