import React, { Suspense } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import routes from './routes'
import PublicRoutes from './PublicRoutes'

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Switch>
          {routes.map(route =>
            false ? null : <PublicRoutes key={route.label} {...route} />,
          )}
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
