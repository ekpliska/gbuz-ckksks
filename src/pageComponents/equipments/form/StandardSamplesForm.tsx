import React from 'react';
import PageHeading from 'components/PageHeading';
import { PageMainProps } from '../main/types';
import { GF_StandardSample } from 'components/Forms/General';

const StandardSamplesForm: React.FC<PageMainProps> = ({ headingSettings }): React.ReactElement => {
  return (
    <>
      <PageHeading {...headingSettings} />
      <GF_StandardSample />
    </>
  );
};

export default StandardSamplesForm;