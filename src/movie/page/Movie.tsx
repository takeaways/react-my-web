import React, { lazy } from 'react';
import Header from '../components/Header';
import { Switch, Route } from 'react-router-dom';

import * as Types from '../../common/Types';
import { headerFilter } from '../../common/utils';

const MovieDetail = lazy(() => import('../containers/MovieDetail'));
const MovieList = lazy(() => import('../containers/MovieList'));

interface MovieProps {
  routes: Types.Route[];
}

const Movie: React.FC<MovieProps> = () => {
  return (
    <>
      <Header routes={headerFilter(MovieRoutes)} />
      <Switch>
        {MovieRoutes.map((route) => (
          <Route key={route.name} exact path={route.path} component={route.component} />
        ))}
      </Switch>
    </>
  );
};

const MovieRoutes = [
  {
    path: '/movie/list',
    name: 'MovieList',
    component: MovieList,
    private: false,
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: MovieDetail,
    private: false,
  },
];

export default Movie;
