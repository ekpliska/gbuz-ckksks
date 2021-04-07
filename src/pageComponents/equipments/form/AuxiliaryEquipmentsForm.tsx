import React from 'react';
import PageHeading from 'components/PageHeading';
import { GF_AuxiliaryEquipment } from 'components/Forms/General';
import { PageMainProps } from '../main/types';

const AuxiliaryEquipmentsForm: React.FC<PageMainProps> = ({ headingSettings }): React.ReactElement => {
  return (
    <>
      <PageHeading {...headingSettings} />
      <GF_AuxiliaryEquipment />
    </>
  );
};

export default AuxiliaryEquipmentsForm;