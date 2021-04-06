import React from 'react';
import PageHeading from 'components/PageHeading';
import { PageMainProps } from '../main/types';
import { GF_TestEquipment } from 'components/Forms/General';

const TestEquipmentsForm: React.FC<PageMainProps> = ({ headingSettings }): React.ReactElement => {
  return (
    <>
      <PageHeading {...headingSettings} />
      <GF_TestEquipment />
    </>
  );
};

export default TestEquipmentsForm;