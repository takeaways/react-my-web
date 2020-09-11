import React, { Suspense } from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'
import Heading from '../../components/common/Heading'

import PrivateRoutes from '../../routes/PrivateRoutes'
import PublicRoutes from '../../routes/PublicRoutes'

import UserContext from './contexts/UserContext'

export default function Contact({ routes }: any) {
  return (
    <UserContext>
      <Container>
        <h1>HHHHHHH</h1>
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
          </Switch>
        </Suspense>
      </Container>
    </UserContext>
  )
}

const Container = styled.article``
