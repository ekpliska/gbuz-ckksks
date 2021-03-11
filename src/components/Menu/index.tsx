import React from 'react';
import Submenu from './Submenu';
import { appRoutes } from 'route/Routes';
import sts from './styles.module.scss';

const Menu: React.FC = (): React.ReactElement => {
  return (
    <div className={sts.menuWrapper}>
      <ul className={sts.menu}>
        {appRoutes.map(({ id, headingSettings, childRoutes }, index) => {
          if (index === 0) {
            return null;
          }
          return (
            <li key={id} className={sts.menu__item}>
              <div className={sts.menu__item_label}>
                <span className={sts.icon}>{headingSettings.iconHeading}</span>
                <span className={sts.labelText}>{headingSettings.heading}</span>
              </div>
              {childRoutes?.length && (
                <Submenu childrenItems={childRoutes} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
