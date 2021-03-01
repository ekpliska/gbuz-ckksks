import React from 'react';
import clsn from 'classnames';
import NotificationItem from './NotificationItem';
import { NotificationDropdownProps } from './types';
import sts from './styles.module.scss';

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ isVisible }): React.ReactElement => {
  return (
    <div className={clsn(sts.notificationWrapper, {
      [sts.visible]: isVisible,
    })}>
      <div className={sts.notificationDropdown}>
        <div
          className={clsn(
            sts.notificationDropdown__heading,
            sts.notificationDropdown__heading_top,
          )}
        >
          <h3 className={sts.title}>Уведомления</h3>
          <span className={sts.counter}>7</span>
        </div>
        <div className={sts.notificationDropdown__content}>
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </div>
        <div
          className={clsn(
            sts.notificationDropdown__heading,
            sts.notificationDropdown__heading_bottom,
          )}
        >
          <span className={sts.link}>Отметить все как прочитаные</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
