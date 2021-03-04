import React from 'react';
import { Link } from 'react-router-dom';
import clsn from 'classnames';
import { SidebarMenuItemProps } from './types';
import sts from './styles.module.scss';

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  mainRoute,
  menuValues: { icon, label, fullLabel, route },
  isCollapsed,
}): React.ReactElement => {

  return (
    <li
      className={clsn(sts.sidebar__menu_item, {
        [sts.active]: false,
      })}
    >
      <Link to={`${mainRoute}${route}`} className={sts.link}>
        <span className={sts.link__icon}>
          {icon}
        </span>
        <span
          className={clsn(sts.link__label, {
            [sts.showing]: isCollapsed,
          })}
        >
          {fullLabel ?? label}
        </span>
      </Link>
    </li>
  );
};

export default SidebarMenuItem;
