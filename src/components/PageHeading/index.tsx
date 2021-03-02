import React from 'react';
import { PageHeadingProps } from './types';
import sts from './styles.module.scss';

const PageHeading: React.FC<PageHeadingProps> = ({ title, titleIcon }): React.ReactElement => {
  return (
    <div className={sts.pageHeading}>
      <div className={sts.pageHeading__title}>
        {titleIcon && (
          <span className={sts.pageHeading__title_icon}>
            {titleIcon}
          </span>
        )}
        <h2>{title}</h2>
      </div>
      {/* <div className={sts.pageHeading__buttons}>
        <button>buttons</button>
        <button>buttons</button>
      </div> */}
    </div>
  );
};

export default PageHeading;