import React, { Suspense } from 'react'

import styled from 'styled-components'

import UserContext from './contexts/UserContext'

import Heading from '../../components/common/Heading'
import ContactRoutes from './routes/ContactRoutes'
import ContactNav from './components/ContactNav'

export default function Contact({ routes }: any) {
  return (
    <UserContext>
      <Container>
        <Heading heading="연락하기" />
        <ContactNav />
        <Suspense fallback={<h1>Loading....</h1>}>
          <ContactRoutes routes={routes} />
        </Suspense>
      </Container>
    </UserContext>
  )
}

const Container = styled.article`
  height: 100%;
`
