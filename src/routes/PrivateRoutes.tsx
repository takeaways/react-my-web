import React, { useState } from 'react'
import { Route, useHistory } from 'react-router-dom'

export default function PrivateRoutes(route: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const history = useHistory()

  if (!isLoggedIn) {
    history.push('/contact')
  }

  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} state={route.props} />
      )}
    />
  )
}
