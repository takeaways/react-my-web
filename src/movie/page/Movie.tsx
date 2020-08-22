import React, { Fragment } from 'react';
import Header from '../components/Header';
import { Switch, Route } from 'react-router-dom';
import * as Type from '../../common/Types';
import MovieList from '../containers/MovieList';

export default function Movie() {
  return (
    <>
      <Header />
      <Route exact path={'/movie/list'} component={MovieList} />
    </>
  );
}
