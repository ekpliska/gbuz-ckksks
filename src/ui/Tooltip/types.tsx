import { CSSProperties } from 'react';

export enum PlacementTypes {
  TOP = 'top',
  RIGTH = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
};

export interface TooltipProps {
  title: string | React.ReactNode;
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
  title: string | React.ReactNode;
  initialStyle: ITooltipPopupStyle | undefined;
  placement?: string;
};