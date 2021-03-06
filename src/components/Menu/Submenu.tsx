import React from 'react';
import { Link } from 'react-router-dom';
import { SubmenuProps } from './types';
import sts from './styles.module.scss';

const Submenu: React.FC<SubmenuProps> = ({ childrenItems }): React.ReactElement => {
  return (
    <div className={sts.submenuWrapper}>
      <ul className={sts.submenu}>
        {childrenItems.map(({ id, path, headingSettings }) => (
          <li key={id} className={sts.submenu__item}>
            <Link to={path}>
              {headingSettings.heading}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;
