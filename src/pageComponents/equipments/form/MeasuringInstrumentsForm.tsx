import React from 'react';
import PageHeading from 'components/PageHeading';
import { PageMainProps } from '../main/types';
import { GF_MeasuringInstrument } from 'components/Forms/General';

const MeasuringInstrumentsForm: React.FC<PageMainProps> = ({ headingSettings }): React.ReactElement => {
  return (
    <>
      <PageHeading {...headingSettings} />
      <GF_MeasuringInstrument />
    </>
  );
};

export default MeasuringInstrumentsForm;