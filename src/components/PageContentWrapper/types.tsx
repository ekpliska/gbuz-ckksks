import { IMenuItem } from 'shared/menuConfig';

export interface PageContentWrapperProps {
  children: React.ReactNode;
  sideBar?: IMenuItem[];
  clasNameContainer?: string;
};