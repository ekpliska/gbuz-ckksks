import React from 'react';
import { MenuProps, menuItems } from './types';
import sts from './styles.module.scss';
import Submenu from './Submenu';

const Menu: React.FC<MenuProps> = (): React.ReactElement => {
  return (
    <div className={sts.menuWrapper}>
      <ul className={sts.menu}>
        {menuItems.map((item) => {
          return (
            <li key={item.id} className={sts.menu__item}>
              <div className={sts.menu__item_label}>
                <span className={sts.icon}>{item.icon}</span>
                <span className={sts.labelText}>{item.label}</span>
              </div>
              {item.children?.length && (
                <Submenu childrenItems={item.children} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
