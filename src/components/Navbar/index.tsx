import React from 'react';
import UserBar from 'components/UserBar';
import NotificationBar from 'components/NotificationBar';
import { TitlesIcon } from 'ui/IconsSvg';
import sts from './styles.module.scss';
import Menu from 'components/Menu';

const Navbar: React.FC = (): React.ReactElement => {
  return (
    <div className={sts.navbar}>
      <div className={sts.navbar__home}>
        <TitlesIcon width='32' height='32' fill='#FFF' />
      </div>
      <Menu />
      <NotificationBar />
      <UserBar userInfo={{ firstname: 'Петр', lastname: 'Петров' }} />
    </div>
  );
};

export default Navbar;