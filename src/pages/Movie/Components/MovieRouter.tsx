import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../Routes/Home'
import Search from '../Routes/Search'
import TV from '../Routes/TV'
import Detail from '../Routes/Detail'

export default function MovieRouter() {
  return (
    <Switch>
      <Route exact path="/movie" component={Home} />
      <Route path="/movie/tv" component={TV} />
      <Route path="/movie/tv/popular" component={TV} />
      <Route path="/movie/detail/:id" component={Detail} />
      <Route path="/movie/search" component={Search} />
      <Redirect from="*" to="/movie" />
    </Switch>
  )
}
