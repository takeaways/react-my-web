import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import PublicRoutes from './PublicRoutes'

export default function MainRouter() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Switch>
        {routes.map(route =>
          false ? null : <PublicRoutes key={route.label} {...route} />,
        )}

        <Route component={() => <h1>Not Found</h1>} />
      </Switch>
    </Suspense>
  )
}
