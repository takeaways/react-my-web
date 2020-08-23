import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieList from '../../movie/containers/MovieList';
import MovieDetail from '../../movie/containers/MovieDetail';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Movie = lazy(() => import('../../movie/page/Movie'));
const Main = lazy(() => import('../../main/page/Main'));
const Work = lazy(() => import('../../work/page/Work'));

export default function PageRouter() {
  return (
    <Switch>
      {ROUTES.map((route, i) =>
        route.private ? (
          <PrivateRoute key={i} exact path={route.path} component={route.component} />
        ) : (
          <PublicRoute key={i} exact={route.exact} path={route.path} component={route.component} />
        ),
      )}
      <Route path="*">
        <p>Not Found</p>
      </Route>
    </Switch>
  );
}

export const ROUTES = [
  {
    path: '/',
    name: 'Home',
    private: false,
    exact: true,
    component: Main,
  },
  {
    path: '/movie',
    name: 'Movie',
    private: false,
    component: Movie,
  },
  {
    path: '/work',
    name: 'Work',
    private: false,
    component: Work,
  },
];
