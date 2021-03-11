import React from 'react';
import { Link } from 'react-router-dom';
import sts from './styles.module.scss';
import { IRouteItem } from 'route/types';

const TileItem: React.FC<IRouteItem> = ({
  id,
  path,
  headingSettings: { heading, fullHeading, iconHeading },
}): React.ReactElement => {
  return (
    <Link to={path} key={id}>
      <div className={sts.tile}>
        <div className={sts.tile__icon}>{iconHeading ?? null}</div>
        <div className={sts.tile__title}>
          <h3>{fullHeading ?? heading}</h3>
        </div>
      </div>
    </Link>
  );
};

export default TileItem;
