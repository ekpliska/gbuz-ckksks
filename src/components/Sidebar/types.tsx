import { IRouteItem } from 'route/types';

export interface SidebarProps {
  collapsed: boolean;
  onCollapsed: () => void;
}

export interface SidebarMenuProps {
  subMenuItems: IRouteItem[];
  isCollapsed: boolean;
}

export interface SidebarMenuItemProps {
  menuValues: IRouteItem;
  isCollapsed: boolean;
}
