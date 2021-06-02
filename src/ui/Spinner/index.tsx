import React from 'react';
import clsn from 'classnames';
import { SpinIcon } from 'ui/IconsSvg';
import { SpinnerProps } from './types';
import sts from './styles.module.scss';

const Spinner: React.FC<SpinnerProps> = ({
  width,
  height,
  wrapperClassName,
}): React.ReactElement => {
  return (
    <div className={clsn(sts.spinner, wrapperClassName)}>
      <span>
        <SpinIcon width={width || '15'} height={height || '15'} />
      </span>
    </div>
  );
};

export default Spinner;
