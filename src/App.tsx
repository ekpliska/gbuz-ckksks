import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from 'pages/SignIn';
import MainPage from 'pages/MainPage';
import { appRoutes } from 'route/Routes';
import { PrivateRoute } from 'route/PrivateRoute';
import { selectCurrentUser, selectIsAuthenticated } from 'store/ducks/auth/selectors';
import { fetchCurrentUser } from 'store/ducks/auth/thunks';
import { fetchDictionaryList } from 'store/ducks/dictionaries/thunks';
import './styles/index.scss';

const App: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const currentUser = useSelector(selectCurrentUser);
  // const userRole = useSelector(selectUserRole);

  const routeComponents = isAuthenticated && currentUser ? (
    appRoutes.map((routeProps) => (
      <PrivateRoute
        key={routeProps.id}
        isAuthenticated={isAuthenticated}
        {...routeProps}
      />
    ))
  ) : (
    <Route>
      {isAuthenticated ? <span>Loading...</span> : <Redirect to="/sign-in" />}
    </Route>
  );

  React.useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCurrentUser());
      dispatch(fetchDictionaryList());
    }
  }, [isAuthenticated]);

  return (
    <Switch>
      <Route
        exact
        path="/sign-in"
        render={() => (!isAuthenticated ? <SignIn /> : <Redirect to="/" />)}
      />
      <MainPage>
        {routeComponents}
      </MainPage>
      <Route component={() => <div>not found</div>} />
    </Switch>
  );
};

export default App;
