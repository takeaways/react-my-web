import React, { Suspense } from 'react'

import styled from 'styled-components'
import Heading from '../../components/common/Heading'

import { Switch, Route } from 'react-router-dom'
import PrivateRoutes from '../../routes/PrivateRoutes'
import PublicRoutes from '../../routes/PublicRoutes'

import Auth from './containers/Auth'

import UserContext from './contexts/UserContext'

export default function Contact({ routes }: any) {
  return (
    <UserContext>
      <Container>
        <Heading heading="연락하기" />
        <Suspense fallback={<h1>Loading....</h1>}>
          <Switch>
            {routes.map((route: any) =>
              route.isPrivate ? (
                <PrivateRoutes key={route.label} {...route} />
              ) : (
                <PublicRoutes key={route.label} {...route} />
              ),
            )}
            <Route component={() => <Auth />} />
          </Switch>
        </Suspense>
      </Container>
    </UserContext>
  )
}

const Container = styled.article``
