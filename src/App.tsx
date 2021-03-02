import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SingIn from './pages/SingIn';
import MainPage from './pages/MainPage';
import { menuItems } from 'shared/menuConfig';
import './styles/index.scss';

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <Switch>
        <Route path='/sign-in' component={SingIn} />
        <Route exact path='/' render={() => <MainPage />} />
        {menuItems.map(({ mainRoute, children }) => {
          return children?.map(({ id, label, fullLabel, icon, route }) => (
            <Route
              key={id}
              path={`${mainRoute}${route}`}
              render={() => <MainPage title={fullLabel ?? label} icon={icon} />}
            />
          ));
        })}
      </Switch>
    </>
  );
};

export default App;
