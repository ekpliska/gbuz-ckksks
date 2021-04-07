import React from 'react';
import PageHeading from 'components/PageHeading';
import { GF_Employee } from 'components/Forms/General';
import FileUploader from 'ui/FileUploader';
import { PageMainProps } from '../main/types';
import { WordIcon } from 'ui/IconsSvg';

const EmployeesForm: React.FC<PageMainProps> = ({
  headingSettings,
}): React.ReactElement => {
  return (
    <>
      <PageHeading
        uploadFileButton={[
          <FileUploader
            key='jobDescription'
            name='jobDescription'
            label='Должностная инструкция'
            icon={<WordIcon width='13' height='13' fill='#3BB8FA' />}
          />,
          <FileUploader
            key='contract'
            name='contract'
            label='Трудовой договор'
            icon={<WordIcon width='13' height='13' fill='#FAAD14' />}
            color='orange'
          />,
        ]}
        {...headingSettings}
      />
      <GF_Employee />
    </>
  );
};

export default EmployeesForm;
