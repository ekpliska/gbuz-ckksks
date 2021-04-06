import React from 'react';
import PageHeading from 'components/PageHeading';
import { PageMainProps } from '../main/types';
import { GF_IndustrialPremise } from 'components/Forms/General';

const IndustrialPremisesForm: React.FC<PageMainProps> = ({ headingSettings }): React.ReactElement => {
  return (
    <>
      <PageHeading {...headingSettings} />
      <GF_IndustrialPremise />
    </>
  );
};

export default IndustrialPremisesForm;