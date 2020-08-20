import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Main from '../../main/containers/Main';
import Movie from '../../movie/page/Movie';
import MovieList from '../../movie/containers/MovieList';
import MovieDetail from '../../movie/containers/MovieDetail';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function PageRouter() {
  return (
    <Switch>
      {ROUTES.map((route, i) => {
        console.log(route.name);
        return route.private ? (
          <PrivateRoute key={route.name} {...route} />
        ) : (
          <PublicRoute key={route.name} {...route} />
        );
      })}
    </Switch>
  );
}

export const ROUTES = [
  {
    path: '/main',
    name: 'Home',
    private: false,
    component: Main,
  },
  {
    path: '/movie',
    name: 'Movie',
    private: false,
    component: Movie,
    routes: [
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
    ],
  },
];
