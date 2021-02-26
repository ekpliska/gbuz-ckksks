import React from 'react';
import { BellIcon } from 'ui/IconsSvg';
import { NotificationBarProps } from './types';
import NotificationDropdown from './NotificationDropdown';
import sts from './styles.module.scss';

const NotificationBar: React.FC<NotificationBarProps> = (): React.ReactElement => {
  return (
    <div className={sts.container}>
      <div className={sts.notification}>
        <BellIcon width='22' height='22' fill='#086FA1' />
        <span className={sts.notification__badge}></span>
      </div>
      <NotificationDropdown />
    </div>
  );
};

export default NotificationBar;
