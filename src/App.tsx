import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageContainer from './common/components/PageContainer';
import TopBar from './common/components/PageTopBar';

import Main from './main/containers/Main';
import PageRouter from './common/components/PageRouter';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <PageContainer>
        <PageRouter />
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
