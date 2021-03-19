export interface DropdownProps {
  overlay?: React.ReactElement;
  disabled?: boolean;
  visible?: boolean;
  children?: React.ReactNode;
};

export interface ICoords {
  left?: number;
  top?: number;
  bottom?: number;
  rigth?: number;
};

export interface DropdownPopupProps extends ICoords {
  overlay?: React.ReactElement;
  updatePopupCoords: () => void;
};

