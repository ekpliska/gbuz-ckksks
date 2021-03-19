import React from 'react';
import sts from './styles.module.scss';
import { MenuProps, MenuItemProps } from './types';

export const MenuItem: React.FC<MenuItemProps> = ({
  text,
  onClick,
}): React.ReactElement => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div className={sts.menuItem} onClick={handleClick}>
      {text}
    </div>
  );
};

const Menu: React.FC<MenuProps> = ({ children }): React.ReactElement => {
  return <div className={sts.menuWrapper}>{children}</div>;
};

export default Menu;
