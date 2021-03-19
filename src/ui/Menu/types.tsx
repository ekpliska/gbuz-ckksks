export interface MenuProps {
  children: React.ReactElement | React.ReactElement[];
};

export interface MenuItemProps {
  text: string;
  onClick?: () => void;
};