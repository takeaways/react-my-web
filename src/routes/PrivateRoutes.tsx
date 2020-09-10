import React, { useState } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { authService } from '../myFirebase'

export default function PrivateRoutes(route: any) {
  const history = useHistory()
  if (authService.currentUser) {
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
