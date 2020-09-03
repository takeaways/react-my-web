import React from 'react'
import { Route } from 'react-router-dom'

export default function PublicRouters(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} state={route.props} />
      )}
    />
  )
}
