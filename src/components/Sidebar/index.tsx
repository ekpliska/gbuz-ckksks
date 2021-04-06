import React from 'react';
import { useLocation } from 'react-router-dom';
import clsn from 'classnames';
import SidebarMenu from './SidebarMenu';
import { RightOutlinedArrow } from 'ui/IconsSvg';
import { appRoutes } from 'route/Routes';
import { SidebarProps } from './types';
import sts from './styles.module.scss';

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapsed }): React.ReactElement | null => {
  const location = useLocation();

  const menuItems = React.useMemo(() => {
    const { pathname } = location;
    const paths: string[] = pathname.substring(1).split('/');
    const mainRoute: string = paths[0];
    if (!mainRoute) {
      return null;
    }
    return appRoutes.find((item) => String(item.id) === String(mainRoute))?.childRoutes;
  }, [location.pathname]);

  if (!menuItems) {
    return null;
  }

  return (
    <div
      className={clsn(sts.sidebar, sts.sidebar__wrapper, {
        [sts.collapsed]: collapsed,
      })}
    >
      <div
        className={clsn(sts.sidebar__toggleButton, {
          [sts.collapsed]: collapsed,
        })}
        onClick={onCollapsed}
      >
        <RightOutlinedArrow width='12' height='12' fill='#FFF' />
      </div>
      <SidebarMenu isCollapsed={collapsed} subMenuItems={menuItems} />
    </div>
  );
};

export default Sidebar;
