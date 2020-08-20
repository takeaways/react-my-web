import React from 'react';
import { Route } from 'react-router-dom';
import * as Types from '../Types';

const PublicRoute: React.FC<Types.Route> = (route) => {
  console.log('----------');
  return (
    <Route
      exact
      path={route.path}
      render={(props) => <route.component {...props} route={route} />}
    />
  );
};

export default PublicRoute;
