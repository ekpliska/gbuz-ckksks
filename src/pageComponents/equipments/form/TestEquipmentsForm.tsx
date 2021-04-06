import React from 'react';
import PageHeading from 'components/PageHeading';
import { PageMainProps } from '../main/types';
import { GF_TestEquipmentFrom } from 'components/Forms/General';

const TestEquipmentsForm: React.FC<PageMainProps> = ({ headingSettings }): React.ReactElement => {
  return (
    <>
      <PageHeading {...headingSettings} />
      <GF_TestEquipmentFrom />
    </>
  );
};

export default TestEquipmentsForm;