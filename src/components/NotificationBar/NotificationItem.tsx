import React from 'react';
import { RightCircleIcon } from 'ui/IconsSvg';
import { NotificationItemProps } from './types';
import sts from './styles.module.scss';

const NotificationItem: React.FC<NotificationItemProps> = (): React.ReactElement => {
  return (
    <div className={sts.notificationItem}>
      <div className={sts.notificationItem__date}>
        21 января, 2021 г. 10:27:07
      </div>
      <div className={sts.notificationItem__content}>
        <div className={sts.notificationItem__content_message}>
          В системе создана новая программа проведения испытаний 
          <span className={sts.bold}>ID ППИ-10457</span>
        </div>
        <div className={sts.notificationItem__content_link}>
          <RightCircleIcon width="16" height="16" fill="#29D873" />
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
