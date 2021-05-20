import React from 'react';
import clsn from 'classnames';
import { SpinIcon } from 'ui/IconsSvg';
import { SpinnerProps } from './types';
import sts from './styles.module.scss';

const Spinner: React.FC<SpinnerProps> = ({ wrapperClassName }): React.ReactElement => {
  return (
    <div className={clsn(sts.spinner, wrapperClassName)}>
      <span>
        <SpinIcon />
      </span>
    </div>
  );
};

export default Spinner;