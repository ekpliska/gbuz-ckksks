import React from 'react';
import { menuItems } from 'shared/menuConfig';
import sts from './styles.module.scss';
import TileItem from './TileItem';

const Tiles: React.FC = (): React.ReactElement => {
  return (
    <div className={sts.tiles}>
      {menuItems.map((item) => (
        <TileItem
          key={item.id}
          id={item.id}
          label={item.label}
          icon={item.icon}
          route={item.mainRoute}
          firstChildRoute={item.children?.length ? item.children[0].route : null}
        />
      ))}
    </div>
  );
};

export default Tiles;
