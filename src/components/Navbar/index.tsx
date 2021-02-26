import React from 'react';
import UserBar from 'components/UserBar';
import NotificationBar from 'components/NotificationBar';
import sts from './styles.module.scss';

const Navbar: React.FC = (): React.ReactElement => {
  return (
    <div className={sts.navbar}>
      <div className={sts.navbar__home}>
        home
      </div>
      <div className={sts.navbar__menu}>
        menu
      </div>
      <NotificationBar />
      <UserBar userInfo={{ firstname: 'Петр', lastname: 'Петров' }} />
      {/* <div className={sts.navbar__notifications}>
        notifications
      </div> */}
      {/* <div className={sts.navbar__userBar}>
      </div> */}
    </div>
  );
};

export default Navbar;