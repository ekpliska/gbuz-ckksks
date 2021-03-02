import React from 'react';
import clsn from 'classnames';
import { PageContentWrapperProps } from './types';
import sts from './styles.module.scss';

const PageContentWrapper: React.FC<PageContentWrapperProps> = ({
  children,
  clasNameContainer,
}): React.ReactElement => {
  return (
    <div className={clsn(sts.page, clasNameContainer)}>
      {children}
    </div>
  );
};

export default PageContentWrapper;
