import React from 'react';
import { SidebarMenuProps } from './types';
import sts from './styles.module.scss';
import SidebarMenuItem from './SidebarMenuItem';

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  subMenuItems,
  isCollapsed,
}): React.ReactElement => {
  return (
    <div className={sts.sidebar__menuWrapper}>
      <ul className={sts.sidebar__menu}>
        {subMenuItems.map((item) => (
          <SidebarMenuItem
            key={item.id}
            menuValues={item}
            isCollapsed={isCollapsed}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
