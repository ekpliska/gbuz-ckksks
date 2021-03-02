import React from 'react';
import { useLocation } from 'react-router';
import Navbar from 'components/Navbar';
import PageHeading from 'components/PageHeading';
import PageContentWrapper from 'components/PageContentWrapper';
import Tiles from 'components/Tiles';
import { MainPageProps } from './types';
import sts from './styles.module.scss';

const MainPage: React.FC<MainPageProps> = ({
  title,
  icon,
}): React.ReactElement => {
  const location = useLocation();

  const renderContentPage = React.useMemo(() => {
    if (location.pathname === '/') {
      return <Tiles />;
    }
  }, [location]);

  return (
    <div className={sts.mainPage}>
      <Navbar />
      <div className={sts.mainPage__container}>
        {title && <PageHeading title={title} titleIcon={icon} />}
        <PageContentWrapper>{renderContentPage}</PageContentWrapper>
      </div>
    </div>
  );
};

export default MainPage;
