import React from 'react'
import styled from 'styled-components'
export default function Main({ children }: any) {
  return <Container>{children}</Container>
}

const Container = styled.main`
  overflow: auto;
  height: 100%;
`
