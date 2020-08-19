import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageContainer from './common/components/PageContainer';
import TopBar from './common/components/TopBar';

import Main from './main/containers/Main';
import Movie from './movie/containers/Movie';


function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <PageContainer>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/movie' component={Movie} />
        </Switch>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
