import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from 'pages/SignIn';
import MainPage from 'pages/MainPage';
import { appRoutes } from 'route/Routes';
import { PrivateRoute } from 'route/PrivateRoute';
import {
  selectorCurrentUser,
  selectorIsAuthenticated,
} from 'store/ducks/auth/selectors';
import { fetchCurrentUser } from 'store/ducks/auth/thunks';
import './styles/index.scss';
import Spinner from 'ui/Spinner';

const App: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectorIsAuthenticated);
  const currentUser = useSelector(selectorCurrentUser);

  const routeComponents =
    isAuthenticated && currentUser ? (
      appRoutes.map((routeProps) => (
        <PrivateRoute
          key={routeProps.id}
          isAuthenticated={isAuthenticated}
          {...routeProps}
        />
      ))
    ) : (
      <Route>
        {isAuthenticated ? <Spinner /> : <Redirect to="/sign-in" />}
      </Route>
    );

  React.useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCurrentUser());
    }
  }, [isAuthenticated]);

  return (
    <Switch>
      <Route
        exact
        path="/sign-in"
        render={() => (!isAuthenticated ? <SignIn /> : <Redirect to="/" />)}
      />
      <MainPage>{routeComponents}</MainPage>
      <Route component={() => <div>not found</div>} />
    </Switch>
  );
};

export default App;
