import React from 'react';
import Submenu from './Submenu';
import { menuItems } from 'shared/menuConfig';
import { MenuProps } from './types';
import sts from './styles.module.scss';

const Menu: React.FC<MenuProps> = (): React.ReactElement => {
  return (
    <div className={sts.menuWrapper}>
      <ul className={sts.menu}>
        {menuItems.map(({ id, label, icon, mainRoute, children }) => {
          return (
            <li key={id} className={sts.menu__item}>
              <div className={sts.menu__item_label}>
                <span className={sts.icon}>{icon}</span>
                <span className={sts.labelText}>{label}</span>
              </div>
              {children?.length && (
                <Submenu mainRoute={mainRoute} childrenItems={children} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
