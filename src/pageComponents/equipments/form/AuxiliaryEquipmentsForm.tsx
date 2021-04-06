import React from 'react';
import PageHeading from 'components/PageHeading';
import { PageMainProps } from '../main/types';
import { GF_AuxiliaryEquipment } from 'components/Forms/General';

const AuxiliaryEquipmentsForm: React.FC<PageMainProps> = ({ headingSettings }): React.ReactElement => {
  return (
    <>
      <PageHeading {...headingSettings} />
      <GF_AuxiliaryEquipment />
    </>
  );
};

export default AuxiliaryEquipmentsForm;