import React from 'react';
import TileItem from './TileItem';
import { TilesProps } from './types';
import { appRoutes } from 'route/Routes';
import sts from './styles.module.scss';

const Tiles: React.FC<TilesProps> = ({
  location,
}): React.ReactElement | null => {
  const tileItems = React.useMemo(() => {
    const { pathname } = location;
    const paths: string[] = pathname.substring(1).split('/');
    const mainRoute: string = paths[0];
    if (!mainRoute) {
      return appRoutes;
    }
    return appRoutes.find((item) => String(item.id) === String(mainRoute))
      ?.childRoutes;
  }, [location.pathname]);

  if (!tileItems) {
    return null;
  }

  return (
    <div className={sts.tiles}>
      {tileItems.map(({ id, path, headingSettings }) => (
        <TileItem
          key={id}
          id={id}
          path={path}
          headingSettings={headingSettings}
        />
      ))}
    </div>
  );
};

export default Tiles;
