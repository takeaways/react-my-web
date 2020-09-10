import React, { Suspense } from 'react'

import styled from 'styled-components'
import Heading from '../../components/common/Heading'

import { Switch, Route } from 'react-router-dom'
import PrivateRoutes from '../../routes/PrivateRoutes'
import PublicRoutes from '../../routes/PublicRoutes'

import { authService } from '../../myFirebase'
import Home from './containers/Home'

export default function Contact({ routes }: any) {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Container>
        <Heading heading="연락하기" />
        <Switch>
          {routes.map((route: any) =>
            route.isPrivate ? (
              <PrivateRoutes key={route.label} {...route} />
            ) : (
              <PublicRoutes key={route.label} {...route} />
            ),
          )}
          <Route component={() => <Home />} />
        </Switch>
      </Container>
    </Suspense>
  )
}

const Container = styled.article``
