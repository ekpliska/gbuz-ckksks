import React from 'react';
import { useLocation } from 'react-router';
import clsn from 'classnames';
import Navbar from 'components/Navbar';
import PageHeading from 'components/PageHeading';
import PageContentWrapper from 'components/PageContentWrapper';
import Tiles from 'components/Tiles';
import Sidebar from 'components/Sidebar';
import { IMenuItems, menuItems } from 'shared/menuConfig';
import { MainPageProps } from './types';
import sts from './styles.module.scss';

const MainPage: React.FC<MainPageProps> = ({
  title,
  icon,
}): React.ReactElement => {
  const [isCollapsedSidebar, setIsCollapsedSisebar] = React.useState<boolean>(
    false,
  );
  const location = useLocation();

  const sidebarMenu = React.useMemo((): (IMenuItems | null | undefined) => {
    const path = String(location.pathname).substring(1).split('/', 1);
    const mainRoute: (string | null) = path?.length && path[0] ? `/${path[0]}` : null;

    if (!mainRoute) {
      return null;
    }
    return menuItems.find((item) => String(item.mainRoute) === String(mainRoute));

  }, [location]);

  const renderContentPage = React.useMemo(() => {
    if (location.pathname === '/') {
      return <Tiles />;
    }
  }, [location]);

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
        {title && <PageHeading title={title} titleIcon={icon} />}
        {sidebarMenu && (
          <Sidebar
            menu={sidebarMenu}
            collapsed={isCollapsedSidebar}
            onCollapsed={toggleSidebar}
          />
        )}
        <PageContentWrapper>{renderContentPage}</PageContentWrapper>
      </div>
    </div>
  );
};

export default MainPage;
