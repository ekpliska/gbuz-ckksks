import React from 'react';
import PageHeading from 'components/PageHeading';
import { MeasuringInstrumentsProps } from '../main/types';
import { GF_MeasuringInstrument } from 'components/Forms/General';

const MeasuringInstrumentsForm: React.FC<MeasuringInstrumentsProps> = ({ headingSettings }): React.ReactElement => {
  return (
    <>
      <PageHeading {...headingSettings} />
      <GF_MeasuringInstrument />
    </>
  );
};

export default MeasuringInstrumentsForm;