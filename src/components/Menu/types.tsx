import { IMenuItem } from 'shared/menuConfig';

// eslint-disable-next-line
export interface MenuProps {}

export interface SubmenuProps {
  childrenItems: IMenuItem[];
  mainRoute: string;
};