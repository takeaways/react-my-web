import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import PageContainer from './common/components/PageContainer';
import TopBar from './common/components/PageTopBar';

import PageRouter from './common/components/PageRouter';
import { setStorage, getStorage } from './common/utils';

function App() {
  if (!getStorage('todos')) {
    setStorage('todos', { todos: [] });
  }
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <BrowserRouter>
        <TopBar />
        <PageContainer>
          <PageRouter />
        </PageContainer>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
