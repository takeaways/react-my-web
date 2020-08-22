import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import * as Types from '../Types';

interface PublicRouteProps {
  component: any;
  exact?: any;
  path: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, ...rest }) => {
  useEffect(() => {
    console.log('PublicRoute');
  }, []);

  return <Route {...rest} render={(props) => <Component {...rest} {...props} />} />;
};

export default PublicRoute;
