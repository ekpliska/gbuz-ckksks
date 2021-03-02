import { IMenuItem } from 'shared/menuConfig';

export interface TileItemProps extends IMenuItem {
  firstChildRoute: string | null;
};