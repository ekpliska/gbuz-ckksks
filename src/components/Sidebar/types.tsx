import { IMenuItem, IMenuItems } from 'shared/menuConfig';

export interface SidebarProps {
  menu: IMenuItems;
  collapsed: boolean;
  onCollapsed: () => void;
}

export interface SidebarMenuProps {
  mainRoute: string;
  subMenuItems: IMenuItem[];
  isCollapsed: boolean;
}

export interface SidebarMenuItemProps {
  mainRoute: string;
  menuValues: IMenuItem;
  isCollapsed: boolean;
}
