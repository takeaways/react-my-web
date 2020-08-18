import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"

import TopBar from './common/components/TopBar';

import Main from './main/containers/Main';

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <Switch>
        <Route path="/" component={Main}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
