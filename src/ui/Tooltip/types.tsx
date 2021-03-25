import { CSSProperties } from 'react';

export enum PlacementTypes {
  TOP = 'top',
  RIGTH = 'right',
  BOTTOM = 'bottom',
  LEFT = 'LEFT',
};

export interface TooltipProps {
  title: string;
  children: React.ReactNode;
  placement?: PlacementTypes;
  classNameContainer?: string;
};

export interface ITooltipPopupStyle extends CSSProperties {
  top?: number;
  rigth?: number;
  bottom?: number;
  left?: number;
};

export interface TooltipPopupProps {
  title: string;
  initialStyle: ITooltipPopupStyle | undefined;
  placement?: string;
};