import React from 'react';
import clsn from 'classnames';
import { RightOutlinedArrow } from 'ui/IconsSvg';
import SidebarMenu from './SidebarMenu';
import { SidebarProps } from './types';
import sts from './styles.module.scss';
import { Layout } from 'antd';

const { Sider } = Layout;

const Sidebar: React.FC<SidebarProps> = ({
  menu,
  collapsed,
  onCollapsed,
}): React.ReactElement => {
  return (
    <div
      className={clsn(sts.sidebar, sts.sidebar__wrapper, {
        [sts.collapsed]: collapsed,
      })}
      onClick={onCollapsed}
    >
      <Sider />
      <div
        className={clsn(sts.sidebar__toggleButton, {
          [sts.collapsed]: collapsed,
        })}
      >
        <RightOutlinedArrow width="12" height="12" fill="#FFF" />
      </div>
      {menu?.children?.length && (
        <SidebarMenu
          mainRoute={menu.mainRoute}
          subMenuItems={menu.children}
          isCollapsed={collapsed}
        />
      )}
    </div>
  );
};

export default Sidebar;
