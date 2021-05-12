import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';
import MainPage from 'pages/MainPage';
import { appRoutes } from 'route/Routes';
import { PrivateRoute } from 'route/PrivateRoute';
import store from 'store/store';
import './styles/index.scss';

const App: React.FC = (): React.ReactElement => {
  const isAuthenticated = true;

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
