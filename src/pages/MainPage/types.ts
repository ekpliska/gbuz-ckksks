import { IRouteItem, IRoutes } from 'route/types';

export interface MainPageProps {
  parentRoute?: IRoutes;
  childRoutes?: IRouteItem[] | undefined;
  children?: React.ReactNode;
};