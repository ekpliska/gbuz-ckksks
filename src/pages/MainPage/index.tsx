import React from 'react';
import clsn from 'classnames';
import Navbar from 'components/Navbar';
import PageContentWrapper from 'components/PageContentWrapper';
import Sidebar from 'components/Sidebar';
import { MainPageProps } from './types';
import sts from './styles.module.scss';
import axios from 'axios';

const MainPage: React.FC<MainPageProps> = ({
  children,
}): React.ReactElement => {
  const [isCollapsedSidebar, setIsCollapsedSisebar] = React.useState<boolean>(false);

  React.useEffect(() => {
    const axiosRequest = axios.create({
      baseURL: location.origin,
      withCredentials: true,
    });

    axiosRequest.post('/v1/auth');

  }, []);

  const toggleSidebar = () => {
    setIsCollapsedSisebar((prevState) => !prevState);
  };

  return (
    <div className={sts.mainPage}>
      <Navbar />
      <div
        className={clsn(sts.mainPage__container, {
          [sts.collapsed]: isCollapsedSidebar,
        })}
      >
        <Sidebar collapsed={isCollapsedSidebar} onCollapsed={toggleSidebar} />
        <PageContentWrapper>{children}</PageContentWrapper>
      </div>
    </div>
  );
};

export default MainPage;
