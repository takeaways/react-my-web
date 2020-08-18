import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TopBar from './common/components/TopBar';

import Main from './main/containers/Main';
import PageContainer from './common/components/PageContainer';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <PageContainer>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
