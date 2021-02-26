import Navbar from 'components/Navbar';
import React from 'react';
import sts from './styles.module.scss';

const MainPage: React.FC = (): React.ReactElement => {
  return (
    <div className={sts.mainPage}>
      <Navbar />
    </div>
  );
};

export default MainPage;