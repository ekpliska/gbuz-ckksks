import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';
import MainPage from 'pages/MainPage';
import { appRoutes } from 'route/Routes';
import { PrivateRoute } from 'route/PrivateRoute';
import './styles/index.scss';

const App: React.FC = (): React.ReactElement => {
  const isAuthenticated = true;

  return (
    <Switch>
      <Route
        exact
        path="/sign-in"
        render={() => (!isAuthenticated ? <SignIn /> : <Redirect to="/" />)}
      />
      <MainPage>
        {appRoutes.map((routeProps) => (
          <PrivateRoute
            key={routeProps.id}
            isAuthenticated={isAuthenticated}
            {...routeProps}
          />
        ))}
      </MainPage>
      <Route component={() => <div>not found</div>} />
    </Switch>
  );
};

export default App;
