import React from 'react';
import { Link } from 'react-router-dom';
import { TileItemProps } from './types';
import sts from './styles.module.scss';

const TileItem: React.FC<TileItemProps> = ({
  label,
  icon,
  route,
  firstChildRoute,
}): React.ReactElement => {
  return (
    <Link to={`${route}${firstChildRoute}`}>
      <div className={sts.tile}>
        <div className={sts.tile__icon}>{icon}</div>
        <div className={sts.tile__title}>
          <h3>{label}</h3>
        </div>
      </div>
    </Link>
  );
};

export default TileItem;
