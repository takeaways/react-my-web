import React from 'react';
import { Route } from 'react-router-dom';
import * as Types from '../Types';

const PrivateRoute: React.FC<Types.Route> = (route) => {
  //인증검사 로직을 추가합니다.
  return <Route exact path={route.path} render={(props) => <route.component {...props} />} />;
};

export default PrivateRoute;
