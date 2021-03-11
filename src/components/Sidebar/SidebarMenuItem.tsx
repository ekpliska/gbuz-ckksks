import React from 'react';
import { Link } from 'react-router-dom';
import clsn from 'classnames';
import { SidebarMenuItemProps } from './types';
import sts from './styles.module.scss';

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  menuValues: { path, headingSettings },
  isCollapsed,
}): React.ReactElement => {

  return (
    <li
      className={clsn(sts.sidebar__menu_item, {
        [sts.active]: false,
      })}
    >
      <Link to={path} className={sts.link}>
        <span className={sts.link__icon}>
          {headingSettings.iconHeading}
        </span>
        <span
          className={clsn(sts.link__label, {
            [sts.showing]: isCollapsed,
          })}
        >
          {headingSettings.fullHeading ?? headingSettings.heading}
        </span>
      </Link>
    </li>
  );
};

export default SidebarMenuItem;
