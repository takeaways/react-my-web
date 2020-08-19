import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Detail from '../routes/Detail';
import { ApolloProvider } from 'react-apollo';
import client from '../apollo';

function Movie() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/:id' component={Detail} />
      </Router>
    </ApolloProvider>
  );
}

export default Movie;
