import React from 'react';
import { Route } from 'react-router-dom';
import * as Types from '../Types';

interface PrivateRouteProps {
  component: any;
  exact: boolean;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  //인증검사 로직을 추가합니다.
  return <Route {...rest} render={(props) => <Component {...rest} {...props} />} />;
};

export default PrivateRoute;
