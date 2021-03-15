import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRouteProps } from './types';

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  ...routeProps
}): React.ReactElement => {
  return (
    <React.Fragment>
      <Route
        {...routeProps}
        render={(props) =>
          isAuthenticated ? (
            <routeProps.Component headingSettings={routeProps.headingSettings} {...props} />
          ) : (
            <Redirect to="/sign-in" />
          )
        }
      />
      {routeProps.childRoutes?.length &&
        routeProps.childRoutes.map((childRoute) => (
          <PrivateRoute key={childRoute.id} isAuthenticated={isAuthenticated} Component={childRoute.Component} {...childRoute} />
        ))}
    </React.Fragment>
  );
};
