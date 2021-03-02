import React from 'react';
import { Link } from 'react-router-dom';
import { SubmenuProps } from './types';
import sts from './styles.module.scss';

const Submenu: React.FC<SubmenuProps> = ({ mainRoute, childrenItems }): React.ReactElement => {
  return (
    <div className={sts.submenuWrapper}>
      <ul className={sts.submenu}>
        {childrenItems.map((item) => (
          <li key={item.id} className={sts.submenu__item}>
            <Link to={`${mainRoute}${item.route}`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;
