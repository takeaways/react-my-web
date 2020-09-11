import React, { useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { authService } from '../myFirebase'
import { useUserState } from '../pages/Contact/contexts/UserContext'

export default function PrivateRoutes(route: any) {
  const history = useHistory()

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (!user) {
        history.push('/contact/auth')
      }
    })
  }, [])

  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} state={route.props} />
      )}
    />
  )
}
