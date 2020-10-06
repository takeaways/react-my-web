import React, { useEffect } from 'react'

import { authService } from '../../../myFirebase'

import PrivateRoutes from '../../../routes/PrivateRoutes'
import PublicRoutes from '../../../routes/PublicRoutes'
import { useUserDispatch, LOG_IN } from '../contexts/UserContext'
import { filterUser } from '../../../utils'
import { Switch } from 'react-router-dom'

export default function ContactRoutes({ routes }: any) {
  const dispatch = useUserDispatch()
  // const { user } = useUserState()
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (dispatch) {
        dispatch(LOG_IN(filterUser({ user })))
      }
    })
  }, [dispatch])

  return (
    <Switch>
      {routes.map((route: any) =>
        route.isPrivate ? (
          <PrivateRoutes key={route.label} {...route} />
        ) : (
          <PublicRoutes key={route.label} {...route} />
        ),
      )}
    </Switch>
  )
}
